# Phase 1 - Implémentation Sécurité 🔒

## 📋 Vue d'ensemble

Cette phase met en place une sécurité robuste pour l'authentification et la communication API. Passage de **plaintext passwords** et **localStorage tokens** à un système professionnel avec **bcrypt + JWT + httpOnly cookies**.

---

## 🔐 Changements Effectués

### Backend (`/backend`)

#### 1. **Nouvelles Dépendances** (`package.json`)
```json
{
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.1.2",
  "cookie-parser": "^1.4.6",
  "express-rate-limit": "^7.1.5",
  "express-validator": "^7.0.0"
}
```
- `bcryptjs`: Hachage sécurisé des mots de passe
- `jsonwebtoken`: Tokens JWT avec expiration
- `cookie-parser`: Gestion des cookies httpOnly
- `express-rate-limit`: Protection contre brute force
- `express-validator`: Validation/sanitization des entrées

#### 2. **Contrôleur Auth Refactorisé** (`controllers/auth.controller.js`)

**Avant:**
```javascript
// ❌ Insécurisé
const users = [{ email: 'admin@iftpl.com', password: 'admin123' }]
```

**Après:**
```javascript
// ✅ Sécurisé avec bcrypt
const users = [{ 
  id: 1, 
  email: 'admin@iftpl.com', 
  passwordHash: '$2a$10$...' // bcrypt hash
}]

// JWT avec 24h expiration
const generateJWT = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '24h'
  })
}

// Login avec vérification bcrypt
async function login(req, res) {
  const isPasswordValid = await bcrypt.compare(password, user.passwordHash)
  const token = generateJWT(user.id)
  
  // Cookie httpOnly (XSS-proof)
  res.cookie('authToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict'
  })
}
```

**Nouvelles Fonctionnalités:**
- ✅ `generateJWT()` - JWT avec 24h expiration
- ✅ `initializeUsers()` - Hash les mots de passe au démarrage
- ✅ `login()` - Vérifie avec bcrypt, envoie cookie httpOnly
- ✅ `me()` - Lit token depuis cookie, valide JWT
- ✅ `logout()` - Blacklist le token, efface cookie
- ✅ `verifyToken()` - Middleware pour routes protégées
- ✅ Blacklist global pour tokens révoqués

#### 3. **Middleware de Validation** (`middleware/validators.js`) - NOUVEAU

```javascript
// Valide email et mot de passe
validateLogin: [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 })
]

// Valide les formations/actualités/galerie
validateFormation, validateActualite, validateGalerie, ...

// Utilitaire pour gérer erreurs de validation
handleValidationErrors(req, res, next)
```

#### 4. **Middleware Rate Limiting** (`middleware/rateLimiter.js`) - NOUVEAU

```javascript
loginLimiter: 5 tentatives / 15 min → Empêche brute force
createLimiter: 30 créations / heure
updateLimiter: 50 modifications / heure
generalLimiter: 100 requêtes / 15 min (global)
```

#### 5. **Serveur Principal Mis à Jour** (`index.js`)

**Additions:**
```javascript
// ✅ Cookie parser
app.use(cookieParser())

// ✅ Rate limiting global
app.use(generalLimiter)

// ✅ Initialiser les utilisateurs au démarrage
initializeUsers()

// ✅ Le rate limiter de login est appliqué AVANT le routeur auth
app.use('/api/auth', loginLimiter, authRouter)

// ✅ Gestion erreurs centralisée
app.use((err, req, res, next) => { ... })
```

#### 6. **Routeur Auth Mis à Jour** (`routers/auth.router.js`)

```javascript
// ✅ Validation middleware sur le login
router.post('/login', validateLogin, handleValidationErrors, AuthCtrl.login)
router.get('/me', AuthCtrl.me)
router.post('/logout', AuthCtrl.logout)
```

#### 7. **Fichier Configuration** (`.env.example`) - NOUVEAU

```env
PORT=5000
JWT_SECRET=your-secret-key-here (générer avec: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
JWT_EXPIRES_IN=24h
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

---

### Frontend (`/frontend`)

#### 1. **Service Auth Adapté** (`src/services/authApi.js`)

**Avant:**
```javascript
// ❌ Token dans localStorage
export async function me(token) {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
  })
}
```

**Après:**
```javascript
// ✅ Cookie automatique avec credentials: 'include'
export async function loginAdmin({ email, password }) {
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'include', // Important!
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  // Cookie httpOnly envoyé automatiquement par le serveur
  return res.json()
}

export async function me() {
  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include' // Important!
  })
  return res.json()
}
```

#### 2. **API Client Mise à Jour** (`src/utils/apiClient.js`)

**Addition:**
```javascript
const defaultOptions = {
  credentials: 'include', // Envoyer les cookies avec TOUTES les requêtes
  headers: { 'Content-Type': 'application/json' }
}

// Utilisé dans TOUTES les fonctions fetch
fetch(url, { ...defaultOptions, method: 'POST', body: ... })
```

#### 3. **Pages Admin Mises à Jour**

**`src/admin/Login.jsx`**
```javascript
// ❌ Avant: localStorage
localStorage.setItem('user', JSON.stringify( userItem))

// ✅ Après: Pas de localStorage, cookies automatiques
const result = await loginAdmin({ email, password })
navigate('/admin')
```

**`src/admin/Dasboard.jsx`**
```javascript
// ❌ Avant
const stored = JSON.parse(localStorage.getItem('user'))
const profile = await me(stored.token)

// ✅ Après
const profile = await me() // Pas de paramètre!
```

**`src/admin/pages/FormationsAdmin.jsx`**
**`src/admin/pages/GalerieAdmin.jsx`**
**`src/admin/pages/ActualitesAdmin.jsx`**
```javascript
// ✅ Même pattern: me() sans paramètre
```

---

## 🚀 Démarrage (Setup)

### 1. **Installation Backend**

```bash
cd backend
npm install
```

Nouvelles dépendances installées automatiquement.

### 2. **Configuration Backend**

Créer un `.env` à partir de `.env.example`:

```bash
# Générer un JWT_SECRET sécurisé
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
# Copier le résultat dans .env

# Exemple .env
PORT=5000
JWT_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6
JWT_EXPIRES_IN=24h
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

### 3. **Démarrage du Serveur**

```bash
npm run dev
# ou
npm start
```

✅ Vous devez voir:
```
=====================================
🚀 Serveur backend démarré sur port 5000
=====================================
🔒 Sécurité activée:
   ✓ CORS configuré
   ✓ Cookie parser activé
   ✓ Rate limiting activé
   ✓ Validation des entrées activée
=====================================
```

### 4. **Frontend (Aucune Installation Requise)**

Les fichiers sont déjà mis à jour. Il suffit de redémarrer le serveur frontend:

```bash
cd frontend
npm run dev
```

---

## ✅ Vérification Fonctionnement

### Test 1: Login via l'Admin
1. Aller à `http://localhost:5173/admin/login`
2. Entrer: `admin@iftpl.com` / `admin123`
3. ✅ Redirection vers `/admin` dashboard
4. ✅ Vérifier DevTools → Application → Cookies:
   - Vous devez voir `authToken` (httpOnly flag = oui)

### Test 2: Protégé par Cookie
1. Ouvrir DevTools
2. Aller à l'onglet **Network**
3. Faire une action dans l'admin (créer formation, etc.)
4. ✅ Vérifier dans les headers de la requête:
   ```
   Cookie: authToken=eyJhbGc...
   ```

### Test 3: Logout
1. Cliquer sur "Déconnexion"
2. ✅ Cookie `authToken` supprimé
3. ✅ Redirection vers `/admin/login`

### Test 4: Accès Non-Authentifié
1. Modifier le cookie (le supprimer dans DevTools)
2. Rafraîchir la page admin
3. ✅ Redirection automatique vers `/admin/login`

---

## 🔐 Sécurité Implantée

| Problème | Solution | Vérification |
|----------|----------|--------------|
| Plaintext passwords | bcrypt (salt 10) | Hash commence par `$2a$10$` |
| localStorage XSS | httpOnly cookies | DevTools: `httpOnly = true` |
| Pas d'expiration | JWT 24h | Token expire après 24h |
| Brute force login | Rate limit 5/15min | Essayer 6 logins = erreur |
| Pas de validation | express-validator | Email format + password 8+ chars |
| CSRF | SameSite=Strict | Cookie: `SameSite=Strict` |
| Token révokable | Blacklist en mémoire | Logout ajoute à blacklist |

---

## 📊 Passwords Utilisateurs

Au démarrage, les mots de passe suivants sont hashés:

| Email | Password |
|-------|----------|
| `admin@iftpl.com` | `admin123` |
| `user@iftpl.com` | `user1234` |

⚠️ **Important:** Ces identifiants de développement doivent être changés en production!

---

## ⚠️ À Faire Avant Production

1. **Générer un JWT_SECRET fort**
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

2. **Changer NODE_ENV**
   ```env
   NODE_ENV=production
   ```

3. **HTTPS activé** (les cookies httpOnly nécessitent HTTPS en production)
   ```javascript
   secure: process.env.NODE_ENV === 'production' // true en prod
   ```

4. **Base de données**
   - Migrer de stockage en mémoire vers une vraie DB (MongoDB, PostgreSQL)
   - Stocker les utilisateurs et tokens dans la BD

5. **Refresh Tokens** (Phase 2)
   - Implémenter accessToken (court) + refreshToken (long)
   - Actualiser accessToken automatiquement

6. **Logs & Monitoring** (Phase 2)
   - Winston/Bunyan pour logging structuré
   - Suivi des tentatives de login échouées

---

## 🎯 Phase 1 Résumé

✅ **Implémenté:**
- Authentification sécurisée (bcrypt + JWT)
- Cookies httpOnly (XSS-proof)
- Validation des entrées
- Rate limiting (brute force protection)
- Gestion erreurs centralisée

🔄 **Prochaine Phase (Phase 2):**
- Refresh tokens automatiques
- Stockage en base de données
- Logs & monitoring
- Tests d'intégration

---

## 📖 Ressources

- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8949)
- [HTTP-Only Cookies](https://owasp.org/www-community/attacks/xss/#stored-xss-attacks)

---

## 🆘 Dépannage

### Erreur: "JWT_SECRET is not defined"
**Solution:** Créer `.env` avec `JWT_SECRET` défini

### Erreur: "Cookie not sent"
**Vérifier:** 
- Frontend: `credentials: 'include'` dans fetch
- Backend: `cookieParser()` middleware
- CORS: `credentials: true` dans corsOptions

### Login échoue après quelques tentatives
**C'est normal!** Rate limiting activé (5/15 min). Attendre 15 min ou restart le serveur.

### Tokens BLOQUÉS après logout
**C'est voulu!** Blacklist empêche réutilisation de vieux tokens.

---

**Status:** ✅ Phase 1 - Sécurité Complète
**Date:** 2024
**Prochaine étape:** Phase 2 - Optimisation Performance
