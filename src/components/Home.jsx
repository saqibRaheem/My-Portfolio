import React from 'react';
import Img from '../assest/IMg.jpg'
import { Typewriter } from 'react-simple-typewriter'

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
const Home = () => {
    return (
        <div name='home'
        className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-3xl sm:text-7xl font-bold  text-white pr-7'> I'am a  </h2> <br />
                    <h2 className='text-1xl sm:text-7xl font-bold  text-yellow-300'><Typewriter
                            words={ ["Full Stack Developer" ,"Website Developer"]}
                            loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000} />
                    </h2>
                        <p className='text-gray-400 py-4 max-w-md'>
                   
                        I  have 5 years of r=experience building and desgining software.
                        currently, I love to work on web application using
                        technologies like
                        React, tailwind ReactNative
                    </p>
                    <div>
                        <button 
                        className='group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-300 to-yellow-500'
                        > portfolio <span className='group-hover:rotate-90 duration-300'> <MdOutlineKeyboardArrowRight size={25} /> </span> </button>
                    </div>
                </div>
                <div>
                    <img src={Img} 
                    alt="my profile"
                    className='rounded-2xl mx-auto w-2/3 md:w-96' />
                </div>
            </div>

        </div>
    );
}

export default Home;
