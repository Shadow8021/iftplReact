// Modèle simple en mémoire pour les formations
const formationsData = require('../data/formationsData').formationsData

function getAll() {
    return formationsData.map(f => ({ ...f }))
}

function getById(id) {
    const n = Number(id)
    return formationsData.find(f => f.id === n) || null
}

function create(payload) {
    if (!payload.titre) throw new Error('Le champ "titre" est requis')
    const nextId = formationsData.length ? Math.max(...formationsData.map(f => f.id)) + 1 : 1
    const item = { id: nextId, ...payload }
    formationsData.push(item)
    return item
}

function update(id, data) {
    const n = Number(id)
    const idx = formationsData.findIndex(f => f.id === n)
    if (idx === -1) return null
    const updated = { ...formationsData[idx], ...data, id: n }
    formationsData[idx] = updated
    return updated
}

function remove(id) {
    const n = Number(id)
    const idx = formationsData.findIndex(f => f.id === n)
    if (idx === -1) return false
    formationsData.splice(idx, 1)
    return true
}

function getByCategorie(categorie) {
    return formationsData.filter(f => f.categorie === categorie)
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    getByCategorie,
}
