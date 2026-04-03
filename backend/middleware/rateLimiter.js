/**
 * Middleware de rate limiting
 * Prévient le brute force et les attaques par déni de service
 */

const rateLimit = require('express-rate-limit')

/**
 * Limiteur général (100 requêtes par 15 minutes)
 */
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: 'Trop de requêtes, veuillez réessayer plus tard',
    standardHeaders: true, // Retourner info de rate limit dans les headers
    legacyHeaders: false,  // Désactiver X-RateLimit-*
    skip: (req) => process.env.NODE_ENV === 'development'
})

/**
 * Limiteur strict pour les logins (5 tentatives par 15 minutes)
 */
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Trop de tentatives de connexion, réessayez dans 15 minutes',
    skipSuccessfulRequests: true, // Ne pas compter les logins réussis
    keyGenerator: (req) => {
        // Limiter par IP + email pour plus de flexibilité
        return `${req.ip}-${req.body.email || 'unknown'}`
    }
})

/**
 * Limiteur pour les créations (30 par heure)
 */
const createLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 heure
    max: 30,
    message: 'Trop de créations, réessayez plus tard'
})

/**
 * Limiteur pour les modifications (50 par heure)
 */
const updateLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 50,
    message: 'Trop de modifications, réessayez plus tard'
})

/**
 * Store personnalisé en mémoire (utiliser Redis en production)
 * Pour les déploiements multiples, utiliser redis avec connect-redis
 */
const memoryStore = new (require('express-rate-limit').MemoryStore)()

module.exports = {
    generalLimiter,
    loginLimiter,
    createLimiter,
    updateLimiter,
    memoryStore
}
