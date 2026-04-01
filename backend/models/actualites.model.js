const { actualitesDataDefault } = require('../data/actualitesData')

let actualites = Array.isArray(actualitesDataDefault) ? [...actualitesDataDefault] : []
let nextId = actualites.length ? Math.max(...actualites.map(item => item.id || 0)) + 1 : 1

function getAll() {
  return actualites.map((a) => ({ ...a }))
}

function getById(id) {
  const n = Number(id)
  return actualites.find((a) => a.id === n) || null
}

function create(payload) {
  if (!payload.titre) throw new Error('Le champ "titre" est requis pour créer une actualité')
  const item = { id: nextId++, ...payload }
  actualites.unshift(item)
  return item
}

function update(id, data) {
  const n = Number(id)
  const idx = actualites.findIndex((a) => a.id === n)
  if (idx === -1) return null
  const updated = { ...actualites[idx], ...data, id: n }
  actualites[idx] = updated
  return updated
}

function remove(id) {
  const n = Number(id)
  const idx = actualites.findIndex((a) => a.id === n)
  if (idx === -1) return false
  actualites.splice(idx, 1)
  return true
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}
