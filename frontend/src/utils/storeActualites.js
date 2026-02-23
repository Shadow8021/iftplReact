import { actualitesDataDefault } from '../data/actualitesData'

const STORAGE_KEY = 'iftpl_actualites'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (_) {}
  return null
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

/** Retourne la liste des actualités (localStorage ou défaut). */
export function getActualites() {
  const data = load()
  if (data !== null && Array.isArray(data)) return data
  const defaultData = actualitesDataDefault.map((item) => ({ ...item }))
  save(defaultData)
  return defaultData
}

/** Remplace toutes les actualités. */
export function setActualites(items) {
  const data = Array.isArray(items) ? items : []
  save(data)
  return data
}

function nextId(items) {
  if (!items.length) return 1
  return Math.max(...items.map((i) => i.id)) + 1
}

/** Ajoute une actualité. */
export function addActualite(actualite) {
  const items = getActualites()
  const newItem = {
    id: nextId(items),
    titre: actualite.titre || '',
    description: actualite.description || '',
    image: actualite.image || '',
    date: actualite.date || new Date().toISOString().slice(0, 10),
    contenu: actualite.contenu || ''
  }
  items.unshift(newItem)
  save(items)
  return newItem
}

/** Met à jour une actualité par id. */
export function updateActualite(id, updates) {
  const items = getActualites()
  const index = items.findIndex((i) => i.id === id)
  if (index === -1) return items
  items[index] = { ...items[index], ...updates }
  save(items)
  return items
}

/** Supprime une actualité par id. */
export function removeActualite(id) {
  const items = getActualites().filter((i) => i.id !== id)
  save(items)
  return items
}

/** Récupère une actualité par id. */
export function getActualiteById(id) {
  const numId = typeof id === 'string' ? parseInt(id, 10) : id
  return getActualites().find((a) => a.id === numId) || null
}
