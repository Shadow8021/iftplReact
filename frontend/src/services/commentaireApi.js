const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export async function getCommentaires() {
  try {
    const response = await fetch(`${API_BASE}/api/commentaire`)
    if (!response.ok) throw new Error(`Erreur API commentaires ${response.status}`)
    return await response.json()
  } catch (error) {
    console.error("Erreur lors de la récupération des commentaires :", error)
    return []
  }
}
