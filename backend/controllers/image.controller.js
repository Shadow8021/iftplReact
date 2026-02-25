const ImageModel = require('../models/image.model')

function listImages(req, res) {
  try {
    const items = ImageModel.getAll()
    res.json(items)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

function getImage(req, res) {
  try {
    const item = ImageModel.getById(req.params.id)
    if (!item) return res.status(404).json({ error: 'Image non trouvée' })
    res.json(item)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

function createImage(req, res) {
  try {
    const payload = req.body
    const created = ImageModel.create(payload)
    res.status(201).json(created)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

function updateImage(req, res) {
  try {
    const updated = ImageModel.update(req.params.id, req.body)
    if (!updated) return res.status(404).json({ error: 'Image non trouvée' })
    res.json(updated)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

function deleteImage(req, res) {
  try {
    const ok = ImageModel.remove(req.params.id)
    if (!ok) return res.status(404).json({ error: 'Image non trouvée' })
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  listImages,
  getImage,
  createImage,
  updateImage,
  deleteImage,
}
