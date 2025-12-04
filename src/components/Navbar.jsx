import menu from "../../public/icones/mymenu.svg"
import logo from "../../public/logo1.svg"
export default function Navbar() {
    return (
        <div>
            <nav className='flex w-full bg-[#002E6D] text-white h-18 items-center justify-between px-3 lg:px-20'>
                <img className="h-15" src={logo} alt="logo" />
                <ul className='gap-6 hidden font-bold lg:flex sm:flex'>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><a href="#">Home</a></li>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><a href="#">A propos</a></li>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><a href="#">Formations
                    </a></li>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><a href="#">Actualités</a></li>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><a href="#">Galerie
                    </a></li>
                    <li className="hover:text-[#D00D2D] transition ease-in pointer"><a href="#">Contact</a></li>

                </ul>
                <img src={menu} className="lg:hidden sm:hidden" alt="menu" />
            </nav>
        </div>
    )
}
