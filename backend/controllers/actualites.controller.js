const ActualiteModel = require('../models/actualites.model')

function listActualites(req, res) {
  try {
    const items = ActualiteModel.getAll()
    res.json(items)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

function getActualite(req, res) {
  try {
    const item = ActualiteModel.getById(req.params.id)
    if (!item) return res.status(404).json({ error: 'Actualité non trouvée' })
    res.json(item)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

function createActualite(req, res) {
  try {
    const created = ActualiteModel.create(req.body)
    res.status(201).json(created)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

function updateActualite(req, res) {
  try {
    const updated = ActualiteModel.update(req.params.id, req.body)
    if (!updated) return res.status(404).json({ error: 'Actualité non trouvée' })
    res.json(updated)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

function deleteActualite(req, res) {
  try {
    const ok = ActualiteModel.remove(req.params.id)
    if (!ok) return res.status(404).json({ error: 'Actualité non trouvée' })
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  listActualites,
  getActualite,
  createActualite,
  updateActualite,
  deleteActualite,
}
