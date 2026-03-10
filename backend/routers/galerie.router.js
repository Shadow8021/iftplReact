const express = require('express')
const router = express.Router()
const ImageCtrl = require('../controllers/image.controller')

router.get('/', ImageCtrl.listImages)
router.get('/:id', ImageCtrl.getImage)
router.post('/', ImageCtrl.createImage)
router.put('/:id', ImageCtrl.updateImage)
router.delete('/:id', ImageCtrl.deleteImage)

module.exports = router
