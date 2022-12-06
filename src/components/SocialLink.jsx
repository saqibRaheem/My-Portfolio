import React from 'react';
import {FaGithub,FaLinkedin,FaFacebook} from 'react-icons/fa'
const SocialLink = () => {
   
    const Links = [
        {
            id:1,
            child:(
                <> Github <FaGithub size={30}/> </>
            ),
            href: 'https://github.com',
            style:'rounded-tr-md',
        },
        {
            id:2,
            child:(
                <> Linkdin <FaLinkedin size={30}/> </>
            ),
            href: 'https://linkdin.com',
         
        },
        {
            id:3,
            child:(
                <> Facebook <FaFacebook size={30}/> </>
            ),
            href: 'https://facebook.com',
            style:'rounded-br-md',
        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
            {Links.map(({id,child,href,style})=>(

                <li key={id} 
                className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-yellow-300 to-yellow-600'
                 + " " + style}>
                    <a 
                    href={href} 
                    target="_blank" 
                    className='flex justify-between items-center w-full text-black'>
                     {child} 
                     </a>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default SocialLink;
