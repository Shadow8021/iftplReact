const { infos } = require('../data/temoignagesDatas')

let temoignages = Array.isArray(infos) ? [...infos] : []
let nextId = temoignages.length ? Math.max(...temoignages.map(item => item.id || 0)) + 1 : 1

function getAll() {
  return temoignages.map(i => ({ ...i }))
}

function getById(id) {
  const n = Number(id)
  return temoignages.find((t) => t.id === n) || null
}

function create(payload) {
  if (!payload.message) throw new Error('Le champ "message" est requis pour créer un témoignage')
  const item = { id: nextId++, ...payload }
  temoignages.push(item)
  return item
}

function update(id, data) {
  const n = Number(id)
  const idx = temoignages.findIndex((t) => t.id === n)
  if (idx === -1) return null
  const updated = { ...temoignages[idx], ...data, id: n }
  temoignages[idx] = updated
  return updated
}

function remove(id) {
  const n = Number(id)
  const idx = temoignages.findIndex((t) => t.id === n)
  if (idx === -1) return false
  temoignages.splice(idx, 1)
  return true
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}
