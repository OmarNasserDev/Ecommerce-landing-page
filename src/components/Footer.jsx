import React from 'react'
import { BsEnvelopeOpen } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";

import logo from '../assets/logo.png'
import appstore from '../assets/AppStore.png'
import googleplay from '../assets/GooglePlay.png'
import applepay from '../assets/applepay.png'
import visa from '../assets/visa.png'
import discover from '../assets/discover.png'
import secure from '../assets/secure.png'
import mastercard from '../assets/mastercard.png'



const Footer = () => {
    return (
        <div className='w-full h-[45rem] mt-14'>
            <div className='w-full h-48 flex justify-between items-center bg-gray-900 px-10'>
                <div className='flex items-center gap-6'>
                    <BsEnvelopeOpen className='fill-[#00B207] size-16' />
                    <div>
                        <h1 className='text-3xl text-white'>Subscribe our Newsletter</h1>
                        <p className='text-gray-600'>Pellentesque eu nibh eget mauris congue mattis matti.</p>
                    </div>
                </div>
                <div>
                    <div className='w-[34rem] text-white text-xl relative'>
                        <input type="text" placeholder='Your email address' className='w-full h-14 px-5 rounded-3xl outline-none bg-gray-800 ' />
                        <button className='w-40 h-14 rounded-full bg-[#00B207]  absolute right-0'>Subscribe</button>
                    </div>
                </div>
                <div className='w-72 flex items-center gap-5 px-5'>
                    <FaFacebookF className='w-10 h-7 fill-gray-300 hover:bg-[#00B207] hover:rounded-full hover:fill-white hover:w-12 hover:h-12 hover:p-2' />
                    <FaTwitter className='w-10 h-7 fill-gray-300 hover:bg-[#00B207] hover:rounded-full hover:fill-white hover:w-12 hover:h-12 hover:p-2' />
                    <BiLogoPinterestAlt className='w-10 h-7 fill-gray-300 hover:bg-[#00B207] hover:rounded-full hover:fill-white hover:w-12 hover:h-12 hover:p-2' />
                    <BsInstagram className='w-10 h-7 fill-gray-300 hover:bg-[#00B207] hover:rounded-full hover:fill-white hover:w-12 hover:h-12 hover:p-1' />
                </div>

            </div>
            <div className='w-full h-96 flex justify-between items-start bg-gray-200 p-10'>
                <div className='w-96 h-72'>
                    <img src={logo} alt="" className='mb-5' />
                    <p className='w-80 mb-5 text-balance text-gray-500'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                    <span className='flex gap-5 text-xl font-sans'><h1 className='border-b-2 border-green-600'>(219) 555-0114</h1> or <h1 className='border-b-2 border-green-600'>Proxy@gmail.com</h1></span>
                </div>
                <div className='w-[30rem] h-full flex items-start '>
                    <table >
                        <thead>
                            <tr>
                                <th>My Account</th>
                                <th>Helps</th>
                                <th>Proxy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>My Account</td>
                                <td>Contact</td>
                                <td>About</td>
                            </tr>
                            <tr>
                                <td>Order History</td>
                                <td>Faqs</td>
                                <td>Shop</td>
                            </tr>
                            <tr>
                                <td>Shoping Cart</td>
                                <td>Terms & Condition</td>
                                <td>Product</td>
                            </tr>
                            <tr>
                                <td>Wishlist</td>
                                <td>Privacy Policy</td>
                                <td>Track Order</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='w-96 flex flex-col items-start'>
                    <h1 className='text-2xl font-sans'>Download Mobile App</h1>
                    <div className='w-full flex justify-center items-center mt-5 gap-5'>
                        <img src={appstore} alt="" className='w-48' />
                        <img src={googleplay} alt="" className='w-48' />
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center p-5'>
                <h1 className='text-lg text-gray-500 font-serif'>Ecobazar eCommerce © 2021. All Rights Reserved</h1>
                <div className='flex gap-2'>
                    <img src={applepay} alt="" />
                    <img src={visa} alt="" />
                    <img src={discover} alt="" />
                    <img src={secure} alt="" />
                    <img src={mastercard} alt="" />
                </div>
            </div>
        </div >
    )
}

export default Footer
