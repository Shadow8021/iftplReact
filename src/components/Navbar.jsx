import menu from "../../public/icones/mymenu.svg"
import logo from "../../public/logo1.svg"
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div className="sticky top-0 left-0 z-20">
            <nav className='flex w-full bg-[#002E6D] text-white h-18 items-center justify-between px-3 lg:px-20 '>
                <img className="h-15" src={logo} alt="logo" />
                <ul className='gap-6 hidden font-bold lg:flex sm:flex'>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><Link to="/">Home</Link></li>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><Link to="/about">A propos</Link></li>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><Link to="/formation">Formations
                    </Link></li>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><Link to="/actualite">Actualités</Link></li>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><Link to="/galerie">Galerie
                    </Link></li>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><Link to="/contact">Contact</Link></li>

                </ul>
                <img src={menu} className="lg:hidden sm:hidden" alt="menu" />
            </nav>
        </div>
    )
}
