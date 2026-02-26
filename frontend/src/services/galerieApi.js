const API_BASE = 'http://localhost:5000/api'

export async function getGalerie() {
  const res = await fetch(`${API_BASE}/galerie`)
  if (!res.ok) throw new Error('Erreur API galerie')
  return res.json()
}

export async function getGalerieById(id) {
  const res = await fetch(`${API_BASE}/galerie/${id}`)
  if (!res.ok) throw new Error('Image non trouvée')
  return res.json()
}

export async function createGalerieImage(data) {
  const res = await fetch(`${API_BASE}/galerie`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

export async function updateGalerieImage(id, data) {
  const res = await fetch(`${API_BASE}/galerie/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Erreur lors de la mise à jour')
  return res.json()
}

export async function deleteGalerieImage(id) {
  const res = await fetch(`${API_BASE}/galerie/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Erreur lors de la suppression')
  return res.ok
}
