const API_BASE = 'http://localhost:5000/api'

export async function getFormations() {
  const res = await fetch(`${API_BASE}/formations`)
  if (!res.ok) throw new Error('Erreur API formations')
  return res.json()
}

export async function getFormationById(id) {
  const res = await fetch(`${API_BASE}/formations/${id}`)
  if (!res.ok) throw new Error('Formation non trouvée')
  return res.json()
}

export async function getFormationsByCategorie(categorie) {
  const res = await fetch(`${API_BASE}/formations/categorie/${categorie}`)
  if (!res.ok) throw new Error('Erreur API')
  return res.json()
}

export async function createFormation(data) {
  const res = await fetch(`${API_BASE}/formations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

export async function updateFormation(id, data) {
  const res = await fetch(`${API_BASE}/formations/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Erreur lors de la mise à jour')
  return res.json()
}

export async function deleteFormation(id) {
  const res = await fetch(`${API_BASE}/formations/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Erreur lors de la suppression')
  return res.ok
}
