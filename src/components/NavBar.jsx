import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
// import Link from 'react-scrocld'
const NavBar = () => {
    const [Nav, setNav] = useState(false)
    const Link = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'portfolio',
        },
        {
            id: 4,
            link: 'experience',
        },
        {
            id: 5,
            link: 'Contact',
        },
    ]
    return (
        <div className='  flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
            <div>
                <h1 className='text-5xl font-signature ml-2 cursor-pointer  hover:scale-105 hover:text-yellow-300  duration-200'>Saqib Raheem</h1>
            </div>
            <ul className='hidden md:flex'>

                {Link.map((link => (
                    <li key={link.id}
                        className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-yellow-300 duration-200'>
                        {link.link}
                    </li>

                )))}
            </ul>
            <div
                onClick={() => setNav(!Nav)}
                className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
                {Nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {Nav && (
                <ul className='flex flex-col justify-center items-center 
                absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black
                to-gray-800 text-gray-400' >
                    {Link.map((link => (
                        <li key={link.id}
                            className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            {link.link}
                        </li>
                    )))}
                </ul>
            )}

        </div>
    );
}

export default NavBar;
