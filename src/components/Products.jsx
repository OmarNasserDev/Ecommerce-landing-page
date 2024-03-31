import React from 'react'
import { useRef } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa"; //<FaCartArrowDown / >
import { GoStarFill } from "react-icons/go"; //filled star <GoStarFill />
import { FaStarHalfStroke } from "react-icons/fa6"; //semi star <FaStarHalfStroke />
import { FaRegEye } from "react-icons/fa"; //eye <FaRegEye />
import { CiHeart } from "react-icons/ci"; //heart <CiHeart />
import { FaPlay } from "react-icons/fa";
import cabbage from '../assets/cahnise.png'
import lettuce from '../assets/lettuce.png'
import chili from '../assets/chili.png'
import capsicum from '../assets/capsicum.png'
import video from '../assets/videos/video.mp4'

import Productclassify from '../components/Productclassify'


const Products = () => {
    const vid = useRef()
    const videocontent = useRef()
    const handlevid = () => {
        vid.current.play()
        videocontent.current.style.display = 'none'
    }

    return (
        <div className='w-full h-[100vh] flex flex-col items-center justify-start  mt-10'>
            <h1 className='text-[#00B207] font-serif text-xl'>PRODUCTS</h1>
            <h1 className='text-5xl mt-5'>Our Featured Products</h1>
            <div className='w-full h-full flex items-center justify-center p-5 gap-5 flex-wrap'>
                <div className='w-[18.7%] h-[25rem] bg-repeat-round bg-card4 flex flex-col items-center justify-start pt-5 gap-5 '>
                    <h1 className='text-sm'>SUMMER SALE</h1>
                    <h1 className='text-[#00B207] text-2xl'>75% off</h1>
                    <button className='w-[75%] bg-white p-2 rounded-full text-[#00B207] flex items-center justify-center gap-3'>Shop Now <FaLongArrowAltRight fill='green' /> </button>
                </div>
                <div className='w-[18.7%] h-[25rem] border-2 flex flex-col items-center justify-start pt-5 gap-5 group hover:border-green-700 hover:shadow-md hover:shadow-emerald-500 relative'>
                    <div className='w-full h-48'>
                        <div className='absolute right-3 top-2 hidden group-hover:block'>
                            <div className='w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2'>
                                <CiHeart fill='black' size={20} />
                            </div>
                            <div className='w-10 h-10 rounded-full border-2 flex items-center justify-center'>
                                <FaRegEye fill='black' size={20} />
                            </div>
                        </div>
                        <img src={cabbage} alt="" className='w-full h-full object-contain' />
                    </div>
                    <div className='w-full h-full px-2 flex items-center justify-center gap-8'>
                        <div>
                            <h1 className='text-gray-500'>Chanise Cabbage</h1>
                            <h1>$14.99</h1>
                            <h1 className='flex'> <GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><FaStarHalfStroke fill='orange' /> </h1>
                        </div>
                        <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center'>
                            <FaCartArrowDown />
                        </div>
                    </div>
                </div>
                <div className='w-[18.7%] h-[25rem] border-2 flex flex-col items-center justify-start pt-5 gap-5 group hover:border-green-700 hover:shadow-md hover:shadow-emerald-500 relative'>
                    <div className='w-full h-48'>
                        <div className='absolute right-3 top-2 hidden group-hover:block'>
                            <div className='w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2'>
                                <CiHeart fill='black' size={20} />
                            </div>
                            <div className='w-10 h-10 rounded-full border-2 flex items-center justify-center'>
                                <FaRegEye fill='black' size={20} />
                            </div>
                        </div>
                        <img src={lettuce} alt="" className='w-full h-full object-contain' />
                    </div>
                    <div className='w-full h-full px-2 flex items-center justify-center gap-8'>
                        <div>
                            <h1 className='text-gray-500'>Chanise Cabbage</h1>
                            <h1>$14.99</h1>
                            <h1 className='flex'> <GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><FaStarHalfStroke fill='orange' /> </h1>
                        </div>
                        <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center'>
                            <FaCartArrowDown />
                        </div>
                    </div>
                </div>
                <div className='w-[18.7%] h-[25rem] border-2 flex flex-col items-center justify-start pt-5 gap-5 group hover:border-green-700 hover:shadow-md hover:shadow-emerald-500 relative'>
                    <div className='w-full h-48'>
                        <div className='absolute right-3 top-2 hidden group-hover:block'>
                            <div className='w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2'>
                                <CiHeart fill='black' size={20} />
                            </div>
                            <div className='w-10 h-10 rounded-full border-2 flex items-center justify-center'>
                                <FaRegEye fill='black' size={20} />
                            </div>
                        </div>
                        <img src={chili} alt="" className='w-full h-full object-contain' />
                    </div>
                    <div className='w-full h-full px-2 flex items-center justify-center gap-8'>
                        <div>
                            <h1 className='text-gray-500'>Chanise Cabbage</h1>
                            <h1>$14.99</h1>
                            <h1 className='flex'> <GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><FaStarHalfStroke fill='orange' /> </h1>
                        </div>
                        <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center'>
                            <FaCartArrowDown />
                        </div>
                    </div>
                </div>
                <div className='w-[18.7%] h-[25rem] border-2 flex flex-col items-center justify-start pt-5 gap-5 group hover:border-green-700 hover:shadow-md hover:shadow-emerald-500 relative'>
                    <div className='w-full h-48'>
                        <div className='absolute right-3 top-2 hidden group-hover:block'>
                            <div className='w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2'>
                                <CiHeart fill='black' size={20} />
                            </div>
                            <div className='w-10 h-10 rounded-full border-2 flex items-center justify-center'>
                                <FaRegEye fill='black' size={20} />
                            </div>
                        </div>
                        <img src={capsicum} alt="" className='w-full h-full object-contain' />
                    </div>
                    <div className='w-full h-full px-2 flex items-center justify-center gap-8'>
                        <div>
                            <h1 className='text-gray-500'>Chanise Cabbage</h1>
                            <h1>$14.99</h1>
                            <h1 className='flex'> <GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><FaStarHalfStroke fill='orange' /> </h1>
                        </div>
                        <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center'>
                            <FaCartArrowDown />
                        </div>
                    </div>
                </div>
            </div>
            <Productclassify />
            <div className='relative w-full h-[60vh] my-10'>
                <div className='w-full h-full flex flex-col absolute items-center justify-center z-30' ref={videocontent}>
                    <h1 className='text-5xl font-sans text-white'>We're the Best Organic</h1>
                    <h1 className='text-5xl font-sans text-white'>Farm un the World</h1>
                    <button className='mt-4 w-28 h-28 border-2 flex items-center justify-center rounded-full' onClick={handlevid}><FaPlay fill='white' size={30} /></button>
                </div>
                <video src={video} muted autoplay loop id='vid' ref={vid} className='w-full h-full object-cover' />
            </div>

        </div>
    )
}

export default Products
