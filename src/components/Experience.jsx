import React from 'react'
import html from '../assest/html.png'
import css from '../assest/css.png'
import boot from '../assest/boot.png'
import java from '../assest/java.png'
import tailwind from '../assest/tailw.png'
import react from '../assest/react.png'

export default function Experience() {
    const tech =[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:java,
            title:'JAVA SCRIPT',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:boot,
            title:'Bootstrap',
            style:'shadow-purple-500'
        },
        {
            id:5,
            src:react,
            title:'REACT',
            style:'shadow-blue-600'
        },
        {
            id:6,
            src:tailwind,
            title:'TAILWIND',
            style:'shadow-blue-500'
        },
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with </p>
            </div>

            <div  className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                   {
                    tech.map(({id,src,title,style})=>(

                <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg ' + ' '+ style}>
                    <img src={src} width={200} className="w-20 mx-auto" alt="" />
                    <p>{title}</p>
                </div>
                    ))
                   }
            </div>
        </div>
    </div>
  )
}
