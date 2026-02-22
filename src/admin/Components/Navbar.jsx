import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    let items = {
        name: 'Activity',
        path: '/',
        name: 'Students',
        path: '/',
        name: 'Classs',
        path: '/',
        name: 'Newsletter',
        path: '/',
        name: 'Image',
        path: '/'
    }
    return (
        <div className='flex bg-amber-300'>
            <div className='flex'> {items.map((el, index) => (
                <NavLink to={items.path}>{items.name}</NavLink >
            )

            )}
            </div>
        </div>
    )
}
