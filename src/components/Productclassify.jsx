import React from 'react'
import apple from '../assets/apple.png'
import eggplant from '../assets/eggplant.png'
import capsicum from '../assets/capsicum.png'
import tomato from '../assets/tomato.png'
import orange from '../assets/orange.png'
import lettuce from '../assets/lettuce.png'
import potatos from '../assets/potatos.png'
import corn from '../assets/corn.png'
import caulifliower from '../assets/cauliflower.png'
import { GoStarFill } from "react-icons/go"; //filled star <GoStarFill />
import { FaStarHalfStroke } from "react-icons/fa6"; //semi star <FaStarHalfStroke />
import { FaRegEye } from "react-icons/fa"; //eye <FaRegEye />
import { CiHeart } from "react-icons/ci"; //heart <CiHeart />
import { FaCartArrowDown } from "react-icons/fa"; //<FaCartArrowDown / >
import { FaLongArrowAltRight } from "react-icons/fa";

const Productclassify = () => {
    return (
        <div className='w-full h-full flex gap-5 items-center justify-center'>

            <div className='flex flex-col gap-y-3'>
                <h1>Hot Deals</h1>
                <div className='flex items-center gap-5 w-96 h-32 border-2 px-3 group hover:border-green-900 hover:shadow-lg hover:shadow-emerald-500'>
                    <div className='w-28 h-28 mt-5'>
                        <img src={apple} alt="" className='object-contain' />
                    </div>
                    <div className='group-hover:hidden'>
                        <h1 className='text-gray-500 font-sans'>Green Apple</h1>
                        <h1 className='mb-3'>$14.99 <span className='text-gray-400'>$20.99</span></h1>
                        <h1 className='flex'> <GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><FaStarHalfStroke fill='orange' /> </h1>
                    </div>
                    <div className=' hidden group-hover:flex flex-col gap-y-3'>
                        <h1 className=' font-sans text-[#00B207] text-lg'>Green Apple</h1>
                        <div className='flex gap-x-5'>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full  hover:bg-[#00B207]'>
                                <FaCartArrowDown className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <FaRegEye className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <CiHeart className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 w-96 h-32 border-2 px-3 group hover:border-green-900 hover:shadow-lg hover:shadow-emerald-500'>
                    <div className='w-28 h-28 mt-5'>
                        <img src={orange} alt="" className='object-contain' />
                    </div>
                    <div className='group-hover:hidden'>
                        <h1 className='text-gray-500 font-sans'>Infian Malta</h1>
                        <h1 className='mb-3'>$14.99 <span className='text-gray-400'>$20.99</span></h1>
                        <h1 className='flex'> <GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><FaStarHalfStroke fill='orange' /> </h1>
                    </div>

                    <div className=' hidden group-hover:flex flex-col gap-y-3'>
                        <h1 className=' font-sans text-[#00B207] text-lg'>Infian Malta</h1>
                        <div className='flex gap-x-5'>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full  hover:bg-[#00B207]'>
                                <FaCartArrowDown className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <FaRegEye className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <CiHeart className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 w-96 h-32 border-2 px-3 group hover:border-green-900 hover:shadow-lg hover:shadow-emerald-500'>
                    <div className='w-28 h-28 mt-5'>
                        <img src={lettuce} alt="" className='object-contain' />
                    </div>
                    <div className='group-hover:hidden'>
                        <h1 className='text-gray-500 font-sans'>Green Lettuce</h1>
                        <h1 className='mb-3'>$14.99 <span className='text-gray-400'>$20.99</span></h1>
                        <h1 className='flex'> <GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><FaStarHalfStroke fill='orange' /> </h1>
                    </div>

                    <div className=' hidden group-hover:flex flex-col gap-y-3'>
                        <h1 className=' font-sans text-[#00B207] text-lg'>Green Lettuce</h1>
                        <div className='flex gap-x-5'>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full  hover:bg-[#00B207]'>
                                <FaCartArrowDown className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <FaRegEye className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <CiHeart className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-3'>
                <h1>Best Seller</h1>
                <div className='flex items-center gap-5 w-96 h-32 border-2 px-3 group hover:border-green-900 hover:shadow-lg hover:shadow-emerald-500'>
                    <div className='w-28 h-28 mt-5'>
                        <img src={eggplant} alt="" className='object-contain' />
                    </div>
                    <div className='group-hover:hidden'>
                        <h1 className='text-gray-500 font-sans'>Eggplant</h1>
                        <h1 className='mb-3'>$14.99 <span className='text-gray-400'>$20.99</span></h1>
                        <h1 className='flex'> <GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><FaStarHalfStroke fill='orange' /> </h1>
                    </div>
                    <div className=' hidden group-hover:flex flex-col gap-y-3'>
                        <h1 className=' font-sans text-[#00B207] text-lg'>Eggplant</h1>
                        <div className='flex gap-x-5'>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full  hover:bg-[#00B207]'>
                                <FaCartArrowDown className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <FaRegEye className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <CiHeart className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 w-96 h-32 border-2 px-3 group hover:border-green-900 hover:shadow-lg hover:shadow-emerald-500'>
                    <div className='w-28 h-28 mt-5'>
                        <img src={capsicum} alt="" className='object-contain' />
                    </div>
                    <div className='group-hover:hidden'>
                        <h1 className='text-gray-500 font-sans'>Red Capsicum</h1>
                        <h1 className='mb-3'>$14.99 <span className='text-gray-400'>$20.99</span></h1>
                        <h1 className='flex'> <GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><FaStarHalfStroke fill='orange' /> </h1>
                    </div>

                    <div className=' hidden group-hover:flex flex-col gap-y-3'>
                        <h1 className=' font-sans text-[#00B207] text-lg'>Red Capsicum</h1>
                        <div className='flex gap-x-5'>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full  hover:bg-[#00B207]'>
                                <FaCartArrowDown className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <FaRegEye className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <CiHeart className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 w-96 h-32 border-2 px-3 group hover:border-green-900 hover:shadow-lg hover:shadow-emerald-500'>
                    <div className='w-28 h-28 mt-5'>
                        <img src={tomato} alt="" className='object-contain' />
                    </div>
                    <div className='group-hover:hidden'>
                        <h1 className='text-gray-500 font-sans'>Red Tomato</h1>
                        <h1 className='mb-3'>$14.99 <span className='text-gray-400'>$20.99</span></h1>
                        <h1 className='flex'> <GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><FaStarHalfStroke fill='orange' /> </h1>
                    </div>

                    <div className=' hidden group-hover:flex flex-col gap-y-3'>
                        <h1 className=' font-sans text-[#00B207] text-lg'>Red Tomato</h1>
                        <div className='flex gap-x-5'>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full  hover:bg-[#00B207]'>
                                <FaCartArrowDown className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <FaRegEye className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <CiHeart className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-3'>
                <h1>Top Rated</h1>
                <div className='flex items-center gap-5 w-96 h-32 border-2 px-3 group hover:border-green-900 hover:shadow-lg hover:shadow-emerald-500'>
                    <div className='w-28 h-28 mt-5'>
                        <img src={potatos} alt="" className='object-contain' />
                    </div>
                    <div className='group-hover:hidden'>
                        <h1 className='text-gray-500 font-sans'>Big Potatos</h1>
                        <h1 className='mb-3'>$14.99 <span className='text-gray-400'>$20.99</span></h1>
                        <h1 className='flex'> <GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><FaStarHalfStroke fill='orange' /> </h1>
                    </div>
                    <div className=' hidden group-hover:flex flex-col gap-y-3'>
                        <h1 className=' font-sans text-[#00B207] text-lg'>Big Potatos</h1>
                        <div className='flex gap-x-5'>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full  hover:bg-[#00B207]'>
                                <FaCartArrowDown className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <FaRegEye className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <CiHeart className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 w-96 h-32 border-2 px-3 group hover:border-green-900 hover:shadow-lg hover:shadow-emerald-500'>
                    <div className='w-28 h-28 mt-5'>
                        <img src={corn} alt="" className='object-contain' />
                    </div>
                    <div className='group-hover:hidden'>
                        <h1 className='text-gray-500 font-sans'>Corn</h1>
                        <h1 className='mb-3'>$14.99 <span className='text-gray-400'>$20.99</span></h1>
                        <h1 className='flex'> <GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><FaStarHalfStroke fill='orange' /> </h1>
                    </div>

                    <div className=' hidden group-hover:flex flex-col gap-y-3'>
                        <h1 className=' font-sans text-[#00B207] text-lg'>Corn</h1>
                        <div className='flex gap-x-5'>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full  hover:bg-[#00B207]'>
                                <FaCartArrowDown className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <FaRegEye className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <CiHeart className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 w-96 h-32 border-2 px-3 group hover:border-green-900 hover:shadow-lg hover:shadow-emerald-500'>
                    <div className='w-28 h-28 mt-5'>
                        <img src={caulifliower} alt="" className='object-contain' />
                    </div>
                    <div className='group-hover:hidden'>
                        <h1 className='text-gray-500 font-sans'>Fresh Cauliflower</h1>
                        <h1 className='mb-3'>$14.99 <span className='text-gray-400'>$20.99</span></h1>
                        <h1 className='flex'> <GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><GoStarFill fill='orange' /><FaStarHalfStroke fill='orange' /> </h1>
                    </div>

                    <div className=' hidden group-hover:flex flex-col gap-y-3'>
                        <h1 className=' font-sans text-[#00B207] text-lg'>Fresh Cauliflower</h1>
                        <div className='flex gap-x-5'>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full  hover:bg-[#00B207]'>
                                <FaCartArrowDown className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <FaRegEye className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                            <div className='group-one w-14 h-14 border-2 border-gray-300 flex items-center justify-center rounded-full group-scoped hover:bg-[#00B207]'>
                                <CiHeart className='group-one-hover:fill-white duration-75' size={'24px'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='w-full h-[26rem] bg-repeat-round mt-10 rounded-lg bg-card3 flex flex-col items-center justify-start pt-5 gap-y-8 px-8'>
                    <h1 className='font-sans'>HOT SALE</h1>
                    <h1 className='text-4xl'>Save 37% on</h1>
                    <h1 className='font-sans text-lg'>Every Order</h1>

                    <button className='w-56 p-3 text-[#00B207] text-xl font-sans bg-[#fff] rounded-full flex items-center justify-center gap-x-4'>Shop Now <FaLongArrowAltRight className='fill-[#00B207]' /></button>
                </div>
            </div>

        </div>
    )
}

export default Productclassify
