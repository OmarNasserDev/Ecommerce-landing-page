import React, { useEffect } from 'react'
import { FaShuttleVan } from "react-icons/fa";
import { PiHeadphonesLight } from "react-icons/pi";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaBox } from "react-icons/fa6";

import Mainslides from '../components/Mainslides';
import Card from '../components/Homecard';
import Category from '../components/Category';
import Products from '../components/Products';
import Team from '../components/Team';
import Clients from '../components/Clients';
import Logo from '../components/Logo.jsx';
import Footer from '../components/Footer.jsx';

import PopupSletter from '../components/Newsletter.jsx'
const Home = () => {

    return (
        <div className='container w-full h-[85vh] relative'>
            <PopupSletter />

            <Mainslides />
            <div className='mt-auto gap-10 w-full h-[15vh] px-10 flex items-center border-b-2 border-gray-400 '>
                <div className='flex justify-center items-center gap-3 h-full w-[25%] hover:border-b-[5px] group hover:border-[#2f862f] duration-[0.3s] '>
                    <div className='bg-gray-200 p-12 rounded-full relative w-14 h-14 group-hover:bg-[#00B207]'>
                        <FaShuttleVan className=' w-14 h-8 fill-[#00B207] group-hover:fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' />
                    </div>
                    <div className=''>
                        <h1 className='text-xl'>Free Shipping</h1>
                        <span className='text-gray-400 font-serif'>Free shipping with discount</span>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3 h-full w-[25%] hover:border-b-[5px] group hover:border-[#2f862f] duration-[0.3s]'>
                    <div className='bg-gray-200 p-12 rounded-full relative h-14 w-14 group-hover:bg-[#00B207]'>
                        <PiHeadphonesLight className=' w-14 h-8 fill-[#00B207] group-hover:fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' />
                    </div>
                    <div className=''>
                        <h1 className='text-xl'>Great Support 24/7</h1>
                        <span className='text-gray-400 font-serif'>instant access to Contact</span>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3 h-full w-[25%] hover:border-b-[5px] group hover:border-[#2f862f] duration-[0.3s]'>
                    <div className='bg-gray-200 p-12 rounded-full relative group-hover:bg-[#00B207]'>
                        <RiShoppingBagLine className=' w-14 h-8 fill-[#00B207] group-hover:fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />

                    </div>
                    <div className=''>
                        <h1 className='text-xl'>100% Secure Payment</h1>
                        <span className='text-gray-400 font-serif'>We ensure your money is save</span>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3 h-full w-[25%] hover:border-b-[5px] group hover:border-[#2f862f] duration-[0.3s]'>
                    <div className='bg-gray-200 p-12 rounded-full relative group-hover:bg-[#00B207]'>
                        <FaBox className=' w-14 h-8 fill-[#00B207] group-hover:fill-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                    </div>
                    <div className=''>
                        <h1 className='text-xl'>Money-Back Guarantee</h1>
                        <span className='text-gray-400 font-serif'>30 days money-back</span>
                    </div>
                </div>
            </div>
            <Card />
            <Category />
            <Products />
            <Team />
            <Clients />
            <Logo />
            <Footer />
        </div>
    )
}

export default Home
