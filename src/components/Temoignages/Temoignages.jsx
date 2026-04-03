import React, { useState, useEffect } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from 'lucide-react'
import "./style.css"
import { getCommentaires } from "../../services/commentaireApi";

export default function Temoignages() {
  const [temoignages, setTemoignages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadComments() {
      try {
        const data = await getCommentaires()
        setTemoignages(Array.isArray(data) ? data : [])
      } catch (err) {
        console.error('Erreur chargement témoignages', err)
        setTemoignages([])
      } finally {
        setLoading(false)
      }
    }
    loadComments()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  }




    return (
        <section className="w-full py-16 px-5 bg-linear-to-b from-[#f5f5f5] to-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#002E6D] mb-4">Témoignages</h2>
                    <p className="text-gray-600 text-lg">
                        Découvrez ce que nos anciens étudiants pensent de leur expérience à l'IFTPL
                    </p>
                </div>

                <div className="slider-container">
                    {loading ? (
                        <p className="text-center text-gray-500 py-12">Chargement des témoignages...</p>
                    ) : temoignages.length === 0 ? (
                        <p className="text-center text-gray-500 py-12">Aucun témoignage disponible.</p>
                    ) : (
                        <Slider {...settings}>
                            {temoignages.map((el, index) => (
                                <div key={el.id ?? index} className="px-4">
                                    <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#D00D2D]">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-[#D00D2D] text-[#D00D2D]" />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">"{el.message}"</p>
                                        <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                                            <img
                                                className="w-16 h-16 rounded-full object-cover border-2 border-[#D00D2D]"
                                                src={el.photo}
                                                alt={el.prenom || 'Témoignage'}
                                            />
                                            <div>
                                                <h4 className="font-bold text-[#002E6D] text-lg">{el.prenom} {el.nom?.toUpperCase()}</h4>
                                                <p className="text-sm text-left text-gray-600">{el.nationnalite}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>
            </div>
        </section>
    );
}
