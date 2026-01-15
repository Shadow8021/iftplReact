import { infos } from "./infos"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
export default function Temoignages() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container w-full gap-4 max-w-[80%] mx-auto px-2">
            <h4 className="text-center text-2xl font-bold text-[#D00D2D]">Témoignages</h4>
            <Slider {...settings}>
                {
                    infos.map((el, index) => {
                        return (
                            <div key={index} className="w-12 bg-[#002E6D]  h-50 px-2 py-5 mx-auto rounded-xl">
                                <div className="flex items-center justify-center w-full h-full gap-1 px-3 my-auto md:justify-evently md:gap-6">
                                    <div className=" w-70 flex items-center justify-center rounded-full obsolute md:w-25 ">
                                        <img className="rounded-full relative" src={el.photo} alt="profil" />
                                        <span className="relative right-3 inline-block top-6">{el.nationnalite}</span>
                                    </div>
                                    <div className="flex flex-col justify-center gap-4 max-w-70 h-40 py-5 px-2 md:gap-2">
                                        <h5 className="text-lg font-bold text-white md:text-xl">{el.prenom + " " + el.nom.toUpperCase()}</h5>
                                        <p className="text-[11px] mx-h-30 text-white md:text-[15px]">{el.message} </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

