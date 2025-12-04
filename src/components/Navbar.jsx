import React from 'react'
import logo from "../../src/assets/react.svg"
export default function Navbar() {
    return (
        <div>
            <nav className='flex w-full bg-blue-950 h-20 items-center justify-evenly px-10'>
                <img src={logo} alt="logo" />
                <ul className='flex gap-6'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Login</li>
                </ul>
            </nav>
        </div>
    )
}
