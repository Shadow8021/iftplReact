const FormationModel = require('../models/formations.model')

function listFormations(req, res) {
    try {
        const items = FormationModel.getAll()
        res.json(items)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

function getFormation(req, res) {
    try {
        const item = FormationModel.getById(req.params.id)
        if (!item) return res.status(404).json({ error: 'Formation non trouvée' })
        res.json(item)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

function createFormation(req, res) {
    try {
        const payload = req.body
        const created = FormationModel.create(payload)
        res.status(201).json(created)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

function updateFormation(req, res) {
    try {
        const updated = FormationModel.update(req.params.id, req.body)
        if (!updated) return res.status(404).json({ error: 'Formation non trouvée' })
        res.json(updated)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

function deleteFormation(req, res) {
    try {
        const ok = FormationModel.remove(req.params.id)
        if (!ok) return res.status(404).json({ error: 'Formation non trouvée' })
        res.status(204).end()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

function getByCategorie(req, res) {
    try {
        const items = FormationModel.getByCategorie(req.params.categorie)
        res.json(items)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = {
    listFormations,
    getFormation,
    createFormation,
    updateFormation,
    deleteFormation,
    getByCategorie,
}
