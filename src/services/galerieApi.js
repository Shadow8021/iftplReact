import { API_BASE_URL, API_ENDPOINTS } from '../config/api.js'

export async function getGalerie() {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.galerie.list}`)
  if (!res.ok) throw new Error('Erreur API galerie')
  return res.json()
}

export async function getGalerieById(id) {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.galerie.getById(id)}`)
  if (!res.ok) throw new Error('Image non trouvée')
  return res.json()
}

export async function createGalerieImage(data) {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.galerie.create}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

export async function updateGalerieImage(id, data) {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.galerie.update(id)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Erreur lors de la mise à jour')
  return res.json()
}

export async function deleteGalerieImage(id) {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.galerie.delete(id)}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Erreur lors de la suppression')
  return res.ok
}
