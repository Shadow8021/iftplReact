import { formationsData } from '../data/formationsData'

const STORAGE_KEY = 'iftpl_formations'

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

/** Retourne la liste des formations (localStorage ou défaut). */
export function getFormations() {
  const data = load()
  if (data !== null && Array.isArray(data)) return data
  const defaultData = JSON.parse(JSON.stringify(formationsData))
  save(defaultData)
  return defaultData
}

/** Remplace toutes les formations. */
export function setFormations(items) {
  const data = Array.isArray(items) ? items : []
  save(data)
  return data
}

function nextId(items) {
  if (!items.length) return 1
  return Math.max(...items.map((i) => i.id)) + 1
}

/** Structure par défaut pour une nouvelle formation (champs principaux + tableaux vides). */
function defaultFormation(partial = {}) {
  return {
    id: partial.id ?? 0,
    titre: partial.titre ?? '',
    description: partial.description ?? '',
    image: partial.image ?? '',
    duree: partial.duree ?? '3 ans',
    classes: Array.isArray(partial.classes) ? partial.classes : (typeof partial.classes === 'string' ? partial.classes.split(',').map((s) => s.trim()).filter(Boolean) : ['Seconde', 'Première', 'Terminale']),
    stage: partial.stage ?? '',
    modules: typeof partial.modules === 'number' ? partial.modules : parseInt(partial.modules, 10) || 0,
    niveau: partial.niveau ?? 'Intermédiaire',
    niveauAcces: partial.niveauAcces ?? 'BEPC',
    categorie: partial.categorie ?? 'Industrie',
    place: partial.place ?? '',
    certification: partial.certification ?? '',
    modulesDetailles: partial.modulesDetailles ?? [],
    competences: partial.competences ?? [],
    prerequis: partial.prerequis ?? [],
    emplois: partial.emplois ?? []
  }
}

/** Ajoute une formation. */
export function addFormation(formation) {
  const items = getFormations()
  const newItem = defaultFormation({
    ...formation,
    id: nextId(items),
    classes: formation.classes,
    modules: formation.modules
  })
  items.push(newItem)
  save(items)
  return newItem
}

/** Met à jour une formation par id (fusion avec l'existant pour garder modulesDetailles, etc.). */
export function updateFormation(id, updates) {
  const items = getFormations()
  const index = items.findIndex((i) => i.id === id)
  if (index === -1) return items
  const existing = items[index]
  const classes = updates.classes !== undefined
    ? (Array.isArray(updates.classes) ? updates.classes : String(updates.classes).split(',').map((s) => s.trim()).filter(Boolean))
    : existing.classes
  const modules = updates.modules !== undefined ? (typeof updates.modules === 'number' ? updates.modules : parseInt(updates.modules, 10) || 0) : existing.modules
  items[index] = {
    ...existing,
    ...updates,
    id: existing.id,
    classes,
    modules: modules || existing.modules,
    modulesDetailles: updates.modulesDetailles !== undefined ? updates.modulesDetailles : existing.modulesDetailles,
    competences: updates.competences !== undefined ? updates.competences : existing.competences,
    prerequis: updates.prerequis !== undefined ? updates.prerequis : existing.prerequis,
    emplois: updates.emplois !== undefined ? updates.emplois : existing.emplois
  }
  save(items)
  return items[index]
}

/** Supprime une formation par id. */
export function removeFormation(id) {
  const items = getFormations().filter((i) => i.id !== id)
  save(items)
  return items
}

/** Récupère une formation par id. */
export function getFormationById(id) {
  const numId = typeof id === 'string' ? parseInt(id, 10) : id
  return getFormations().find((f) => f.id === numId) || null
}
