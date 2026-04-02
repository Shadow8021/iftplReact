// API client pour communicate avec le backend
import { API_BASE_URL, API_ENDPOINTS } from '../config/api.js'

// ============ Formations ============
export async function fetchFormations() {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.formations.list}`)
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur fetchFormations:', err)
    throw err
  }
}

export async function fetchFormationById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.formations.getById(id)}`)
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur fetchFormationById:', err)
    throw err
  }
}

export async function createFormation(data) {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.formations.create}`, {
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
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.formations.update(id)}`, {
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
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.formations.delete(id)}`, {
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
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.formations.byCategory(categorie)}`)
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
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.galerie.list}`)
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur fetchGalerie:', err)
    throw err
  }
}

export async function fetchGalerieById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.galerie.getById(id)}`)
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur fetchGalerieById:', err)
    throw err
  }
}

export async function fetchActualites() {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.actualites.list}`)
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur fetchActualites:', err)
    throw err
  }
}

export async function fetchActualiteById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.actualites.getById(id)}`)
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur fetchActualiteById:', err)
    throw err
  }
}

export async function createActualite(data) {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.actualites.create}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur createActualite:', err)
    throw err
  }
}

export async function updateActualite(id, data) {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.actualites.update(id)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur updateActualite:', err)
    throw err
  }
}

export async function deleteActualite(id) {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.actualites.delete(id)}`, {
      method: 'DELETE'
    })
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return res.status === 204
  } catch (err) {
    console.error('Erreur deleteActualite:', err)
    throw err
  }
}

export async function createGalerie(data) {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.galerie.create}`, {
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
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.galerie.update(id)}`, {
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
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.galerie.delete(id)}`, {
      method: 'DELETE'
    })
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return res.status === 204
  } catch (err) {
    console.error('Erreur deleteGalerie:', err)
    throw err
  }
}
