// API client pour communicate avec le backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// ============ Formations ============
export async function fetchFormations() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/formations`)
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur fetchFormations:', err)
    throw err
  }
}

export async function fetchFormationById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/formations/${id}`)
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur fetchFormationById:', err)
    throw err
  }
}

export async function createFormation(data) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/formations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur createFormation:', err)
    throw err
  }
}

export async function updateFormation(id, data) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/formations/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur updateFormation:', err)
    throw err
  }
}

export async function deleteFormation(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/formations/${id}`, {
      method: 'DELETE'
    })
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return res.status === 204
  } catch (err) {
    console.error('Erreur deleteFormation:', err)
    throw err
  }
}

export async function fetchFormationsByCategorie(categorie) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/formations/categorie/${categorie}`)
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur fetchFormationsByCategorie:', err)
    throw err
  }
}

// ============ Gallery (Galerie) ============
export async function fetchGalerie() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/galerie`)
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur fetchGalerie:', err)
    throw err
  }
}

export async function fetchGalerieById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/galerie/${id}`)
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur fetchGalerieById:', err)
    throw err
  }
}

export async function createGalerie(data) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/galerie`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur createGalerie:', err)
    throw err
  }
}

export async function updateGalerie(id, data) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/galerie/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur updateGalerie:', err)
    throw err
  }
}

export async function deleteGalerie(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/galerie/${id}`, {
      method: 'DELETE'
    })
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return res.status === 204
  } catch (err) {
    console.error('Erreur deleteGalerie:', err)
    throw err
  }
}
