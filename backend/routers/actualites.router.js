const express = require('express')
const router = express.Router()
const ActualitesCtrl = require('../controllers/actualites.controller')

router.get('/', ActualitesCtrl.listActualites)
router.get('/:id', ActualitesCtrl.getActualite)
router.post('/', ActualitesCtrl.createActualite)
router.put('/:id', ActualitesCtrl.updateActualite)
router.delete('/:id', ActualitesCtrl.deleteActualite)

module.exports = router