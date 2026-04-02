import { API_BASE_URL, API_ENDPOINTS } from '../config/api.js'

export async function loginAdmin({ email, password }) {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.auth.login}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    })
    if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Échec de connexion' }))
        throw new Error(err.error || 'Erreur connexion')
    }
    return res.json()
}

export async function me(token) {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.auth.me}`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
    })
    if (!res.ok) {
        throw new Error('Token invalide')
    }
    return res.json()
}

export async function logout(token) {
    await fetch(`${API_BASE_URL}${API_ENDPOINTS.auth.logout}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
    })
}
