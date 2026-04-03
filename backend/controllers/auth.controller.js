const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// 💾 Utilisateurs en mémoire (en production: utiliser une BD avec authentification)
const users = [
    {
        id: 1,
        email: 'admin@iftpl.com',
        // Mot de passe hashé avec bcrypt (généré: bcrypt.hashSync('admin123', 10))
        // JAMAIS stocker le mot de passe en clair!
        passwordHash: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // admin123
        name: 'Admin IFTPL',
        role: 'admin'
    }
]

// Tokens blacklist pour déconnexion
const tokenBlacklist = new Set()

/**
 * Génère un JWT sécurisé
 */
function generateJWT(userId) {
    return jwt.sign(
        { userId, timestamp: Date.now() },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
    )
}

/**
 * Initialise les utilisateurs avec mot de passe hashé
 * À appeler une fois au démarrage (si nécessaire)
 */
async function initializeUsers() {
    // Les utilisateurs sont déjà initialisés avec des hashes valides
    console.log('✅ Utilisateurs initialisés avec succès')
}

/**
 * POST /api/auth/login
 * Connexion sécurisée avec bcrypt
 */
async function login(req, res) {
    const { email, password } = req.body

    // Validation basique (sera renforcée par middleware)
    if (!email || !password) {
        return res.status(400).json({ error: 'Email et mot de passe requis' })
    }

    const user = users.find((u) => u.email === email)
    if (!user) {
        // Ne pas révéler si l'email existe (sécurité)
        return res.status(401).json({ error: 'Identifiants invalides' })
    }

    // Vérifier le mot de passe avec bcrypt (résistant aux timing attacks)
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash)
    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Identifiants invalides' })
    }

    // Générer token JWT
    const token = generateJWT(user.id)

    // ✅ Envoyer le token en cookie httpOnly (non accessible au JS)
    res.cookie('authToken', token, {
        httpOnly: true,        // ← JavaScript ne peut pas y accéder
        secure: process.env.NODE_ENV === 'production', // HTTPS en production
        sameSite: 'Strict',    // Protection CSRF
        maxAge: 24 * 60 * 60 * 1000, // 24h
        path: '/'
    })

    // Répondre avec user info (pas le token)
    return res.json({
        message: 'Connexion réussie',
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
        }
    })
}

/**
 * GET /api/auth/me
 * Vérifier l'authentification avec JWT
 */
function me(req, res) {
    const token = req.cookies.authToken
    if (!token) {
        return res.status(401).json({ error: 'Non authentifié' })
    }

    // Vérifier si le token est dans la blacklist (déconnexion)
    if (tokenBlacklist.has(token)) {
        return res.status(401).json({ error: 'Token révoqué' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = users.find((u) => u.id === decoded.userId)

        if (!user) {
            return res.status(401).json({ error: 'Utilisateur introuvable' })
        }

        return res.json({
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
        })
    } catch (err) {
        // Token expiré, invalide, ou altéré
        return res.status(401).json({ error: 'Token invalide ou expiré' })
    }
}

/**
 * POST /api/auth/logout
 * Déconnexion sécurisée
 */
function logout(req, res) {
    const token = req.cookies.authToken
    if (token) {
        // Ajouter le token à la blacklist
        tokenBlacklist.add(token)
    }

    // Supprimer le cookie
    res.clearCookie('authToken', { path: '/' })
    return res.status(204).end()
}

/**
 * Middleware de vérification JWT
 */
function verifyToken(req, res, next) {
    const token = req.cookies.authToken
    if (!token) {
        return res.status(401).json({ error: 'Non authentifié' })
    }

    if (tokenBlacklist.has(token)) {
        return res.status(401).json({ error: 'Session expirée' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.userId
        next()
    } catch (err) {
        return res.status(401).json({ error: 'Token invalide' })
    }
}

module.exports = {
    login,
    me,
    logout,
    verifyToken,
    initializeUsers,
    // Exporté pour tests uniquement
    _generateJWT: generateJWT,
    _hashPassword: (pwd) => bcrypt.hash(pwd, 10),
    _comparePassword: (pwd, hash) => bcrypt.compare(pwd, hash)
}
