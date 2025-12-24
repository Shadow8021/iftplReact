import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Données des témoignages (remplacer avec des données réelles)
const testimonies = [
    {
        photo: "https://www.w3schools.com/w3images/avatar2.png",  // Photo de profil
        nationalityFlag: "🇫🇷",  // Drapeau (utiliser des émojis ou images)
        name: "Jean Dupont",
        comment: "Ce service a changé ma vie, je suis tellement reconnaissant pour l'aide que j'ai reçue. Je le recommande à tout le monde !"
    },
    {
        photo: "https://www.w3schools.com/w3images/avatar1.png",
        nationalityFlag: "🇪🇸",
        name: "Maria Garcia",
        comment: "Une expérience fantastique ! Le processus était simple et rapide, et j'ai trouvé exactement ce que je cherchais."
    },
    {
        photo: "https://www.w3schools.com/w3images/avatar3.png",
        nationalityFlag: "🇮🇹",
        name: "Luca Bianchi",
        comment: "Le meilleur site que j'ai utilisé jusqu'à présent. Très professionnel et facile à naviguer."
    }
];

export default function TestimonialSlider() {
    const settings = {
        dots: true,  // Afficher les points de navigation
        infinite: true,  // Boucle infinie
        speed: 500,  // Durée de la transition
        slidesToShow: 1,  // Afficher un seul témoignage à la fois
        slidesToScroll: 1,  // Faire défiler un témoignage à la fois
        adaptiveHeight: true,  // Hauteur du slider ajustée en fonction du contenu
    };

    return (
        <div className="max-w-full w-full py-10 px-4 flex flex-col items-center bg-gray-50">
            <h2 className="text-2xl font-bold text-center mb-6 text-[#D00D2D]">Témoignages</h2>

            {/* Conteneur du slider */}
            <div className="w-full lg:w-3/4 xl:w-1/2 flex justify-center items-center bg-yellow-300">
                <Slider {...settings}>
                    {testimonies.map((testimony, index) => (
                        <div key={index} className="w-full max-w-md h-[250px] bg-[#002E6D] flex border-2 border-gray-300 rounded-2xl p-4">
                            {/* Section photo et nationalité */}
                            <div className="w-1/4 flex justify-center items-center">
                                <div className="relative">
                                    <img className="w-16 h-16 rounded-full object-cover" src={testimony.photo} alt="Profil" />
                                    <span className="absolute bottom-0 right-0 bg-white text-xs rounded-full w-6 h-6 text-center">
                                        {testimony.nationalityFlag}
                                    </span>
                                </div>
                            </div>

                            {/* Section texte */}
                            <div className="w-3/4 flex flex-col justify-between pl-4">
                                <h3 className="font-semibold text-xl text-[#D00D2D]">— {testimony.name}</h3>
                                <p className="text-sm italic text-white overflow-hidden text-ellipsis">{testimony.comment}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
