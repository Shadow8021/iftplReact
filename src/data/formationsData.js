// Données complètes de toutes les formations
export const formationsData = [
    {
        id: 1,
        titre: "Maintenance des Industriels (M.E.I.)",
        description: "Formation technique axée sur la maintenance, le diagnostic et la sécurité des équipements industriels.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
        duree: "3 ans",
        classes: ["Seconde", "Première", "Terminale"],
        stage: "Stage après la classe de Première (avant la Terminale)",
        modules: 12,
        niveau: "Intermédiaire",
        niveauAcces: "BEPC",
        categorie: "Industrie",
        place: "20-25 places",
        certification: "Diplôme d'État en Maintenance Industrielle",
        modulesDetailles: [
            {
                id: 1,
                titre: "Fondamentaux de la Mécanique",
                duree: "3 mois",
                description: "Apprentissage des principes de base de la mécanique industrielle",
                contenu: [
                    "Principes de physique appliquée",
                    "Technologie mécanique",
                    "Systèmes de transmission",
                    "Hydraulique et pneumatique",
                    "Matériaux et alliages"
                ]
            },
            {
                id: 2,
                titre: "Électricité et Électronique Industrielle",
                duree: "4 mois",
                description: "Maîtrise de l'électricité et des systèmes électroniques en industrie",
                contenu: [
                    "Circuits électriques",
                    "Moteurs électriques",
                    "Transformateurs",
                    "Automates programmables (API)",
                    "Sécurité électrique"
                ]
            },
            {
                id: 3,
                titre: "Maintenance Préventive",
                duree: "2 mois",
                description: "Techniques et planification de la maintenance préventive",
                contenu: [
                    "Planification de maintenance",
                    "Lubrification industrielle",
                    "Inspection et diagnostic",
                    "Techniques de mesure",
                    "Documentation technique"
                ]
            },
            {
                id: 4,
                titre: "Maintenance Corrective",
                duree: "3 mois",
                description: "Interventions de réparation et restauration d'équipements",
                contenu: [
                    "Diagnostic de pannes",
                    "Techniques de réparation",
                    "Remplacement de pièces",
                    "Tests de fonctionnement",
                    "Gestion des urgences"
                ]
            },
            {
                id: 5,
                titre: "Automatisation et Commande",
                duree: "2 mois",
                description: "Systèmes automatisés et de contrôle des machines",
                contenu: [
                    "Programmation PLC",
                    "Interfaces homme-machine",
                    "Capteurs et actionneurs",
                    "Systèmes de sécurité",
                    "Optimisation énergétique"
                ]
            },
            {
                id: 6,
                titre: "Stage Professionnel",
                duree: "4 mois",
                description: "Expérience pratique en entreprise avec un tuteur qualifié",
                contenu: [
                    "Travail sur équipements réels",
                    "Mise en pratique des compétences",
                    "Initiation aux responsabilités",
                    "Évaluation professionnelle",
                    "Préparation à l'emploi"
                ]
            }
        ],
        competences: [
            "Diagnostiquer les pannes mécaniques et électriques",
            "Planifier et exécuter la maintenance préventive",
            "Utiliser les outils et équipements de diagnostic",
            "Lire et interpréter les plans techniques",
            "Respecter les normes de sécurité industrielle",
            "Gérer les urgences et interventions rapides",
            "Maintenir une documentation technique",
            "Communiquer avec l'équipe de production"
        ],
        prerequis: [
            "Niveau BEPC (Brevet d'Études du Premier Cycle)",
            "Aptitude physique pour travaux industriels",
            "Intérêt pour la mécanique et l'électricité",
            "Rigueur et sens des responsabilités",
            "Excellente capacité à résoudre les problèmes"
        ],
        emplois: [
            {
                titre: "Technicien Maintenance",
                entreprises: "Mines, usines de transformation, cimenteries"
            },
            {
                titre: "Responsable Maintenance",
                entreprises: "Grandes industries, sites de production"
            },
            {
                titre: "Ingénieur Maintenance",
                entreprises: "Énergie, hydrocarbures, manufacturing"
            },
            {
                titre: "Consultant Technique",
                entreprises: "Bureaux d'études, cabinets de conseil"
            }
        ]
    },
    {
        id: 2,
        titre: "Bâtiment et Travaux Publics (B.T.P.)",
        description: "Techniques de construction, lecture de plans, gestion de chantier et sécurité.",
        image: "https://images.unsplash.com/photo-1762247019055-f0170f1c7245?q=80&w=762&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duree: "3 ans",
        classes: ["Seconde", "Première", "Terminale"],
        stage: "Stage après la classe de Première (avant la Terminale)",
        modules: 15,
        niveau: "Avancé",
        niveauAcces: "BEPC",
        categorie: "Construction",
        place: "25-30 places",
        certification: "Diplôme d'État en BTP",
        modulesDetailles: [
            {
                id: 1,
                titre: "Lecture de Plans et Dessin Technique",
                duree: "3 mois",
                description: "Maîtriser la lecture et la création de plans de construction",
                contenu: [
                    "Normes de dessin technique",
                    "Lecture de plans architecturaux",
                    "Utilisation de CAO",
                    "Mesurages sur site",
                    "Détails de construction"
                ]
            },
            {
                id: 2,
                titre: "Matériaux de Construction",
                duree: "2 mois",
                description: "Connaissance des matériaux et leurs applications",
                contenu: [
                    "Béton et armatures",
                    "Acier de construction",
                    "Bois et menuiserie",
                    "Isolation thermique",
                    "Matériaux de revêtement"
                ]
            },
            {
                id: 3,
                titre: "Gestion de Chantier",
                duree: "3 mois",
                description: "Organisation et suivi des travaux de construction",
                contenu: [
                    "Planification des tâches",
                    "Gestion des ressources",
                    "Suivi des délais",
                    "Gestion du budget",
                    "Coordination des équipes"
                ]
            },
            {
                id: 4,
                titre: "Sécurité sur les Chantiers",
                duree: "2 mois",
                description: "Normes et règles de sécurité en construction",
                contenu: [
                    "EPI et équipements de protection",
                    "Prévention des accidents",
                    "Premiers secours",
                    "Signalétique de chantier",
                    "Conformité réglementaire"
                ]
            },
            {
                id: 5,
                titre: "Techniques de Construction",
                duree: "3 mois",
                description: "Méthodes et techniques de mise en œuvre",
                contenu: [
                    "Fondations et terrassement",
                    "Maçonnerie",
                    "Charpente et couverture",
                    "Installations techniques",
                    "Finitions"
                ]
            },
            {
                id: 6,
                titre: "Stage Professionnel",
                duree: "4 mois",
                description: "Expérience pratique sur chantiers réels",
                contenu: [
                    "Immersion sur grand projet",
                    "Apprentissage des techniques",
                    "Travail en équipe",
                    "Suivi de réalisation",
                    "Evaluation du travail"
                ]
            }
        ],
        competences: [
            "Lire et interpréter des plans de construction",
            "Utiliser des logiciels de CAO (AutoCAD, SketchUp)",
            "Maîtriser les techniques de gros œuvre",
            "Gérer un chantier et coordonner les équipes",
            "Respecter les normes de sécurité",
            "Appliquer les règles d'hygiène et sécurité",
            "Estimer les coûts de construction",
            "Contrôler la qualité des travaux"
        ],
        prerequis: [
            "Niveau BEPC (Brevet d'Études du Premier Cycle)",
            "Aptitude physique certifiée",
            "Intérêt pour le secteur du bâtiment",
            "Capacité à travailler en équipe",
            "Respect de la discipline de sécurité"
        ],
        emplois: [
            {
                titre: "Chef de Chantier",
                entreprises: "Entreprises de construction, promoteurs immobiliers"
            },
            {
                titre: "Maître d'Ouvrage",
                entreprises: "Collectivités, SEM, bailleurs"
            },
            {
                titre: "Contrôleur de Travaux",
                entreprises: "Bureaux de contrôle, SNC"
            },
            {
                titre: "Responsable Qualité",
                entreprises: "Grandes entreprises de BTP"
            }
        ]
    },
    {
        id: 3,
        titre: "Production des cultures Vivrières et Industrielles (P.C.V.I.)",
        description: "Méthodes culturales, gestion des ressources et techniques pour des rendements optimisés.",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&h=300&fit=crop",
        duree: "3 ans",
        classes: ["Seconde", "Première", "Terminale"],
        stage: "Stage après la classe de Première (avant la Terminale)",
        modules: 10,
        niveau: "Débutant",
        niveauAcces: "BEPC",
        categorie: "Agriculture",
        place: "20 places",
        certification: "Diplôme d'État en Production Agricole",
        modulesDetailles: [
            {
                id: 1,
                titre: "Fondamentaux d'Agronomie",
                duree: "3 mois",
                description: "Principes scientifiques de l'agriculture",
                contenu: [
                    "Botanique appliquée",
                    "Pédologie et fertilité des sols",
                    "Climatologie et météorologie",
                    "Biologie du sol",
                    "Écologie agricole"
                ]
            },
            {
                id: 2,
                titre: "Cultures Vivrières",
                duree: "3 mois",
                description: "Techniques de production alimentaires",
                contenu: [
                    "Production de céréales",
                    "Cultures légumières",
                    "Production tubercules et racines",
                    "Gestion des adventices",
                    "Protection des cultures"
                ]
            },
            {
                id: 3,
                titre: "Cultures Industrielles",
                duree: "2 mois",
                description: "Utilisation commerciale des plantes",
                contenu: [
                    "Cultures de rente",
                    "Fibres textiles",
                    "Cultures oléagineuses",
                    "Plantes à usage industriel",
                    "Commerce et coton"
                ]
            },
            {
                id: 4,
                titre: "Gestion des Ressources",
                duree: "2 mois",
                description: "Utilisation durable des ressources",
                contenu: [
                    "Gestion de l'eau",
                    "Gestion des engrais",
                    "Erosion et conservation des sols",
                    "Énergies durables",
                    "Économie agricole"
                ]
            },
            {
                id: 5,
                titre: "Équipements et Machinisme",
                duree: "2 mois",
                description: "Utilisation des machines agricoles",
                contenu: [
                    "Tracteurs et moteurs",
                    "Outils de travail du sol",
                    "Equipements de semis",
                    "Moissonneuses-batteuses",
                    "Maintenance basique"
                ]
            },
            {
                id: 6,
                titre: "Stage Professionnel",
                duree: "3 mois",
                description: "Expérience en exploitation agricole",
                contenu: [
                    "Travail de champ",
                    "Conduite d'exploitation",
                    "Techniques pratiques",
                    "Gestion d'équipe",
                    "Projet de culture"
                ]
            }
        ],
        competences: [
            "Maîtriser les techniques de culture vivrière",
            "Gérer les cultures industrielles",
            "Appliquer les principes d'agronomie",
            "Utiliser les machines agricoles",
            "Analyser et améliorer les rendements",
            "Respecter l'environnement",
            "Gérer une exploitation agricole",
            "Commercialiser les produits agricoles"
        ],
        prerequis: [
            "Niveau BEPC (Brevet d'Études du Premier Cycle)",
            "Aptitude physique pour travaux agricoles",
            "Intérêt pour l'agriculture",
            "Capacité d'adaptation",
            "Sens de l'observation"
        ],
        emplois: [
            {
                titre: "Exploitant Agricole",
                entreprises: "Exploitations familiales, fermes collectives"
            },
            {
                titre: "Agronome",
                entreprises: "Bureaux d'études, organismes de recherche"
            },
            {
                titre: "Technicien Agricole",
                entreprises: "Coopératives, chambres d'agriculture"
            },
            {
                titre: "Conseiller Agricole",
                entreprises: "Organismes de développement rural"
            }
        ]
    },
    {
        id: 4,
        titre: "Productions Animales (P.A.)",
        description: "Élevage, alimentation animale, santé et gestion des exploitations d'élevage.",
        image: "https://plus.unsplash.com/premium_photo-1661914806958-716d7b029d20?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duree: "3 ans",
        classes: ["Seconde", "Première", "Terminale"],
        stage: "Stage après la classe de Première (avant la Terminale)",
        modules: 10,
        niveau: "Débutant",
        niveauAcces: "BEPC",
        categorie: "Agriculture",
        place: "20 places",
        certification: "Diplôme d'État en Productions Animales",
        modulesDetailles: [
            {
                id: 1,
                titre: "Zootechnie Générale",
                duree: "3 mois",
                description: "Science de l'élevage des animaux",
                contenu: [
                    "Races et génétique animale",
                    "Morphologie et anatomie",
                    "Reproduction et sélection",
                    "Cycle biologique",
                    "Performance zootechnique"
                ]
            },
            {
                id: 2,
                titre: "Nutrition et Alimentation",
                duree: "3 mois",
                description: "Besoins nutritionnels et alimentation animale",
                contenu: [
                    "Nutriments essentiels",
                    "Aliments conventionnels",
                    "Formulation des rations",
                    "Fourrage et foin",
                    "Supplémentation"
                ]
            },
            {
                id: 3,
                titre: "Santé Animale",
                duree: "2 mois",
                description: "Prévention et gestion des maladies",
                contenu: [
                    "Hygiène et biosécurité",
                    "Vaccination et prévention",
                    "Maladies courantes",
                    "Pharmacologie vétérinaire",
                    "Traçabilité et bien-être"
                ]
            },
            {
                id: 4,
                titre: "Gestion d'Exploitation",
                duree: "2 mois",
                description: "Administration et gestion d'une exploitation",
                contenu: [
                    "Comptabilité agricole",
                    "Planification de production",
                    "Gestion des équipes",
                    "Économie de l'élevage",
                    "Commercialisation"
                ]
            },
            {
                id: 5,
                titre: "Techniques Spécialisées",
                duree: "2 mois",
                description: "Élevages spécifiques et techniques",
                contenu: [
                    "Bovins de boucherie et lait",
                    "Élevage porcin",
                    "Aviculture",
                    "Élevage cunicole",
                    "Apiculture"
                ]
            },
            {
                id: 6,
                titre: "Stage Professionnel",
                duree: "3 mois",
                description: "Expérience d'élevage en exploitation",
                contenu: [
                    "Travail d'élevage",
                    "Soins aux animaux",
                    "Traite et manipulation",
                    "Gestion quotidienne",
                    "Projet d'amélioration"
                ]
            }
        ],
        competences: [
            "Connaître les besoins spécifiques des animaux",
            "Gérer l'alimentation et la nutrition",
            "Assurer le bien-être et la santé animale",
            "Utiliser les équipements d'élevage",
            "Gérer une exploitation d'élevage",
            "Assurer l'hygiène et la sécurité",
            "Commercialiser les produits animaux",
            "Respecter la traçabilité et la qualité"
        ],
        prerequis: [
            "Niveau BEPC (Brevet d'Études du Premier Cycle)",
            "Aptitude physique certifiée",
            "Intérêt pour l'élevage",
            "Patience et responsabilité",
            "Absence d'allergie aux animaux"
        ],
        emplois: [
            {
                titre: "Éleveur",
                entreprises: "Exploitations d'élevage, fermes"
            },
            {
                titre: "Responsable de Troupeau",
                entreprises: "Grandes exploitations, coopératives"
            },
            {
                titre: "Technicien Élevage",
                entreprises: "Organismes de développement, coopératives"
            },
            {
                titre: "Vétérinaire Auxiliaire",
                entreprises: "Cabinets vétérinaires, cliniques"
            }
        ]
    },
    {
        id: 5,
        titre: "Hôtellerie - Commercialisation & Services en Restauration (C.S.R.)",
        description: "Accueil, service, commercialisation et gestion des établissements hôteliers et de restauration.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
        duree: "3 ans",
        classes: ["Seconde", "Première", "Terminale"],
        stage: "Stage après la classe de Première (avant la Terminale)",
        modules: 8,
        niveau: "Débutant",
        niveauAcces: "BEPC",
        categorie: "Restauration",
        place: "25 places",
        certification: "Diplôme d'État en Hôtellerie et Restauration",
        modulesDetailles: [
            {
                id: 1,
                titre: "Services en Restauration",
                duree: "3 mois",
                description: "Techniques de service et accueil client",
                contenu: [
                    "Protocoles de service",
                    "Présentation des plats",
                    "Accueil et communication",
                    "Gestion des tables",
                    "Service à l'anglaise et française"
                ]
            },
            {
                id: 2,
                titre: "Commercialisation des Services",
                duree: "2 mois",
                description: "Marketing et promotion hôtelière",
                contenu: [
                    "Stratégie commerciale",
                    "Tarification et yield",
                    "Réservations et overbooking",
                    "Fidélisation client",
                    "Promotion digitale"
                ]
            },
            {
                id: 3,
                titre: "Gestion d'Établissement",
                duree: "2 mois",
                description: "Administration et gestion hôtelière",
                contenu: [
                    "Comptabilité hôtelière",
                    "Gestion des ressources humaines",
                    "Planification des services",
                    "Contrôle de qualité",
                    "Conformité réglementaire"
                ]
            },
            {
                id: 4,
                titre: "Cuisine et Hygiène Alimentaire",
                duree: "2 mois",
                description: "Notions culinaires et sécurité alimentaire",
                contenu: [
                    "Principes de cuisine",
                    "Méthodes de cuisson",
                    "Hygiène HACCP",
                    "Allergens et régimes",
                    "Gestion des stocks"
                ]
            },
            {
                id: 5,
                titre: "Hôtellerie et Accueil",
                duree: "2 mois",
                description: "Gestion hôtelière et reception",
                contenu: [
                    "Front desk operations",
                    "Check-in/Check-out",
                    "Gestion des demandes",
                    "Systèmes de réservation",
                    "Gestion des réclamations"
                ]
            },
            {
                id: 6,
                titre: "Stage Professionnel",
                duree: "4 mois",
                description: "Immersion en établissement hôtelier",
                contenu: [
                    "Travail en équipe",
                    "Service aux clients",
                    "Apprentissage pratique",
                    "Gestion d'événement",
                    "Projet personnel"
                ]
            }
        ],
        competences: [
            "Maîtriser les techniques de service",
            "Accueillir et fidéliser les clients",
            "Gérer une réservation hôtelière",
            "Commercialiser les services",
            "Assurer l'hygiène alimentaire",
            "Gérer une équipe",
            "Communiquer en plusieurs langues",
            "Utiliser les outils informatiques"
        ],
        prerequis: [
            "Niveau BEPC (Brevet d'Études du Premier Cycle)",
            "Aisance relationnelle",
            "Excellente hygiène personnelle",
            "Disponibilité et flexibilité",
            "Langue française et si possible étrangères"
        ],
        emplois: [
            {
                titre: "Réceptionniste",
                entreprises: "Hôtels, résidences, établissements touristiques"
            },
            {
                titre: "Chef de Service",
                entreprises: "Restaurants, hôtels, catering"
            },
            {
                titre: "Manager Restauration",
                entreprises: "Chaînes hôtelières, restaurants"
            },
            {
                titre: "Responsable RH",
                entreprises: "Grands établissements touristiques"
            }
        ]
    },
    {
        id: 6,
        titre: "Architecture et Construction (A.C.)",
        description: "Conception, dessin technique, structures et gestion de projets de construction.",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&h=300&fit=crop",
        duree: "3 ans",
        classes: ["Seconde", "Première", "Terminale"],
        stage: "Stage après la classe de Première (avant la Terminale)",
        modules: 12,
        niveau: "Intermédiaire",
        niveauAcces: "BEPC",
        categorie: "Construction",
        place: "20 places",
        certification: "Diplôme d'État en Architecture et Construction",
        modulesDetailles: [
            {
                id: 1,
                titre: "Dessin Architectural",
                duree: "3 mois",
                description: "Techniques de représentation architecturale",
                contenu: [
                    "Dessin à main levée",
                    "Perspectives et projections",
                    "Plans et coupes",
                    "Croquis d'avant-projet",
                    "Normes architecturales"
                ]
            },
            {
                id: 2,
                titre: "CAO et Modélisation 3D",
                duree: "2 mois",
                description: "Outils informatiques de conception",
                contenu: [
                    "AutoCAD",
                    "Revit et BIM",
                    "SketchUp",
                    "Modélisation 3D",
                    "Rendus et visualisations"
                ]
            },
            {
                id: 3,
                titre: "Structures et Matériaux",
                duree: "2 mois",
                description: "Principes structurels et matériaux",
                contenu: [
                    "Statique et mécanique",
                    "Béton armé",
                    "Acier de construction",
                    "Charpente métallique",
                    "Durabilité des matériaux"
                ]
            },
            {
                id: 4,
                titre: "Conception Architecturale",
                duree: "2 mois",
                description: "Processus de conception et créativité",
                contenu: [
                    "Programmation architecturale",
                    "Conception bioclimatique",
                    "Accessibilité et normes",
                    "Confort et lumière",
                    "Développement durable"
                ]
            },
            {
                id: 5,
                titre: "Gestion de Projets",
                duree: "2 mois",
                description: "Pilotage de projets architecturaux",
                contenu: [
                    "Phases de projet",
                    "Estimation budgétaire",
                    "Planification",
                    "Réglementation",
                    "Maîtrise d'ouvrage"
                ]
            },
            {
                id: 6,
                titre: "Stage Professionnel",
                duree: "4 mois",
                description: "Expérience en cabinet ou entreprise",
                contenu: [
                    "Projet réel",
                    "Apprentissage professionnel",
                    "Mentorat",
                    "Portfolio développement",
                    "Intégration équipe"
                ]
            }
        ],
        competences: [
            "Concevoir des projets architecturaux",
            "Maîtriser les outils CAO",
            "Connaître les structures et matériaux",
            "Gérer une enveloppe budgétaire",
            "Respecter les normes et réglementations",
            "Communiquer visuellement",
            "Collaborer avec divers intervenants",
            "Intégrer développement durable"
        ],
        prerequis: [
            "Niveau BEPC (Brevet d'Études du Premier Cycle)",
            "Aptitude en mathématiques et dessin",
            "Créativité et sens esthétique",
            "Rigueur et précision",
            "Capacité de concentration"
        ],
        emplois: [
            {
                titre: "Architecte Junior",
                entreprises: "Cabinets d'architectes, BE"
            },
            {
                titre: "Dessinateur-Projeteur",
                entreprises: "Bureaux d'études, entreprises de construction"
            },
            {
                titre: "Chef de Projet",
                entreprises: "Promoteurs immobiliers, collectivités"
            },
            {
                titre: "Architecte Technique",
                entreprises: "Grands groupes de construction"
            }
        ]
    },
    {
        id: 7,
        titre: "Energie et Environnement (E.E.)",
        description: "Énergies renouvelables, gestion des ressources et solutions durables pour l'environnement.",
        image: "https://plus.unsplash.com/premium_photo-1682145588016-bf57eb0fdbf7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duree: "3 ans",
        classes: ["Seconde", "Première", "Terminale"],
        stage: "Stage après la classe de Première (avant la Terminale)",
        modules: 12,
        niveau: "Intermédiaire",
        niveauAcces: "BEPC",
        categorie: "Environnement",
        place: "20 places",
        certification: "Diplôme d'État en Énergie et Environnement",
        modulesDetailles: [
            {
                id: 1,
                titre: "Énergies Renouvelables",
                duree: "3 mois",
                description: "Exploitation de sources d'énergie durables",
                contenu: [
                    "Énergie solaire photovoltaïque",
                    "Énergie solaire thermique",
                    "Énergie éolienne",
                    "Hydroélectricité",
                    "Biomasse et biogaz"
                ]
            },
            {
                id: 2,
                titre: "Efficacité Énergétique",
                duree: "2 mois",
                description: "Réduction de la consommation énergétique",
                contenu: [
                    "Audit énergétique",
                    "Isolation thermique",
                    "Chauffage et climatisation",
                    "Éclairage économe",
                    "Technologies innovantes"
                ]
            },
            {
                id: 3,
                titre: "Gestion Environnementale",
                duree: "2 mois",
                description: "Protection et gestion de l'environnement",
                contenu: [
                    "Biodiversité et écosystèmes",
                    "Pollution et déchets",
                    "Eau et ressources hydriques",
                    "Sol et agriculture durable",
                    "Normes environnementales"
                ]
            },
            {
                id: 4,
                titre: "Technologies Respectueuses",
                duree: "2 mois",
                description: "Technologies vertes et durables",
                contenu: [
                    "Mobilité durable",
                    "Chimie verte",
                    "Matériaux éco-responsables",
                    "Économie circulaire",
                    "Smart grid et IoT"
                ]
            },
            {
                id: 5,
                titre: "Réglementation et Durabilité",
                duree: "2 mois",
                description: "Cadre légal et développement durable",
                contenu: [
                    "Protocoles de Kyoto",
                    "Directives européennes",
                    "Certification environnementale",
                    "RSE (Responsabilité Sociale)",
                    "Indicateurs durables"
                ]
            },
            {
                id: 6,
                titre: "Stage Professionnel",
                duree: "4 mois",
                description: "Expérience en entreprise verte",
                contenu: [
                    "Projet environnemental",
                    "Audit et conseil",
                    "Installation énergies",
                    "Gestion de ressources",
                    "Contribution durable"
                ]
            }
        ],
        competences: [
            "Comprendre les sources d'énergie renouvelables",
            "Analyser et réduire la consommation énergétique",
            "Évaluer l'impact environnemental",
            "Proposer des solutions durables",
            "Utiliser les technologies vertes",
            "Respecter la réglementation",
            "Communiquer sur la durabilité",
            "Gérer les ressources naturelles"
        ],
        prerequis: [
            "Niveau BEPC (Brevet d'Études du Premier Cycle)",
            "Intérêt pour la physique et l'environnement",
            "Conscience environnementale",
            "Capacités analytiques",
            "Engagement dans la durabilité"
        ],
        emplois: [
            {
                titre: "Ingénieur Énergie",
                entreprises: "Entreprises énergétiques, collectivités"
            },
            {
                titre: "Responsable Environnement",
                entreprises: "Industries, collectivités territoriales"
            },
            {
                titre: "Consultant Durabilité",
                entreprises: "Cabinets de conseil, bureaux d'études"
            },
            {
                titre: "Technicien Énergies",
                entreprises: "Entreprises d'installation, maintenance"
            }
        ]
    }
];
