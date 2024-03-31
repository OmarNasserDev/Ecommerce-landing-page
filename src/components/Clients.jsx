import React from 'react'
import CommentTemp from './CommentTemp'
import robert from '../assets/robert.png'
import dianne from '../assets/dianne.png'
import eleanor from '../assets/eleanor.png'
const Clients = () => {
    return (
        <div className='w-full h-[65vh] mt-96 flex flex-col items-center justify-center bg-[#F2F2F2]'>
            <h1 className='text-[#00B207] font-serif font-bold'>CLIENT TESTIOMIAL</h1>
            <h1 className='text-5xl'>What our Client Says</h1>
            <div className='flex gap-10 px-10'>
                <CommentTemp pragraph="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget" image={robert} name="Robert Fox" behaviour="Customer" />
                <CommentTemp pragraph="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget" image={dianne} name="Dianne Russell" behaviour="Customer" />
                <CommentTemp pragraph="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget" image={eleanor} name="Eleanor Pena" behaviour="Customer" />

            </div>
        </div>

    )
}

export default Clients
