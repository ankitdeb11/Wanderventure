import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';


const sliderData = [

    {
        url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
    },

    {
        url: 'https://images.unsplash.com/photo-1534418984967-a2b9c7f3f0d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGluZGlhbiUyMHRvdXJzaW0lMjA0ayUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
    },

    {
        url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },

];

const Carousel = () => {


    const [slide, setSlide] = useState(0);

    const length = sliderData.length;

    // console.log(length);


    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1)
    };
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    };

    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
            <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8 ' />
            <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8' />

            <div style={{ height: '85vh', width: '100vw', overflow: 'hidden' }}>
                {sliderData.map((item, index) => (
                    <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                        {index === slide && (<img className='w-full rounded-lg' src={item.url} alt='/' />)}
                    </div>

                ))}

            </div>


        </div>
    )
}

export default Carousel



{/* <img className='w-full rounded-lg' src={item.url} alt='/' /> */ }