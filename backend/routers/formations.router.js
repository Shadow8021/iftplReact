const express = require('express')
const router = express.Router()
const FormationCtrl = require('../controllers/formations.controller')

router.get('/', FormationCtrl.listFormations)
router.get('/categorie/:categorie', FormationCtrl.getByCategorie)
router.get('/:id', FormationCtrl.getFormation)
router.post('/', FormationCtrl.createFormation)
router.put('/:id', FormationCtrl.updateFormation)
router.delete('/:id', FormationCtrl.deleteFormation)

module.exports = router
