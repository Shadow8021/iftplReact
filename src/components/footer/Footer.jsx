import { Link } from "react-router-dom";
import { Contacts } from "../contacts/Contacts";
export default function Footer() {
    return (
        <div>
            <Contacts />
            <section className="w-full flex flex-col h-auto pt-5 px-5 bg-[#002E6D] border-t border-red-600 lg:px-5 ">
                <div className="flex flex-col">
                    <div className="w-full text-center flex flex-col gap-3 mb-5 items-center justify-evenly rounded-xl py-2 lg:flex-row">

                        {/* Formations */}
                        <div className="lg:text-left min-w-full px-4 rounded-2xl border border-blue-600 font-bold text-sm py-1 lg:min-w-70">
                            <p className="text-2xl font-bold text-[#D00D2D] mb-2">Formations</p>
                            <ul className="text-[10px] flex flex-col gap-1 lg:text-[15px] lg:gap-0 ">
                                <li className="py-1 text-[#D00D2D]">
                                    <a href="#">Bâtiment et Travaux Publics</a>
                                </li>
                                <li className="py-1 text-[#D00D2D]">
                                    <a href="#">Maintenance Industriels</a>
                                </li>
                                <li className="py-1 text-[#D00D2D]">
                                    <a href="#">Production Cultures Industrielles </a>
                                </li>
                                <li className="py-1 text-[#D00D2D]">
                                    <a href="#">Autres...</a>
                                </li>
                            </ul>
                        </div>

                        {/* Autres informations */}
                        <div className="w-full px-2 rounded-2xl border border-blue-600 font-bold text-sm py-1 lg:min-w-80 lg:text-center">
                            <p className="text-2xl font-bold text-[#D00D2D] mb-2">Autres informations</p>
                            <ul className="text-[10px] flex flex-col gap-1 lg:text-[15px] lg:gap-0">
                                <li className="py-1 text-[#D00D2D]">
                                    <a href="#">Conditions d'inscription</a>
                                </li>
                                <li className="py-1 text-[#D00D2D]">
                                    <a href="#">Résultats du concours passé</a>
                                </li>
                                <li className="py-1 text-[#D00D2D]">
                                    <a href="#">Résultats du BAC 2025</a>
                                </li>
                                <li className="py-1 text-[#D00D2D]">
                                    <a href="#">Autres...</a>
                                </li>
                            </ul>
                        </div>

                        {/* Liens rapides */}
                        <div className="px-4 min-w-full w-80 rounded-2xl border border-blue-600 font-bold text-sm py-1 lg:text-right lg:min-w-70">
                            <p className="text-2xl font-bold text-[#D00D2D] mb-2">Liens rapides</p>
                            <ul className="text-[10px] flex flex-col gap-1 lg:text-[15px] lg:gap-0">
                                <li className="py-1 text-[#D00D2D]">
                                    <Link to="/galerie">Galerie</Link>
                                </li>
                                <li className="py-1 text-[#D00D2D]">
                                    <Link to="/about">À propos</Link>
                                </li>
                                <li className="py-1 text-[#D00D2D]">
                                    <Link to="/contact">Contactez-nous</Link>
                                </li>
                                <li className="py-1 text-[#D00D2D]">
                                    <a href="#">Autres...</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer bottom */}
                    <section className="flex items-center rounded-t-2xl justify-center bg-[#02214d] h-20">
                        <ul>
                            <li>
                                <a className="font-extralight text-[11px] lg:text-[1rem]" href="#">
                                    © 2026 IFTPL LOUDIMA | Tous les droits sont réservés.
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        </div>
    );
}
