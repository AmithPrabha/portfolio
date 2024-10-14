import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='px-6 md:px-0 mt-12 text-white/70 py-8 container max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>
                <a href="#" className="hover:text-gray-300">Amith Prabha</a>
            </h1>
            <div className='flex space-x-6 mt-4'>
                <a href='https://www.linkedin.com/in/amith-prabha-b63950200/' className='hover:text-gray-300' target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>

                <a href='https://x.com/amith_prabha' className='hover:text-gray-300' target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} />
                </a>

                <a href='https://www.instagram.com/amith_prabha/' className='hover:text-gray-300' target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} />
                </a>

                <a href='https://www.facebook.com/amithprabhaz' className='hover:text-gray-300' target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} />
                </a>
            </div>
        </div>
    );
}

export default Footer;