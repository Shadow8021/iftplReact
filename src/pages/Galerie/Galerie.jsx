import { useState } from "react";
import { X } from 'lucide-react';


export default function Galerie() {
    //initialisation des donnees
    const galleryData = [
        {
            id: 1,
            src: "https://images.pexels.com/photos/1181328/pexels-photo-1181328.jpeg", // image cybersécurité
            title: "Cyber Security",
            description: "Network protection and secure system"
        },
        {
            id: 2,
            src: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg", // hacker concept
            title: "Hacker Concept",
            description: "Dark tech and encryption"
        },
        {
            id: 3,
            src: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg", // coding scene
            title: "Coding Environment",
            description: "Developer focused on code"
        },
        {
            id: 4,
            src: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg", // tech screens
            title: "Tech Screens",
            description: "Systems and digital screens"
        },
        {
            id: 5,
            src: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg", // tech screens
            title: "Tech Screens",
            description: "Systems and digital screens"
        },
        {
            id: 6,
            src: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg", // tech screens
            title: "Tech Screens",
            description: "Systems and digital screens"
        },
        {
            id: 7,
            src: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg", // tech screens
            title: "Tech Screens",
            description: "Systems and digital screens"
        }
    ]
    //configuration des fonstion
    const [IndexActuel, setIndexActuel] = useState(null);

    const openImage = (index) => {
        setIndexActuel(index);
    };

    const closeCarousel = () => {
        setIndexActuel(null);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setIndexActuel((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setIndexActuel((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
    };
    //debut de composant
    return (
        <div className='w-full py-20 px-10 items-center  mx-autom mb-50 flex flex-col gap-2 bg-[#002d6d47]'>

            <h2 className="text-3xl font-bold text-center text-[#D00D2D] mb-8">IFTPL Gallerie</h2>
            <div className="flex items-center shadow-2xl rounded-4xl max-w-full mx-auto justify-evenly gap-1 px-2 bg-red-200 py-1">
                <button className="btn rounded-2xl h-9 focus:bg-[#D00D2D] hover:bg-[#002E6D]">Tous</button>
                <button className="btn rounded-2xl h-9 focus:bg-[#D00D2D] hover:bg-[#002E6D]">Images</button>
                <button className="btn rounded-2xl h-9 focus:bg-[#D00D2D] hover:bg-[#002E6D]">Videos</button>
            </div>
            <div className='bg-[#002E6D] rounded-lg w-full p-10 h-auto mx-auto flex gap-2 justify-evenly flex-wrap'>
                {galleryData.map((img, index) => (
                    <div
                        key={img.id}
                        className="w-100 h-100 cursor-pointer overflow-hidden rounded-lg group"
                        onClick={() => openImage(index)}
                    >
                        <img
                            src={img.src}
                            alt={img.title}
                            className="w-100 h-100 object-cover transform group-hover:scale-105 transition duration-300"
                        />
                    </div>
                ))}

            </div>
            {IndexActuel !== null && (
                <div
                    className="fixed inset-0 bg-[#002d6d9e] backdrop-blur-xl bg-opacity-90 flex items-center justify-center z-50"
                    onClick={closeCarousel}
                >
                    <div
                        className="relative max-w-4xl w-full px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Button de fermeture */}

                        <X onClick={closeCarousel} className="absolute top-0 right-0 bg-[#002E6D] ml-2 rounded-full text-3xl hover:text-red-500" />

                        {/*  Button image precedent */}
                        <button
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-4xl px-4 hover:text-red-500"
                            onClick={prevImage}
                        >
                            ‹
                        </button>

                        {/* Button image suivant */}
                        <button
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-4xl px-4 hover:text-red-500"
                            onClick={nextImage}
                        >
                            ›
                        </button>

                        <img
                            src={galleryData[IndexActuel].src}
                            alt={galleryData[IndexActuel].title}
                            className="w-full max-h-[80vh] object-contain rounded-lg"
                        />
                        <p className="text-center mt-4 text-gray-300">
                            {galleryData[IndexActuel].title}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}