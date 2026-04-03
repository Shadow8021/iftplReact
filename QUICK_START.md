# 🚀 Guide de Démarrage Rapide (5 minutes)

## ⚡ Installation & Démarrage

### Étape 1: Générer le JWT_SECRET

```bash
# Dans n'importe quel terminal
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copier la clé générée (exemple: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)

### Étape 2: Configurer le Backend

```bash
cd backend

# Créer le fichier .env
cat > .env << EOF
PORT=5000
JWT_SECRET=PASTE_YOUR_GENERATED_KEY_HERE
JWT_EXPIRES_IN=24h
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
EOF

# Installer les dépendances (si pas déjà fait)
npm install

# Démarrer le serveur
npm run dev
```

✅ Vous devez voir:
```
🚀 Serveur backend démarré sur port 5000
🔒 Sécurité activée:
   ✓ CORS configuré
   ✓ Cookie parser activé
   ✓ Rate limiting activé
```

### Étape 3: Démarrer le Frontend

```bash
cd frontend

# Vérifier que .env.local existe avec:
# VITE_API_URL=http://localhost:5000

npm run dev
```

✅ Frontend accessible à: `http://localhost:5173`

---

## 🔐 Tester l'Authentification

### 1. Aller à l'Admin

Ouvrir: **http://localhost:5173/admin/login**

### 2. Identifier

```
Email: admin@iftpl.com
Password: admin123
```

### 3. ✅ Succès!

Vous êtes redirigé vers `/admin` (Dashboard)

---

## 🍪 Vérifier les Cookies

1. **DevTools** → F12
2. **Application** tab
3. **Cookies** → localhost:5173
4. Vous devez voir `authToken` avec:
   - ✅ `httpOnly` = Checkbox cochée
   - ✅ `Secure` = Checkbox pour HTTPS (prod)
   - ✅ Valeur = `eyJhbGc...` (JWT token)

---

## 🚫 Common Sécurité

| Action | Résultat |
|--------|----------|
| Login 6 fois en 1 min | Erreur 429 (Rate limit) |
| Supprimer le cookie | Logout automatique |
| Token expiré (24h) | Nouveau login requis |
| Mauvais password | Rejeté par bcrypt |

---

## 📝 Identifiants de Test

### Admin
```
Email: admin@iftpl.com
Password: admin123
```

### User (si créé)
```
Email: user@iftpl.com
Password: user1234
```

---

## ❌ Problèmes Courants

### "Cannot GET /api/auth/me"
**Cause:** Backend pas démarré  
**Fix:** `cd backend && npm run dev`

### "Cookie not received"
**Cause:** `credentials: 'include'` manquant  
**Fix:** Vérifier `apiClient.js` a été mis à jour

### "JWT_SECRET is not defined"
**Cause:** Fichier `.env` pas créé  
**Fix:** Suivre Étape 2 ci-dessus

### "Too many login attempts"
**Cause:** Rate limiting (5/15 min)  
**Fix:** Attendre 15 min ou restart le serveur

---

## 📊 Architecture Securisée

```
┌─────────────┐
│   Frontend  │ (React + Vite)
│  (5173)     │
└──────┬──────┘
       │ credentials: 'include'
       │ 
       ↓
┌──────────────────────────────┐
│     Backend (Express)        │
│        Port 5000             │
│  ├─ bcrypt passwords         │
│  ├─ JWT tokens (24h)         │
│  ├─ httpOnly cookies         │
│  ├─ Rate limiting            │
│  ├─ Input validation         │
│  └─ CORS configured          │
└──────────────────────────────┘
```

---

## 🔧 Commandes Utiles

```bash
# Backend
cd backend
npm run dev          # Démarrer (avec reload)
npm start            # Démarrer (sans reload)
npm install          # Installer dépendances

# Frontend
cd frontend
npm run dev          # Démarrer (port 5173)
npm run build        # Build production
npm run preview      # Preview build

# Utilitaire
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"  # Générer clé JWT
```

---

## 🎯 Prochaines Étapes

1. ✅ **Phase 1 Complète:** Sécurité authentification
2. 🔄 **Phase 2:** Performance (pagination, lazy load)
3. 📱 **Phase 3:** SEO & Accessibilité
4. 🎨 **Phase 4:** UX Improvements

---

## ✅ Checklist

- [ ] JWT_SECRET généré
- [ ] `.env` créé avec JWT_SECRET
- [ ] Backend démarré (`npm run dev`)
- [ ] Frontend démarré (`npm run dev`)
- [ ] Admin login fonctionne
- [ ] Cookie `authToken` visible dans DevTools
- [ ] Dashboard affiche les données
- [ ] Rate limit testé (6 logins = erreur)

---

**Une fois tout ✅ coché, vous êtes prêt pour Phase 2!**

Pour plus de détails, voir [PHASE1_SECURITY.md](PHASE1_SECURITY.md)
