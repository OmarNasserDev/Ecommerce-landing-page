import React from 'react'
import main from '../assets/home_main.png'
import arrow from '../assets/arrow.png'
import fruits from '../assets/fruits.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Mainslides = () => {
    return (
        <Swiper pagination={true} modules={{ Pagination }} autoplay={{ "delay": 500, "disableOnInteraction": false }} navigation={true} className='h-[95vh] flex'>
            <SwiperSlide>

                <div className='absolute bottom-[70%] left-[5%] '>
                    <h1 className='text-white text-5xl text'>Fresh & Healthy</h1>
                    <h1 className='text-white text-5xl text'>Organic Food</h1>
                </div>
                <div className='absolute bottom-[55%] left-[5%] border-l-4 border-[#00B207] px-2 '>
                    <h1 className='text-gray-400 text-3xl font-serif'>SALE UP TO</h1>
                    <h1 className='text-gray-400 text-3xl font-serif'><span className='text-white'>48%</span> OFF</h1>
                </div>
                <div className='absolute bottom-[40%] left-[5%] '>
                    <button className='w-56 p-3 text-white text-xl font-sans bg-[#00B207] rounded-full hover:bg-[#2f862f] flex items-center justify-center gap-x-4'>Shop now <img src={arrow} alt="" /></button>
                </div>

                <img src={main} alt="" className='w-[95%] h-[75%] object-fill mx-auto ' />
            </SwiperSlide>
            <SwiperSlide className='h-[80%] my-auto bg-green-50 '>
                <div>
                    <div className='absolute bottom-[60%] text-left left-[5%]'>
                        <h1 className='text-lg'>WELCOME TO SHOPERY</h1>
                        <h1 className='text-7xl'>Fresh & Healthy</h1>
                        <h1 className='text-7xl'>Organic Food</h1>
                    </div>
                    <div className='absolute bottom-[45%] left-[5%] text-left '>
                        <h1 className='text-3xl font-serif'>SALE UP TO <span className='text-[#FF8A00]'>30% OFF</span> </h1>
                        <h1 className='  font-serif'>Free shopping on al your order. we deliver,you enjoy</h1>
                    </div>
                    <div className='absolute bottom-[30%] left-[5%] '>
                        <button className='w-56 p-3 text-white text-xl font-sans bg-[#00B207] rounded-full hover:bg-[#2f862f] flex items-center justify-center gap-x-4'>Shop now <img src={arrow} alt="" /></button>
                    </div>
                </div>

                <img src={fruits} alt="" className='absolute right-0 w-[50%] h-[80%] object-fill mx-auto ' />
            </SwiperSlide>
        </Swiper>
    )
}

export default Mainslides
