const TemoignageModel = require('../models/temoignage.model')

function getAllTemoignages(req, res) {
  try {
    const items = TemoignageModel.getAll()
    res.json(items)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

function getTemoignageById(req, res) {
  try {
    const item = TemoignageModel.getById(req.params.id)
    if (!item) return res.status(404).json({ error: 'Témoignage non trouvé' })
    res.json(item)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

function createTemoignage(req, res) {
  try {
    const created = TemoignageModel.create(req.body)
    res.status(201).json(created)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

function updateTemoignage(req, res) {
  try {
    const updated = TemoignageModel.update(req.params.id, req.body)
    if (!updated) return res.status(404).json({ error: 'Témoignage non trouvé' })
    res.json(updated)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

function deleteTemoignage(req, res) {
  try {
    const ok = TemoignageModel.remove(req.params.id)
    if (!ok) return res.status(404).json({ error: 'Témoignage non trouvé' })
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getAllTemoignages,
  getTemoignageById,
  createTemoignage,
  updateTemoignage,
  deleteTemoignage,
}

