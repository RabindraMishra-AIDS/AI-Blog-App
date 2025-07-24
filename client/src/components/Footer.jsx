import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {assets, footer_data} from "../assets/assets"


const Footer = () => {
    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-green/3'>
            <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
                <div>
                    <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
                    <p className='mt-6 max-w-[410px]'>Feel Free to Contact or Add any value through opensource in this Project.</p>
                </div>
                <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
                    {footer_data.map((section,index)=>(
                        <div key={index}>
                            <h3 className='font-medium text-xl'>{section.title}</h3>
                            <ul>
                                {section.links.map((link,i)=>(
                                    <li key={i}>
<p>{link}</p>
                                    </li>
                                ))}
                            </ul>
                            </div>
                    ))}
                </div>
            </div>



            <p className='text-center bg-gray-100 w-screen -mx-6 md:-mx-16 lg:-mx-24 xl:-mx-32 py-2'>
                Copyright 2025 @Dainik Blog -
                <span className='font-medium text-xl inline-flex items-center gap-2'>
                    <span>Rabindra Mishra</span>
                    <a
                        href="https://github.com/RabindraMishra-AIDS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-700"
                    >
                        <FaGithub size={20} className="align-middle" />
                    </a>
                </span>
            </p>
        </div>
    )
}

export default Footer
