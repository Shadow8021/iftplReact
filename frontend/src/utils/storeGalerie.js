import { galerieDataDefault } from '../data/galerieData'

const STORAGE_KEY = 'iftpl_galerie'

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

/** Retourne la liste des images de la galerie (localStorage ou défaut). */
export function getGalerie() {
  const data = load()
  if (data !== null && Array.isArray(data)) return data
  const defaultData = galerieDataDefault.map((item) => ({ ...item }))
  save(defaultData)
  return defaultData
}

/** Remplace toute la galerie (pour reset ou import). */
export function setGalerie(items) {
  const data = Array.isArray(items) ? items : []
  save(data)
  return data
}

/** Génère un nouvel id unique. */
function nextId(items) {
  if (!items.length) return 1
  return Math.max(...items.map((i) => i.id)) + 1
}

/** Ajoute une image à la galerie. */
export function addImage(image) {
  const items = getGalerie()
  const newItem = {
    id: nextId(items),
    src: image.src || '',
    title: image.title || 'Sans titre',
    category: image.category || 'Formations',
    description: image.description || ''
  }
  items.push(newItem)
  save(items)
  return newItem
}

/** Supprime une image par id. */
export function removeImage(id) {
  const items = getGalerie().filter((i) => i.id !== id)
  save(items)
  return items
}

/** Met à jour une image par id. */
export function updateImage(id, updates) {
  const items = getGalerie()
  const index = items.findIndex((i) => i.id === id)
  if (index === -1) return items
  items[index] = { ...items[index], ...updates }
  save(items)
  return items
}
