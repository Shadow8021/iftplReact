const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

console.log('🔄 Démarrage du backend IFTPL...');

// Configuration CORS
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

// Middlewares de base
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

console.log('✅ Middlewares configurés');

// Import du contrôleur auth pour l'initialisation des utilisateurs
const { initializeUsers } = require('./controllers/auth.controller');

// Initialiser les utilisateurs
initializeUsers();

// Routes API
const authRouter = require('./routers/auth.router');
const galerieRouter = require('./routers/galerie.router');
const formationsRouter = require('./routers/formations.router');
const temoignageRouter = require('./routers/temoignage.router');
const actualitesRouter = require('./routers/actualites.router');

app.use('/api/auth', authRouter);
app.use('/api/commentaire', temoignageRouter);
app.use('/api/galerie', galerieRouter);
app.use('/api/formations', formationsRouter);
app.use('/api/actualites', actualitesRouter);

console.log('✅ Routes configurées');

// Route de santé
app.get("/", (req, res) => {
    res.send("IFTPL Backend - Port " + PORT);
});

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route non trouvée',
        path: req.originalUrl
    });
});

// Gestion centralisée des erreurs
app.use((err, req, res, next) => {
    console.error('Erreur serveur:', err);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Erreur serveur interne'
    });
});

// Démarrage du serveur
const server = app.listen(PORT, () => {
    console.log('\n=====================================');
    console.log(`🚀 Serveur IFTPL démarré sur port ${PORT}`);
    console.log('=====================================');
    console.log('\n📍 Routes disponibles:');
    console.log('   POST   /api/auth/login     - Connexion');
    console.log('   GET    /api/auth/me        - Profil utilisateur');
    console.log('   POST   /api/auth/logout    - Déconnexion');
    console.log('   GET    /api/galerie        - Liste des galeries');
    console.log('   GET    /api/formations     - Liste des formations');
    console.log('   GET    /api/actualites     - Liste des actualités');
    console.log('   GET    /api/commentaire    - Liste des temoignages');
    console.log('=====================================\n');
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`❌ Le port ${PORT} est déjà en utilisation`);
        console.error('💡 Essayez: taskkill /f /im node.exe');
    } else {
        console.error('❌ Erreur serveur:', err.message);
    }
    process.exit(1);
});