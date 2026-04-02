# Configuration du Projet IFTPL React

## Backend

### Démarrage
```bash
cd backend
npm install
npm run dev
```

Le serveur démarre sur `http://localhost:5000` par défaut.

### Authentification Backend
Les routes d'authentification sont disponibles sur `/api/auth`:
- `POST /api/auth/login` - Se connecter
- `GET /api/auth/me` - Vérifier le profil (nécessite token)
- `POST /api/auth/logout` - Se déconnecter (nécessite token)

**Credentials de test:**
- Email: `admin@iftpl.local`
- Password: `password123`

---

## Frontend

### Démarrage
```bash
cd frontend
npm install
npm run dev
```

Le développement tourne sur `http://localhost:5173` (Vite par défaut).

### Configuration de l'API

La configuration centralisée se trouve dans `src/config/api.js`:
- `API_BASE_URL` - URL du serveur backend (depuis `VITE_API_URL` ou fallback)
- `API_ENDPOINTS` - Objet avec tous les endpoints organisés par ressource

### Variables d'environnement

Créer un fichier `.env.local` à partir de `.env.example`:

```bash
cp .env.example .env.local
```

Ensuite, éditer `.env.local` pour votre environnement:

```env
# Développement local (défaut)
VITE_API_URL=http://localhost:5000

# Production
# VITE_API_URL=https://api.production.com
```

### Structure des services

Les services API sont dans `src/services/` et `src/utils/`:
- `authApi.js` - Authentification
- `formationsApi.js` - Formations
- `galerieApi.js` - Galerie
- `commentaireApi.js` - Commentaires/Témoignages
- `utils/apiClient.js` - Client API centralisé (fallback)

Tous utilisent la config centralisée depuis `src/config/api.js`.

---

## Flux d'authentification

1. **Frontend Login** (`/admin/login`)
   - L'utilisateur saisit email/password
   - Appel `loginAdmin()` vers `/api/auth/login`
   
2. **Backend Login**
   - Vérifie identifiants
   - Génère token et le retourne

3. **Frontend Storage**
   - Stocke `{ token, id, email, name, role }` dans localStorage

4. **Accès protégé** (Dashboard, Admin pages)
   - Vérifie existence du token
   - Appel `me(token)` pour valider
   - Si valide → affiche la page
   - Si expiré/invalide → redirection `/admin/login`

---

## Déploiement

### Backend
- Héberger sur un serveur (Heroku, Railway, DigitalOcean, etc.)
- Mettre à jour `VITE_API_URL` frontend vers l'URL de production
- Considérer les variables d'environnement de sécurité (tokens, CORS, etc.)

### Frontend
- Build : `npm run build`
- Deploy sur Vercel, Netlify, etc.
- Vérifier que `VITE_API_URL` pointe vers le bon backend

---

## Troubleshooting

### Erreur "Impossible de se connecter"
- Vérifier que backend est en cours d'exécution
- Vérifier `VITE_API_URL` dans `.env.local`
- Vérifier les credentials (admin@iftpl.local / password123)

### Erreur "Token invalide" sur admin pages
- Vérifier que le token est stocké dans localStorage
- Ouvrir DevTools > Application > localStorage > user
- Vérifier que backend valide correctement le token

### CORS errors
- Ajouter des headers CORS appropriés au backend si domaines différents
