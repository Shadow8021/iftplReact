import { API_BASE_URL, API_ENDPOINTS } from '../config/api.js'

export async function getCommentaires() {
  try {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.commentaires.list}`)
    if (!response.ok) throw new Error(`Erreur API commentaires ${response.status}`)
    return await response.json()
  } catch (error) {
    console.error("Erreur lors de la récupération des commentaires :", error)
    return []
  }
}
