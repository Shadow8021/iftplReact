import React, { useState } from 'react';
import { CheckCircle, Clock, Users, Award, BookOpen, Briefcase, ArrowRight } from 'lucide-react';

export default function FormationDetail() {
    const [activeTab, setActiveTab] = useState('overview');

    const formation = {
        titre: "Maintenance des Équipements Industriels",
        description: "Formation complète pour maîtriser la maintenance préventive et corrective des équipements industriels.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop",
        duree: "2 ans",
        niveau: "Intermédiaire",
        place: "15-20 places",
        certification: "Diplôme d'État Reconnu"
    };

    const sections = [
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
    ];

    const competences = [
        "Diagnostiquer les pannes mécaniques et électriques",
        "Planifier et exécuter la maintenance préventive",
        "Utiliser les outils et équipements de diagnostic",
        "Lire et interpréter les plans techniques",
        "Respecter les normes de sécurité industrielle",
        "Gérer les urgences et interventions rapides",
        "Maintenir une documentation technique",
        "Communiquer avec l'équipe de production"
    ];

    const prérequis = [
        "Niveau Baccalauréat ou équivalent",
        "Aptitude physique pour travaux industriels",
        "Intérêt pour la mécanique et l'électricité",
        "Rigueur et sens des responsabilités",
        "Excellente capacité à résoudre les problèmes"
    ];

    const emplois = [
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
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="w-full h-96 relative overflow-hidden">
                <img
                    src={formation.image}
                    alt={formation.titre}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="max-w-7xl mx-auto w-full">
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                            {formation.titre}
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl">
                            {formation.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Info */}
            <section className="w-full py-8 px-5 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="flex items-center gap-3">
                            <Clock className="w-6 h-6 text-[#D00D2D]" />
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Durée</p>
                                <p className="font-bold text-[#002E6D]">{formation.duree}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Users className="w-6 h-6 text-[#D00D2D]" />
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Places</p>
                                <p className="font-bold text-[#002E6D]">{formation.place}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-[#D00D2D]" />
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Niveau</p>
                                <p className="font-bold text-[#002E6D]">{formation.niveau}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Award className="w-6 h-6 text-[#D00D2D]" />
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Certification</p>
                                <p className="font-bold text-[#002E6D]">{formation.certification}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs Navigation */}
            <section className="w-full py-6 px-5 bg-gray-50 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-2 overflow-x-auto">
                        {[
                            { id: 'overview', label: 'Vue d\'ensemble' },
                            { id: 'modules', label: 'Modules' },
                            { id: 'competences', label: 'Compétences' },
                            { id: 'prerequis', label: 'Prérequis' },
                            { id: 'emplois', label: 'Débouchés' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${activeTab === tab.id
                                        ? 'bg-[#D00D2D] text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="w-full py-16 px-5 bg-white flex-grow">
                <div className="max-w-7xl mx-auto">
                    {/* Vue d'ensemble */}
                    {activeTab === 'overview' && (
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-[#002E6D] mb-6">À propos de cette formation</h2>
                                <div className="bg-gradient-to-r from-[#f5f5f5] to-white p-8 rounded-2xl border-l-4 border-[#D00D2D]">
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        Cette formation complète prépare les étudiants à devenir des techniciens en maintenance industrielle hautement qualifiés. Elle combine théorie et pratique pour assurer une intégration rapide dans le monde professionnel.
                                    </p>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Les diplômés pourront intervenir sur tous types d'équipements industriels, de la maintenance préventive à la maintenance corrective, en passant par le diagnostic et la réparation spécialisée.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-[#002E6D] mb-6">Points forts du programme</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { titre: "Formation Pratique", desc: "60% de travaux pratiques en ateliers équipés" },
                                        { titre: "Instructeurs Qualifiés", desc: "Enseignants avec expérience industrielle" },
                                        { titre: "Stage en Entreprise", desc: "4 mois de stage professionnel avant diplôme" },
                                        { titre: "Équipements Modernes", desc: "Accès aux dernières technologies industrielles" }
                                    ].map((point, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#D00D2D]">
                                            <h3 className="font-bold text-[#002E6D] mb-2">{point.titre}</h3>
                                            <p className="text-gray-600">{point.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Modules */}
                    {activeTab === 'modules' && (
                        <div>
                            <h2 className="text-3xl font-bold text-[#002E6D] mb-8">Structure du Programme</h2>
                            <div className="space-y-6">
                                {sections.map((section, idx) => (
                                    <div key={section.id} className="bg-white border-l-4 border-[#D00D2D] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-[#002E6D] mb-2">
                                                    {idx + 1}. {section.titre}
                                                </h3>
                                                <p className="text-gray-600">{section.description}</p>
                                            </div>
                                            <div className="flex items-center gap-2 bg-[#D00D2D] text-white px-4 py-2 rounded-lg">
                                                <Clock className="w-5 h-5" />
                                                <span className="font-bold">{section.duree}</span>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {section.contenu.map((item, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <CheckCircle className="w-5 h-5 text-[#D00D2D] flex-shrink-0 mt-1" />
                                                    <span className="text-gray-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Compétences */}
                    {activeTab === 'competences' && (
                        <div>
                            <h2 className="text-3xl font-bold text-[#002E6D] mb-8">Compétences Acquises</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {competences.map((competence, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#f5f5f5] to-white rounded-xl border-l-4 border-[#D00D2D]">
                                        <CheckCircle className="w-6 h-6 text-[#D00D2D] flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-semibold">{competence}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Prérequis */}
                    {activeTab === 'prerequis' && (
                        <div>
                            <h2 className="text-3xl font-bold text-[#002E6D] mb-8">Prérequis et Conditions d'Admission</h2>
                            <div className="bg-gradient-to-r from-[#002E6D] to-[#0553c1] text-white p-8 rounded-2xl mb-8">
                                <h3 className="text-2xl font-bold mb-6">Conditions d'Accès</h3>
                                <ul className="space-y-3">
                                    {prérequis.map((prereq, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-[#D00D2D] flex-shrink-0 mt-1" />
                                            <span className="text-lg">{prereq}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-[#002E6D] p-8 rounded-xl">
                                <h3 className="text-xl font-bold text-[#002E6D] mb-4">Processus d'Admission</h3>
                                <ol className="space-y-3 list-decimal list-inside">
                                    <li className="text-gray-700">Dépôt du dossier complet</li>
                                    <li className="text-gray-700">Test d'aptitude technique</li>
                                    <li className="text-gray-700">Entretien avec la commission d'admission</li>
                                    <li className="text-gray-700">Confirmation de l'inscription</li>
                                </ol>
                            </div>
                        </div>
                    )}

                    {/* Débouchés */}
                    {activeTab === 'emplois' && (
                        <div>
                            <h2 className="text-3xl font-bold text-[#002E6D] mb-8">Débouchés Professionnels</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {emplois.map((emploi, idx) => (
                                    <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#D00D2D]">
                                        <div className="flex items-start gap-3 mb-4">
                                            <Briefcase className="w-7 h-7 text-[#D00D2D] flex-shrink-0" />
                                            <h3 className="text-xl font-bold text-[#002E6D]">{emploi.titre}</h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{emploi.entreprises}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-16 px-5 bg-gradient-to-r from-[#D00D2D] to-[#ff1a3c] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Prêt à Commencer Votre Parcours ?</h2>
                    <p className="text-xl text-red-100 mb-8">
                        Rejoignez notre programme et devenez un technicien en maintenance industrielle hautement qualifié
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="inline-flex items-center justify-center bg-white text-[#D00D2D] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors group">
                            S'inscrire Maintenant
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/contact" className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-[#D00D2D] transition-colors">
                            Demander Brochure
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
