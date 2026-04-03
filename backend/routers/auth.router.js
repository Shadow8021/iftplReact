const express = require('express')
const router = express.Router()
const AuthCtrl = require('../controllers/auth.controller')
const { validateLogin, handleValidationErrors } = require('../middleware/validators')

/**
 * POST /api/auth/login
 * Connexion utilisateur
 */
router.post('/login', validateLogin, handleValidationErrors, AuthCtrl.login)

/**
 * GET /api/auth/me
 * Récupérer le profil de l'utilisateur connecté
 */
router.get('/me', AuthCtrl.me)

/**
 * POST /api/auth/logout
 * Déconnexion utilisateur
 */
router.post('/logout', AuthCtrl.logout)

module.exports = router
