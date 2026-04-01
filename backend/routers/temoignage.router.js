const express = require('express')
const router = express.Router()
const TemoignageCtrl = require('../controllers/temoignages.controller')

router.get('/', TemoignageCtrl.getAllTemoignages)
router.get('/:id', TemoignageCtrl.getTemoignageById)
router.post('/', TemoignageCtrl.createTemoignage)
router.put('/:id', TemoignageCtrl.updateTemoignage)
router.delete('/:id', TemoignageCtrl.deleteTemoignage)

module.exports = router
