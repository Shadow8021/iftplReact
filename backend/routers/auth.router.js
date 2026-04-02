const express = require('express')
const router = express.Router()
const AuthCtrl = require('../controllers/auth.controller')

router.post('/login', AuthCtrl.login)
router.get('/me', AuthCtrl.me)
router.post('/logout', AuthCtrl.logout)

module.exports = router
