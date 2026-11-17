import React from 'react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import { FaHamburger } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinkClass = ({ isActive }) => `transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-110 hover:text-amber-400 ${isActive ? "text-amber-500 font-semibold" : "text-gray-300"} `

    return (
        <div>
            <header>
                <nav className='p-6 max-w-8xl mx-auto'>
                    <div className='flex mx-auto justify-between bg-gray-900 shadow-amber-200 shadow-md p-4 rounded-3xl'>
                        <div className='text-2xl font-bold transition-colors'>
                            Movie<span className='text-amber-500'>Zone</span>
                        </div>
                        {/* asztali menü */}
                        <div className='hidden min-[560px]:flex gap-8 ml-auto'>
                            <NavLink to='/' className={navLinkClass}>Kezdőlap</NavLink>
                            <NavLink to='/movies' className={navLinkClass}>Filmek</NavLink>
                            <NavLink to='/tv' className={navLinkClass}>Sorozatok</NavLink>
                            <NavLink to='/search' className={navLinkClass}>Keresés</NavLink>
                        </div>
                        {/* hamburger menü */}
                        <button onClick={() => setMenuOpen(!menuOpen)} className='min-[560px]:hidden text-3xl pl-3'>
                            {menuOpen ? <IoCloseOutline className='hover:scale-110 hover:text-amber-400'/> : <FaHamburger />}
                        </button>
                    </div>
                    {/* mobil menü sor */}
                    {menuOpen && (
                        <div className='mt-2 flex flex-col items-end gap-2 py-4 pr-2 bg-gray-900 shadow-amber-200 shadow-md rounded-3xl min-[560px]:hidden'>
                            <NavLink to='/' className={navLinkClass}>Kezdőlap</NavLink>
                            <NavLink to='/movies' className={navLinkClass}>Filmek</NavLink>
                            <NavLink to='/tv' className={navLinkClass}>Sorozatok</NavLink>
                            <NavLink to='/search' className={navLinkClass}>Keresés</NavLink>
                        </div>
                    )}
                </nav>
            </header>
            <main className='pl-2.5'>
                <Outlet />
            </main>
        </div>
    )
}
