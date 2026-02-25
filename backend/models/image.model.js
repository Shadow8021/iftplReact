// Modèle simple en mémoire pour gérer les images de la galerie
// Fournit des opérations CRUD basiques : getAll, getById, create, update, remove

const galerie = [
    { id: 1, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop", title: "Formation Professionnelle", category: "Formations", description: "Étudiants en formation pratique" },
    { id: 2, src: "https://images.unsplash.com/photo-1552365438-8461f48a42f5?w=500&h=400&fit=crop", title: "Salle de Classe", category: "Campus", description: "Infrastructure moderne d'apprentissage" },
    { id: 3, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop", title: "Travaux Pratiques", category: "Formations", description: "Mise en pratique des compétences" },
    { id: 4, src: "https://images.unsplash.com/photo-1516314775068-bb4e19c7d9d8?w=500&h=400&fit=crop", title: "Chantier de Construction", category: "BTP", description: "Formation construction et travaux publics" },
    { id: 5, src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop", title: "Maintenance Industrielle", category: "Industrie", description: "Formation maintenance équipements" },
    { id: 6, src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop", title: "Restauration", category: "Services", description: "Formation commercialisation restauration" },
    { id: 7, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop", title: "Projet Étudiant", category: "Projets", description: "Réalisation de projets pédagogiques" },
    { id: 8, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop", title: "Atelier Technique", category: "Campus", description: "Ateliers équipés de technologies modernes" }
]

let nextId = galerie.length ? Math.max(...galerie.map(g => g.id)) + 1 : 1

function getAll() {
    return [...galerie]
}

function getById(id) {
    const n = Number(id)
    return galerie.find(g => g.id === n) || null
}

function create({ src, title = '', category = '', description = '' }) {
    if (!src) throw new Error('Le champ "src" est requis pour créer une image')
    const item = { id: nextId++, src, title, category, description }
    galerie.push(item)
    return item
}

function update(id, data) {
    const n = Number(id)
    const idx = galerie.findIndex(g => g.id === n)
    if (idx === -1) return null
    const updated = { ...galerie[idx], ...data, id: n }
    galerie[idx] = updated
    return updated
}

function remove(id) {
    const n = Number(id)
    const idx = galerie.findIndex(g => g.id === n)
    if (idx === -1) return false
    galerie.splice(idx, 1)
    return true
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
}

