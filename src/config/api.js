/**
 * Configuration centralisée de l'API
 * Utilise VITE_API_URL depuis .env, sinon localhost:5000
 */
export const API_BASE_URL = import.meta.env.VITE_API_URL;
export const API_ENDPOINTS = {
    auth: {
        login: '/api/auth/login',
        me: '/api/auth/me',
        logout: '/api/auth/logout',
    },
    formations: {
        list: '/api/formations',
        getById: (id) => `/api/formations/${id}`,
        byCategory: (categorie) => `/api/formations/categorie/${categorie}`,
        create: '/api/formations',
        update: (id) => `/api/formations/${id}`,
        delete: (id) => `/api/formations/${id}`,
    },
    galerie: {
        list: '/api/galerie',
        getById: (id) => `/api/galerie/${id}`,
        create: '/api/galerie',
        update: (id) => `/api/galerie/${id}`,
        delete: (id) => `/api/galerie/${id}`,
    },
    actualites: {
        list: '/api/actualites',
        getById: (id) => `/api/actualites/${id}`,
        create: '/api/actualites',
        update: (id) => `/api/actualites/${id}`,
        delete: (id) => `/api/actualites/${id}`,
    },
    commentaires: {
        list: '/api/commentaire',
    },
}
