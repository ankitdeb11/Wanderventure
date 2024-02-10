import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-gray-100 py-16'>
            <div className='max-w-[1240px] mx-auto flex flex-col px-4 '>
                <div className='sm:flex text-center justify-between items-center'>
                    <h1>Wanderventure</h1>

                    {/* small breakpoint is at 640px  */}
                    <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                        <FaFacebook className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                        <FaPinterest className='icon' />
                        <FaInstagram className='icon' />
                    </div>
                </div>

                <div className='flex justify-between '>
                    <ul className='lg:flex'>
                        <li>About</li>
                        <li>Partnerships</li>
                        <li>Careers</li>
                        <li>Newsroom</li>
                        <li>Promotions</li>
                    </ul>


                    <ul className='text-right lg:flex'>
                        <li className='border-b'>Home</li>
                        <li className='border-b'>Destinations</li>
                        <li className='border-b'>Travel</li>
                        <li className='border-b'>View</li>
                        <li className='border-b'>Bookings</li>

                    </ul>
                </div>




            </div>

        </div>
    )
}

export default Footer