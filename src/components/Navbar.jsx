import logo from "../../public/logo1.svg";
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
            path: ""
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
                    <div className="text-xl font-bold">
                        <NavLink to="/"><img className="h-15" src={logo} alt="logo" /></NavLink>
                    </div>

                    {/* Menu desktop */}
                    <ul className="hidden md:flex space-x-8">
                        {items.map((el, index) => (
                            <li key={index} className="hover:text-[#D00D2D] transition ease-in pointer"><NavLink to={el.path}>{el.nom}</NavLink></li>
                        ))}
                    </ul>

                    {/* Burger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden"
                        aria-label="menu"
                    >
                        {open ? <X size={40} className="lg:hidden sm:hidden" color="white" strokeWidth={2.25} />
                            : <Menu size={40} className="lg:hidden sm:hidden" color="white" strokeWidth={2.25} />}
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            <div className={`md:hidden transition-all duration-300 ${open ? "block" : "hidden"}`}>
                <ul className="px-4 pb-4 space-y-3 bg-[#1907521b] ">
                    {items.map((el, index) => (

                        <li key={index} className="hover:text-[#D00D2D] transition ease-in pointer text-right"><NavLink onClick={() => setOpen(!open)} to={el.path}>{el.nom}</NavLink></li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}


