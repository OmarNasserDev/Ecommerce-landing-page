import React from 'react'
import { ImQuotesRight } from "react-icons/im";
import { FaStar } from "react-icons/fa6";

const CommentTemp = (props) => {

    return (
        <div className='w-[26rem] gap-5 mt-10 bg-white p-5'>
            <div className='mb-5'>
                <ImQuotesRight className='fill-[#00b20680] size-12' />
            </div>
            <div className='mb-5'>
                <p className='text-gray-500 text-lg text-pretty'>{props.pragraph}</p>
            </div>
            <div className='flex justify-between items-center'>

                <div className='flex gap-5 items-center'>
                    <img src={props.image} alt="" className='w-20 h-20 rounded-full' />
                    <div>
                        <h1 className='text-lg'>{props.name}</h1>
                        <h3 className='text-gray-400 text-lg'>{props.behaviour}</h3>
                    </div>
                </div>
                <div className='flex'>
                    < FaStar className='fill-[#FF8A00] size-6 gap-28' />
                    < FaStar className='fill-[#FF8A00] size-6 gap-28' />
                    < FaStar className='fill-[#FF8A00] size-6 gap-28' />
                    < FaStar className='fill-[#FF8A00] size-6 gap-28' />
                    < FaStar className='fill-[#FF8A00] size-6 gap-28' />

                </div>

            </div>

        </div>
    )
}

export default CommentTemp
