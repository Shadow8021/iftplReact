import menu from "../../public/icones/mymenu.svg";
import logo from "../../public/logo1.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const items = [
        {
        nom :"Home",
        path:"/"
    },{
        nom:"A propos",
        path:""
    },{
        nom:"Formations",
        path:"/formation"
    },{
        nom:"Galerie",
        path:"/galerie"
    },{
        nom:"Contact",
        path:"/contact"
    }
]
    return (
        <div className="sticky top-0 left-0 z-20 max-w-full">
            <nav className='flex w-full bg-[#002E6D] text-white h-18 items-center justify-between px-3 lg:px-20 '>
                <NavLink to="/"><img className="h-15" src={logo} alt="logo" /></NavLink>
                <ul className='gap-6 flex flex-row font-bold md:flex'>
                    {items.map((el,index)=>(
                        <li key={index} className="hover:text-[#D00D2D] transition ease-in pointer"><NavLink to={el.path}>{el.nom}</NavLink></li>
                    ))}
                </ul>
                <img src={menu} className="lg:hidden sm:hidden" alt="menu" />
            </nav>
        </div>
    )
}
