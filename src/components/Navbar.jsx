import menu from "../../public/icones/mymenu.svg"
import logo from "../../public/logo1.svg"
import { NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <div className="sticky top-0 left-0 z-20">
            <nav className='flex w-full bg-[#002E6D] text-white h-18 items-center justify-between px-3 lg:px-20 '>
                <NavLink to="/"><img className="h-15" src={logo} alt="logo" /></NavLink>
                <ul className='gap-6 hidden font-bold lg:flex sm:flex'>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><NavLink to="/">Home</NavLink></li>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><NavLink to="/about">A propos</NavLink></li>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer" ><NavLink to="/formation">Formations
                    </NavLink></li>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><NavLink to="/actualite">Actualités</NavLink></li>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><NavLink to="/galerie">Galerie
                    </NavLink></li>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><NavLink to="/contact">Contact</NavLink></li>

                </ul>
                <img src={menu} className="lg:hidden sm:hidden" alt="menu" />
            </nav>
        </div>
    )
}
