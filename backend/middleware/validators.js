/**
 * Middlewares de validation et sécurité
 * Prévient les injections et valide les entrées
 */

const { body, param, validationResult, query } = require('express-validator')

/**
 * Middleware pour capturer et retourner les erreurs de validation
 */
function handleValidationErrors(req, res, next) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: 'Validation échouée',
            details: errors.array().map(err => ({
                field: err.param,
                message: err.msg,
                value: err.value
            }))
        })
    }
    next()
}

/**
 * Validation pour le login
 */
const validateLogin = [
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Email invalide'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Mot de passe minimum 8 caractères')
        .trim()
        .escape(),
    handleValidationErrors
]

/**
 * Validation pour la création de formation
 */
const validateFormation = [
    body('titre')
        .trim()
        .notEmpty().withMessage('Titre requis')
        .isLength({ min: 3, max: 200 }).withMessage('Titre entre 3-200 caractères')
        .escape(),
    body('description')
        .optional()
        .trim()
        .isLength({ max: 500 }).withMessage('Description max 500 caractères')
        .escape(),
    body('image')
        .optional()
        .isURL().withMessage('URL image invalide'),
    body('categorie')
        .trim()
        .notEmpty().withMessage('Catégorie requise')
        .escape(),
    handleValidationErrors
]

/**
 * Validation pour la création d'actualité
 */
const validateActualite = [
    body('titre')
        .trim()
        .notEmpty().withMessage('Titre requis')
        .isLength({ min: 3, max: 200 }).withMessage('Titre entre 3-200 caractères')
        .escape(),
    body('description')
        .optional()
        .trim()
        .escape(),
    body('contenu')
        .trim()
        .notEmpty().withMessage('Contenu requis')
        .escape(),
    body('image')
        .optional()
        .isURL().withMessage('URL image invalide'),
    handleValidationErrors
]

/**
 * Validation pour la galerie
 */
const validateGalerie = [
    body('src')
        .trim()
        .isURL().withMessage('URL image invalide'),
    body('title')
        .optional()
        .trim()
        .isLength({ max: 200 }).withMessage('Titre max 200 caractères')
        .escape(),
    body('category')
        .trim()
        .notEmpty().withMessage('Catégorie requise')
        .escape(),
    body('description')
        .optional()
        .trim()
        .escape(),
    handleValidationErrors
]

/**
 * Validation pour les ID en paramètres
 */
const validateId = [
    param('id')
        .isInt({ min: 1 }).withMessage('ID invalide'),
    handleValidationErrors
]

/**
 * Validation pour la pagination
 */
const validatePagination = [
    query('page')
        .optional()
        .isInt({ min: 1 }).withMessage('Page invalide'),
    query('limit')
        .optional()
        .isInt({ min: 1, max: 100 }).withMessage('Limit entre 1-100'),
    handleValidationErrors
]

module.exports = {
    validateLogin,
    validateFormation,
    validateActualite,
    validateGalerie,
    validateId,
    validatePagination,
    handleValidationErrors
}
