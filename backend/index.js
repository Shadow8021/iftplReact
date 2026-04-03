const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const PORT = 3000; // Port confirmé libre

console.log('🔄 Démarrage du backend IFTPL (version debug)...');

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

console.log('✅ Middlewares de base OK');

// Test des imports un par un
try {
    const { initializeUsers } = require('./controllers/auth.controller');
    initializeUsers();
    console.log('✅ Auth controller OK');
} catch (error) {
    console.log('❌ Auth controller ERROR:', error.message);
    process.exit(1);
}

try {
    const authRouter = require('./routers/auth.router');
    app.use('/api/auth', authRouter);
    console.log('✅ Auth router OK');
} catch (error) {
    console.log('❌ Auth router ERROR:', error.message);
    process.exit(1);
}

try {
    const galerieRouter = require('./routers/galerie.router');
    app.use('/api/galerie', galerieRouter);
    console.log('✅ Galerie router OK');
} catch (error) {
    console.log('❌ Galerie router ERROR:', error.message);
    process.exit(1);
}

try {
    const formationsRouter = require('./routers/formations.router');
    app.use('/api/formations', formationsRouter);
    console.log('✅ Formations router OK');
} catch (error) {
    console.log('❌ Formations router ERROR:', error.message);
    process.exit(1);
}

try {
    const temoignageRouter = require('./routers/temoignage.router');
    app.use('/api/commentaire', temoignageRouter);
    console.log('✅ Temoignage router OK');
} catch (error) {
    console.log('❌ Temoignage router ERROR:', error.message);
    process.exit(1);
}

try {
    const actualitesRouter = require('./routers/actualites.router');
    app.use('/api/actualites', actualitesRouter);
    console.log('✅ Actualites router OK');
} catch (error) {
    console.log('❌ Actualites router ERROR:', error.message);
    process.exit(1);
}

console.log('✅ Tous les routers OK');

// Route de santé
app.get("/", (req, res) => {
    res.send("IFTPL Backend Debug - Port " + PORT);
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
console.log(`🚀 Tentative de démarrage sur port ${PORT}...`);

const server = app.listen(PORT, () => {
    console.log('\n=====================================');
    console.log(`🎉 SUCCÈS: Backend IFTPL démarré sur port ${PORT}`);
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
    console.error(`❌ ERREUR FATALE: Impossible de démarrer sur port ${PORT}`);
    console.error('Détails:', err.message);
    process.exit(1);
});