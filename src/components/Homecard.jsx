import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Homecard = () => {
    return (
        <div className='w-full h-full flex gap-20 p-10 mt-10'>
            <div className='w-[30%] h-[33.5rem] rounded-lg bg-card1 flex flex-col items-center justify-start pt-5 gap-y-8 '>
                <h1 className='text-white font-mono'>BEST DEALS</h1>
                <h1 className='text-white font-sans font-bold text-4xl '>Sale of the month</h1>
                <div className=' text-xl font-extrabold gap-5 flex'>
                    <div className='flex flex-col items-center justify-center'><h1 className='text-white font-mono'>00</h1><h1 className='text-white font-mono'>DAYS</h1></div><span className='text-4xl text-white'> : </span>
                    <div className='flex flex-col items-center justify-center'><h1 className='text-white font-mono'>02</h1><h1 className='text-white font-mono'>HOURS</h1></div><span className='text-4xl text-white'> : </span>
                    <div className='flex flex-col items-center justify-center'><h1 className='text-white font-mono'>18</h1><h1 className='text-white font-mono'>MINS</h1></div><span className='text-4xl text-white'> : </span>
                    <div className='flex flex-col items-center justify-center'><h1 className='text-white font-mono'>46</h1><h1 className='text-white font-mono'>SECS</h1></div>
                </div>

                <button className='w-56 p-3 text-[#00B207] text-xl font-sans bg-[#fff] rounded-full flex items-center justify-center gap-x-4'>Shop Now <FaLongArrowAltRight className='fill-[#00B207]' /></button>
            </div>
            <div className='w-[30%] h-[33.5rem] rounded-lg bg-card2 flex flex-col items-center justify-start pt-5 gap-y-8 '>
                <h1 className='text-lg text-white font-sans'>85% FAT FREE</h1>
                <h1 className='text-white text-4xl'>Low-Fat Meat</h1>
                <h1 className='text-white font-sans'>Started at <span className='text-[#FF8A00]'>$79.99</span></h1>
                <button className='w-56 p-3 text-[#00B207] text-xl font-sans bg-[#fff] rounded-full flex items-center justify-center gap-x-4'>Shop Now <FaLongArrowAltRight className='fill-[#00B207]' /></button>
            </div>
            <div className='w-[30%] h-[33.5rem] rounded-lg bg-card3 flex flex-col items-center justify-start pt-5 gap-y-8 '>
                <h1 className='font-sans'>SUMMER SALE</h1>
                <h1 className='text-4xl'>100% Fresh Fruit</h1>
                <h1 className='font-sans text-lg'>Up to <span className='bg-gray-900 p-2 rounded-md text-[#FCC900]'>64% OFF</span></h1>

                <button className='w-56 p-3 text-[#00B207] text-xl font-sans bg-[#fff] rounded-full flex items-center justify-center gap-x-4'>Shop Now <FaLongArrowAltRight className='fill-[#00B207]' /></button>
            </div>
        </div>
    )
}

export default Homecard
