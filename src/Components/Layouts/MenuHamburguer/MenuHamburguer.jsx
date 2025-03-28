import React, { useState } from 'react'
import { PiHamburger } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

export const MenuHamburguer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className='relativa'>
            <PiHamburger className='w-16 h-16 cursor-pointer lg:hidden p-3' onClick={toggleMenu}/>
            <div className={`fixed top-0 right-0 h-full w-64 bg-fuchsia-500 opacity-90 shadow-lg transform 
            ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-50`}>

                <div className='flex justify-end p-4'>
                    <IoCloseOutline className='w-16 h-16 cursor-pointer text-white' onClick={toggleMenu} />

                </div>

                <ul className='text-white flex flex-col items-center justify-center space-y-6 mt-10 '>
                    <li><NavLink to="/profile" className="text-2xl">Perfil</NavLink></li>
                    <li><NavLink to="/studies" className="text-2xl">Estudios</NavLink></li>
                    <li><NavLink to="/experience" className="text-2xl">Experiencia</NavLink></li>
                </ul>
            </div>
            {isOpen && (
                <div className='fixed inset-0 bg-black opacity-50 z-40'></div>
            )}
        </div>
    )
}
