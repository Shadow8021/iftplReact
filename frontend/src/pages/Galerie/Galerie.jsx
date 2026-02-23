import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getGalerie } from '../../utils/storeGalerie';
import { galerieCategories } from '../../data/galerieData';

const categories = ["Tous", ...galerieCategories];
const PLACEHOLDER_IMG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="256" viewBox="0 0 400 256"%3E%3Crect fill="%23e5e7eb" width="400" height="256"/%3E%3Ctext fill="%236b7280" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14"%3EImage non disponible%3C/text%3E%3C/svg%3E';

export default function Galerie() {
    const [galleryData, setGalleryData] = useState([]);
    const [IndexActuel, setIndexActuel] = useState(null);
    const [activeCategory, setActiveCategory] = useState("Tous");

    useEffect(() => {
        setGalleryData(getGalerie());
    }, []);

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
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">Galerie de <span className="text-red-600">l'IFTPL</span></h1>
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
                    {filteredData.length === 0 ? (
                        <p className="text-center text-gray-500 py-12">Aucune image dans la galerie pour le moment.</p>
                    ) : (
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
                                            onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_IMG; }}
                                        />
                                        <div className="absolute inset-0 hover:bg-[#100b0c8f] bg-opacity-4 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                                <p className="text-lg font-bold">{img.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white">
                                        <span className="inline-block text-xs font-bold text-[#130e0f] bg-red-50 px-3 py-1 rounded-full mb-2">
                                            {img.category}
                                        </span>
                                        <h3 className="font-bold text-[#002E6D] mb-1">{img.title}</h3>
                                        <p className="text-sm text-gray-600">{img.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Modal Lightbox */}
            {IndexActuel !== null && filteredData[IndexActuel] && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={closeCarousel}
                >
                    <div
                        className="relative w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-white">{filteredData[IndexActuel].title}</h3>
                            <p className="text-gray-300">{filteredData[IndexActuel].description}</p>
                        </div>
                        <img
                            src={filteredData[IndexActuel].src}
                            alt={filteredData[IndexActuel].title}
                            className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
                        />
                        <p className="text-center mt-4 text-gray-300">
                            {IndexActuel + 1} / {filteredData.length}
                        </p>
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
                        <button
                            onClick={closeCarousel}
                            className="absolute -top-1 right-0 border-3 border-[#D00D2D] bg-none text-white hover:text-white hover:bg-[#D00D2D] rounded-full transition-colors"
                        >
                            <X className="w-8 rounded- h-8" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
