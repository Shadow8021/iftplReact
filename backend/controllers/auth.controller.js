const crypto = require('crypto')

// Utilisateur en mémoire pour démonstration
const users = [
    {
        id: 1,
        email: 'admin@iftpl.local',
        password: 'password123', // uniquement pour exemple
        name: 'Admin IFTPL',
        role: 'admin'
    }
]

// Stockage de sessions (token -> user id)
const sessions = new Map()

function generateToken() {
    return crypto.randomBytes(32).toString('hex')
}

function login(req, res) {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ error: 'Email et mot de passe requis' })
    }

    const user = users.find((u) => u.email === email)
    if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Identifiants invalides' })
    }

    const token = generateToken()
    sessions.set(token, user.id)

    return res.json({
        accessToken: token,
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
        }
    })
}

function me(req, res) {
    const authHeader = req.headers.authorization || ''
    const [, token] = authHeader.split(' ')
    if (!token) {
        return res.status(401).json({ error: 'Token manquant' })
    }

    const userId = sessions.get(token)
    if (!userId) {
        return res.status(401).json({ error: 'Token invalide ou expiré' })
    }

    const user = users.find((u) => u.id === userId)
    if (!user) {
        return res.status(401).json({ error: 'Utilisateur introuvable' })
    }

    return res.json({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
    })
}

function logout(req, res) {
    const authHeader = req.headers.authorization || ''
    const [, token] = authHeader.split(' ')
    if (token) {
        sessions.delete(token)
    }
    return res.status(204).end()
}

module.exports = {
    login,
    me,
    logout,
    _sessions: sessions // exporté pour tests éventuels
}
