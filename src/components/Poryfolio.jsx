import React from 'react';
import port1 from '../assest/port 1.jpg'
import port2 from '../assest/port 2.jpg'
import port3 from '../assest/port 3.jpg'
import port4 from '../assest/port 4.png'
import port5 from '../assest/port 5.jpg'
import port6 from '../assest/port 6.png'

const Poryfolio = () => {
    const ports =[
        {
            id:1,
            src:port1,
            but1:"Demo",
            but2:"Code",
            http:'https://saqibraheem.github.io/QuizApp/'
        },
        {
            id:2,
            src:port2,
            but1:"Demo",
            but2:"Code"
        },
        {
            id:3,
            src:port3,
            but1:"Demo",
            but2:"Code"
        },
        {
            id:4,
            src:port4,
            but1:"Demo",
            but2:"Code"
        },
        {
            id:5,
            src:port3,
            but1:"Demo",
            but2:"Code"
        },
        {
            id:6,
            src:port6,
            but1:"Demo",
            but2:"Code"
        },
        {
            id:7,
            src:port5,
            but1:"Demo",
            but2:"Code"
        },
    ]
  const demo = (http)=>{
              console.log(http);
              window.location.href=http
    };  
    return (
        <div 
        name="portfolio" 
        className='bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>check out some of my work right here</p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
                    {ports.map(({id,src,but1,but2,http})=>(
                    <div className=' shadow-md shadow-gray-600 rounded-lg'>

                        <img key={id} src={src} alt="" className=' mx-auto rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify'>
                            <button onClick={()=> demo(http)}   className='w-1/2 px-6 m-4   hover:scale-105 hover:text-yellow-300  duration-200'>{but1}</button>
                            <button className='w-1/2 px-6 m-4  hover:scale-105 hover:text-yellow-300  duration-200'>{but2}</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>            
        </div>
    );
}

export default Poryfolio;
