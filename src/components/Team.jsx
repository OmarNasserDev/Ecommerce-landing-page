import React from 'react'
import grandpa from '../assets/grandpa.png'
import boy from '../assets/boy.png'
import father from '../assets/father.png'
import uncle from '../assets/uncle.png'
import { RiFacebookFill } from "react-icons/ri"; //<RiFacebookFill />
import { FaTwitter } from "react-icons/fa6";//<FaTwitter />
import { PiInstagramLogoThin } from "react-icons/pi";//<PiInstagramLogoThin />
import { FaYahoo } from "react-icons/fa";//<FaYahoo />
const Team = () => {
    return (
        <div className=' w-full h-[40vh] mt-[45rem] gap-8 flex flex-col items-center justify-start py-5 '>
            <h1 className='text-[#00B207] text-3xl font-sans'>Team</h1>
            <h1 className='text-5xl'>Our Professional Members</h1>
            <div className='flex items-center justify-center w-full h-[25rem] gap-10'>
                <div className='w-[25rem] h-full hover:shadow-2xl hover:shadow-gray-700 group'>
                    <div className='w-full h-full relative flex items-center justify-center '>
                        <img src={grandpa} alt="" className='w-full h-full object-cover' />
                        <div className='absolute items-center justify-center gap-x-5 hidden group-hover:flex'>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <RiFacebookFill fill='white' size={25} />
                            </div>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <FaTwitter fill='white' size={25} />
                            </div>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <PiInstagramLogoThin fill='white' size={30} />
                            </div>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <FaYahoo fill='white' size={25} />
                            </div>
                        </div>
                    </div>
                    <div className='mx-3 my-3 '>
                        <h1 className='text-xl font-sans font-bold mb-2'>Jenny Wilson</h1>
                        <h1 className='text-gray-500 font-sans font-bold'>Ceo & Founder</h1>
                    </div>
                </div>
                <div className='w-[25rem] h-full hover:shadow-2xl hover:shadow-gray-700'>
                    <div className='w-full h-full relative flex items-center justify-center group'>
                        <img src={boy} alt="" className='w-full h-full object-cover' />
                        <div className='absolute items-center justify-center gap-x-5 hidden group-hover:flex'>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <RiFacebookFill fill='white' size={25} />
                            </div>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <FaTwitter fill='white' size={25} />
                            </div>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <PiInstagramLogoThin fill='white' size={30} />
                            </div>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <FaYahoo fill='white' size={25} />
                            </div>
                        </div>
                    </div>
                    <div className='mx-3 my-3'>
                        <h1 className='text-xl font-sans font-bold mb-2'>Jane Coper</h1>
                        <h1 className='text-gray-500 font-sans font-bold'>Worker</h1>
                    </div>
                </div>
                <div className='w-[25rem] h-full hover:shadow-2xl hover:shadow-gray-700'>
                    <div className='w-full h-full relative flex items-center justify-center group'>
                        <img src={father} alt="" className='w-full h-full object-cover' />
                        <div className='absolute items-center justify-center gap-x-5 hidden group-hover:flex'>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <RiFacebookFill fill='white' size={25} />
                            </div>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <FaTwitter fill='white' size={25} />
                            </div>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <PiInstagramLogoThin fill='white' size={30} />
                            </div>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <FaYahoo fill='white' size={25} />
                            </div>
                        </div>
                    </div>
                    <div className='mx-3 my-3'>
                        <h1 className='text-xl font-sans font-bold mb-2'>Cody Fisher</h1>
                        <h1 className='text-gray-500 font-sans font-bold'>Security Guard</h1>
                    </div>
                </div>
                <div className='w-[25rem] h-full hover:shadow-2xl hover:shadow-gray-700'>
                    <div className='w-full h-full relative flex items-center justify-center group'>
                        <img src={uncle} alt="" className='w-full h-full object-cover' />
                        <div className='absolute items-center justify-center gap-x-5 hidden group-hover:flex'>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <RiFacebookFill fill='white' size={25} />
                            </div>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <FaTwitter fill='white' size={25} />
                            </div>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <PiInstagramLogoThin fill='white' size={30} />
                            </div>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00B207]'>
                                <FaYahoo fill='white' size={25} />
                            </div>
                        </div>
                    </div>
                    <div className='mx-3 my-3'>
                        <h1 className='text-xl font-sans font-bold mb-2'>Robert Fox</h1>
                        <h1 className='text-gray-500 font-sans font-bold'>Senior Farmer Manager</h1>
                    </div>
                </div>



            </div>
        </div >
    )
}

export default Team
