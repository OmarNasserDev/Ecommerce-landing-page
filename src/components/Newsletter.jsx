import React, { useEffect, useState } from 'react'
import bgsletter from '../assets/BGsletter.png'
import { IoClose } from "react-icons/io5";

const Newsletter = () => {
    const [open, setOpen] = useState(true)

    useEffect(() => {

        window.onscroll = () => { window.scrollTo(0, 0); }
        document.querySelector('.close').addEventListener('click', (e) => {
            e.preventDefault()
            document.querySelector('.sletter').style.display = 'none';
            setOpen(false)
            window.onscroll = true
        })

    }, [open])



    return (
        <div className='w-[130%] h-[120%] top-[-26%] left-[-13%] bg-[#0000007c] absolute z-30 flex items-center justify-center sletter'>
            <div className='w-[60rem] h-[25rem] flex items-center justify-between bg-white p-4 rounded-md relative'>
                <button className='absolute top-5 right-5 close'>
                    <IoClose className='size-8' />
                </button>
                <div className='w-[25rem]'>
                    <img src={bgsletter} alt="" />
                </div>
                <div className='w-[30rem] h-full flex flex-col items-center justify-center gap-y-5'>

                    <h1 className='text-5xl text-center'>Subcribe to Our <span>Newsletter</span></h1>
                    <p className='text-gray-400 text-xl text-center font-sans'>Subscribe to our newlletter and Save your <span className='text-[#FF8A00]'>20% money</span>  with discount code today.</p>
                    <div className=' w-full h-14 font-sans flex items-center justify-center relative rounded-full border border-gray-400 '>
                        <input type="text" className='w-full h-full rounded-full p-5 outline-none text-lg' placeholder='Enter Your email' />
                        <button className='w-36 h-[3.5rem] rounded-full absolute right-0 text-white text-lg bg-[#00B207]'>Subscribe</button>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" className='showbtn' />
                        <span className='text-lg font-serif text-gray-400'>Do not show this window</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
