// API client pour communicate avec le backend
import { API_BASE_URL, API_ENDPOINTS } from '../config/api.js'

/**
 * Options par défaut pour toutes les requêtes fetch
 * credentials: 'include' est nécessaire pour envoyer les cookies httpOnly
 */
const defaultOptions = {
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' }
}

// ============ Formations ============
export async function fetchFormations() {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.formations.list}`, {
      ...defaultOptions,
      method: 'GET'
    })
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur fetchFormations:', err)
    throw err
  }
}

export async function fetchFormationById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.formations.getById(id)}`, {
      ...defaultOptions,
      method: 'GET'
    })
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
      ...defaultOptions,
      method: 'POST',
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
      ...defaultOptions,
      method: 'PUT',
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
      ...defaultOptions,
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
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.formations.byCategory(categorie)}`, {
      ...defaultOptions,
      method: 'GET'
    })
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
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.galerie.list}`, {
      ...defaultOptions,
      method: 'GET'
    })
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur fetchGalerie:', err)
    throw err
  }
}

export async function fetchGalerieById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.galerie.getById(id)}`, {
      ...defaultOptions,
      method: 'GET'
    })
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur fetchGalerieById:', err)
    throw err
  }
}

export async function fetchActualites() {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.actualites.list}`, {
      ...defaultOptions,
      method: 'GET'
    })
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('Erreur fetchActualites:', err)
    throw err
  }
}

export async function fetchActualiteById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.actualites.getById(id)}`, {
      ...defaultOptions,
      method: 'GET'
    })
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
      ...defaultOptions,
      method: 'POST',
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
      ...defaultOptions,
      method: 'PUT',
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
      ...defaultOptions,
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
      ...defaultOptions,
      method: 'POST',
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
      ...defaultOptions,
      method: 'PUT',
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
      ...defaultOptions,
      method: 'DELETE'
    })
    if (!res.ok) throw new Error(`Erreur ${res.status}`)
    return res.status === 204
  } catch (err) {
    console.error('Erreur deleteGalerie:', err)
    throw err
  }
}
