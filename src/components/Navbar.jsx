import logo from "/logo1.svg";
import { Menu, X } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { useState } from "react";


export default function Navbar() {
    const items = [
        {
            nom: "Home",
            path: "/"
        }, {
            nom: "A propos",
            path: "/About"
        }, {
            nom: "Formations",
            path: "/formation"
        }, {
            nom: "Galerie",
            path: "/galerie"
        }, {
            nom: "Contact",
            path: "/contact"
        }
    ]
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 left-0 z-20 max-w-full ">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="shrink-0">
                        <NavLink to="/"><img className="h-12 w-auto" src={logo} alt="IFTPL Logo" /></NavLink>
                    </div>

                    {/* Menu desktop */}
                    <ul className="hidden sm:flex space-x-8">
                        {items.map((el, index) => (
                            <li key={index} className="hover:text-[#D00D2D] transition ease-in pointer"><NavLink to={el.path}>{el.nom}</NavLink></li>
                        ))}
                    </ul>

                    {/* Burger */}
                    <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu principal">
                        {open ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                    </button>
                </div>
            </div>



            {/* Menu mobile */}
            {open && (
                <div className="md:hidden bg-[#002E6D] rounded-b-2xl border-t border-white border-opacity-10">
                    <div className="px-4 py-4 ">
                        <ul className="space-y-2 text-right">
                            {items.map((el, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={el.path}
                                        onClick={() => setOpen(false)}
                                        className="block text-white hover:text-[#D00D2D] transition-colors py-2"
                                    >
                                        {el.nom}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>)
}


