import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Galerie() {
    const galleryData = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
            title: "Formation Professionnelle",
            category: "Formations",
            description: "Étudiants en formation pratique"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1552365438-8461f48a42f5?w=500&h=400&fit=crop",
            title: "Salle de Classe",
            category: "Campus",
            description: "Infrastructure moderne d'apprentissage"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop",
            title: "Travaux Pratiques",
            category: "Formations",
            description: "Mise en pratique des compétences"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1516314775068-bb4e19c7d9d8?w=500&h=400&fit=crop",
            title: "Chantier de Construction",
            category: "BTP",
            description: "Formation construction et travaux publics"
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop",
            title: "Maintenance Industrial",
            category: "Industrie",
            description: "Formation maintenance équipements"
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
            title: "Restauration",
            category: "Services",
            description: "Formation commercialisation restauration"
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
            title: "Projet Étudiant",
            category: "Projets",
            description: "Réalisation de projets pédagogiques"
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop",
            title: "Atelier Technique",
            category: "Campus",
            description: "Ateliers équipés de technologies modernes"
        }
    ]

    const categories = ["Tous", "Formations", "Campus", "BTP", "Industrie", "Services", "Projets"]
    const [IndexActuel, setIndexActuel] = useState(null);
    const [activeCategory, setActiveCategory] = useState("Tous");

    const filteredData = activeCategory === "Tous"
        ? galleryData
        : galleryData.filter(img => img.category === activeCategory);

    const openImage = (index) => {
        setIndexActuel(index);
    };

    const closeCarousel = () => {
        setIndexActuel(null);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setIndexActuel((prev) => (prev === 0 ? filteredData.length - 1 : prev - 1));
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setIndexActuel((prev) => (prev === filteredData.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className='w-full'>
            {/* Hero Section */}
            <section className="w-full bg-linear-to-r from-[#002E6D] to-[#0553c1] text-white py-16 px-5">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">Galerie de l'IFTPL</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Découvrez nos installations, nos formations et la vie des étudiants à travers notre galerie photos et vidéos
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="w-full py-12 px-5 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
                                    ? 'bg-[#D00D2D] text-white shadow-lg'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="w-full py-16 px-5 bg-[#f5f5f5]">
                <div className="max-w-7xl mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {filteredData.map((img, index) => (
                            <div
                                key={img.id}
                                className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                onClick={() => openImage(index)}
                            >
                                <div className="relative h-64 overflow-hidden bg-gray-200">
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                            <p className="text-lg font-bold">{img.title}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white">
                                    <span className="inline-block text-xs font-bold text-[#D00D2D] bg-red-50 px-3 py-1 rounded-full mb-2">
                                        {img.category}
                                    </span>
                                    <h3 className="font-bold text-[#002E6D] mb-1">{img.title}</h3>
                                    <p className="text-sm text-gray-600">{img.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal Lightbox */}
            {IndexActuel !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={closeCarousel}
                >
                    <div
                        className="relative w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-white">{filteredData[IndexActuel].title}</h3>
                            <p className="text-gray-300">{filteredData[IndexActuel].description}</p>
                        </div>

                        {/* Image */}
                        <img
                            src={filteredData[IndexActuel].src}
                            alt={filteredData[IndexActuel].title}
                            className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
                        />

                        {/* Counter */}
                        <p className="text-center mt-4 text-gray-300">
                            {IndexActuel + 1} / {filteredData.length}
                        </p>

                        {/* Navigation Buttons */}
                        <button
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-[#D00D2D] transition-colors"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <button
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-[#D00D2D] transition-colors"
                            onClick={nextImage}
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        {/* Close Button */}
                        <button
                            onClick={closeCarousel}
                            className="absolute -top-12 right-0 text-white hover:text-[#D00D2D] transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}