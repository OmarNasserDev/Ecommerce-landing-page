import React from 'react'
import mango from '../assets/mango.png'
import groupfood from '../assets/Groupfood.png'
import groupfood2 from '../assets/groupfood2.png'
import bookoff from '../assets/bookoff.png'
import groupseries from '../assets/Groupseries.png'
import steps from '../assets/steps.png'
const Logo = () => {
    return (
        <div className='mt-10 w-[100%] h-36 px-10 py-12 flex justify-between items-center gap-20 border-2'>
            <img src={steps} alt="" className='' />
            <span className='h-full w-0.5 bg-gray-400'></span>
            <img src={mango} alt="" />
            <span className='h-full w-0.5 bg-gray-400'></span>
            <img src={groupfood} alt="" />
            <span className='h-full w-0.5 bg-gray-400'></span>
            <img src={groupfood2} alt="" />
            <span className='h-full w-0.5 bg-gray-400'></span>
            <img src={bookoff} alt="" />
            <span className='h-full w-0.5 bg-gray-400'></span>
            <img src={groupseries} alt="" />
        </div>
    )
}

export default Logo
