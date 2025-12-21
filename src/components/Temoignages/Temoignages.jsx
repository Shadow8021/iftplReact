import { infos } from './infos'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import Slider from "react-slick";



export default function Temoignages() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="max-full mx-auto py-10 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-center mb-6 text-[#D00D2D]">Témoignages</h2>

            {/* slide */}
            <div className="h-[250px] w-2xl block items-center ">
                <Slider {...settings}>
                    {infos.map((el, index) => {
                        return (
                            <div key={index} className="w-[100px]">
                                <div
                                    className="w-full sm:w-[550px] border border-blue-600 rounded-2xl bg-[#002E6D] flex h-50 items-center justify-center gap-3 px-2 text-center shadow-2xl mx-auto mt-3">
                                    <div className="relative flex items-center w-30 h-20 rounded-full lg:w-20">
                                        <img className="w-30 h-20 rounded-full absolute left-0 lg:w-20" src={el.photo} alt="profil" />
                                        <span className="absolute bottom-0 w-5 h-5 rounded-full right-2 block">{el.nationnalite}</span>
                                    </div>
                                    <div>
                                        <h3 className="mb-4 font-semibold text-xl text-[#D00D2D]">—{el.nom + " " + el.prenom}</h3>
                                        <p className="text-sm italic max-w-100 text-white">{el.message}
                                        </p>
                                    </div>
                                </div>
                            </div>)
                    }
                    )}
                </Slider>

            </div>
        </div >
    )
}