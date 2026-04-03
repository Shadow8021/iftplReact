import { API_BASE_URL, API_ENDPOINTS } from '../config/api.js'

export async function getFormations() {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.formations.list}`)
  if (!res.ok) throw new Error('Erreur API formations')
  return res.json()
}

export async function getFormationById(id) {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.formations.getById(id)}`)
  if (!res.ok) throw new Error('Formation non trouvée')
  return res.json()
}

export async function getFormationsByCategorie(categorie) {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.formations.byCategory(categorie)}`)
  if (!res.ok) throw new Error('Erreur API')
  return res.json()
}

export async function createFormation(data) {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.formations.create}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

export async function updateFormation(id, data) {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.formations.update(id)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Erreur lors de la mise à jour')
  return res.json()
}

export async function deleteFormation(id) {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.formations.delete(id)}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Erreur lors de la suppression')
  return res.ok
}
