import { API_BASE_URL, API_ENDPOINTS } from '../config/api.js'

/**
 * Connexion administrateur
 * Le serveur envoie automatiquement un cookie httpOnly
 */
export async function loginAdmin({ email, password }) {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.auth.login}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Important: envoyer les cookies
        body: JSON.stringify({ email, password }),
    })

    if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Échec de connexion' }))
        throw new Error(err.message || err.error || 'Erreur de connexion')
    }

    const data = await res.json()
    // Le token est maintenant dans un cookie httpOnly, pas besoin de le stocker
    return data
}

/**
 * Récupérer le profil de l'utilisateur connecté
 * Utilise automatiquement le cookie httpOnly
 */
export async function me() {
    const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.auth.me}`, {
        method: 'GET',
        credentials: 'include', // Important: envoyer les cookies
    })

    if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Non authentifié')
    }

    return res.json()
}

/**
 * Déconnexion utilisateur
 * Supprime le cookie sur le serveur
 */
export async function logout() {
    try {
        await fetch(`${API_BASE_URL}${API_ENDPOINTS.auth.logout}`, {
            method: 'POST',
            credentials: 'include', // Important: envoyer le cookie à supprimer
        })
    } catch (error) {
        // Même en cas d'erreur, on efface le cookie sur le client si nécessaire
        console.error('Erreur lors de la déconnexion:', error)
    }
}
