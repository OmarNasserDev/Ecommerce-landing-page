import React from 'react'
import map from '../assets/map.png'
import logo from '../assets/logo.png'
import PhoneCall from '../assets/PhoneCall.png'
import categories from '../assets/Categories.png'
import apple from '../assets/apple.png'
import butter from '../assets/butter.png'
import coffee from '../assets/coffee.png'
import cupcake from '../assets/cupcake.png'
import fish from '../assets/fish.png'
import food from '../assets/food.png'
import icecream from '../assets/ice-cream.png'
import meat from '../assets/meat.png'
import plus from '../assets/plus-solid.png'
import heart from '../assets/Heart.png'
import bag from '../assets/Bag.png'
import group from '../assets/Group.png'

function Header() {
    // Initialization for ES Users



    return (
        <div className='flex flex-col w-full h-46'>
            <div className='flex justify-between w-full h-8 p-3 mt-2 mx-2 text-[9px] items-center text-gray-400 md:text-lg lg:text-sm'>
                <h5 className='flex items-center text-nowrap'><img src={map} alt="map" className='w-3 h-3 mr-3' />Store Location: Egypt-cairo 23-Yoluo</h5>
                <div className='flex gap-5 mr-5 lg:mr-10'>
                    <select name="" id="" className='bg-transparent'>
                        <option value="">Eng</option>
                        <option value="">Ar</option>
                    </select>
                    <select name="" id="" className='bg-transparent'>
                        <option value="">USD</option>
                        <option value="">EGP</option>
                    </select>
                </div>
            </div>
            <hr className='mx-5' />
            <div className='flex justify-between items-center mx-5 mt-3'>
                <div className='w-16 md:w-32'>
                    <img src={logo} alt="" />
                </div>
                <div className='w-[40rem] hidden md:block'>
                    <form class="max-w-[28rem] mx-auto lg:max-w-full">
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                            <button type="submit" class=" text-white absolute end-0.5 bottom-0.5 w-28 h-[3.2rem] focus:ring-4 focus:outline-none focus:ring-green-500 font-medium text-sm px-4 py-2 bg-[#00B207]  dark:focus:via-green-600">Search</button>
                        </div>
                    </form>
                </div>

                <div className='w-34 md:w-80 md:hidden '>
                    <form action="" className='relative border-2 rounded flex justify-between '>
                        <input type="text" name="" id="" className='w-full relative right-0 outline-none text-[11px]' placeholder='Search' />
                        <button className='w-10 bg-[#00B207] rounded text-white  items-center p-2 text-[6px]'>Search</button>
                    </form>
                </div>

                <div className='flex gap-2  items-center text-[8px] mr-2 md:text-[10px] lg:text-lg'>
                    <img src={PhoneCall} alt="" className='w-3 h-3 lg:w-10 lg:h-10' />
                    <div>
                        <h3 className='text-gray-400 '>Customer Service</h3>
                        <h3 className='font-bold'>(219) 555-0114</h3>
                    </div>
                </div>
            </div>


            <div className='relative w-full h-12 mt-5 mr-5  bg-[#1A1A1A] flex items-center justify-between text-[#999999] text-sm md:text-xl '>
                <ul className='flex flex-col justify-center items-start absolute top-16 dropdown w-[20rem] h-10 md:top-16'>
                    <div className='w-12 h-5 flex absolute top-[-59px] left-5 md:w-80 md:h-32 md:top-[-60px]'>
                        <img src={categories} alt="" className='min-w-9 min-h-9 ' />
                    </div>
                    <div className='content gap-14 mt-44 md:mt-56'>
                        <div className='dropdown'>
                            <li className='flex flex-row items-center gap-4 relative '><img src={categories} alt="" className='h-5' />
                                All Categories
                            </li>
                            <div className='content flex-col  text-[10px] gap-5 w-58 text-black md:text-[15px] '>
                                <span><img src={butter} alt="" /> Vegtables</span>
                                <span><img src={meat} alt="" /> Checken & Meat</span>
                                <span><img src={coffee} alt="" />Drink & Water</span>
                                <span><img src={fish} alt="" /> River Fish</span>
                                <span><img src={apple} alt="" />Fresh Fruit</span>
                                <span><img src={icecream} alt="" /> Yougurt & IceCreame</span>
                                <span><img src={cupcake} alt="" />Cake & Bread</span>
                                <span><img src={butter} alt="" />Butter & Cream</span>
                                <span><img src={food} alt="" />Cooking</span>
                                <span><img src={plus} alt="" />View all Categories</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>

                            <li>Home</li>
                            <li>Shop</li>
                            <li>Pages</li>
                            <li>Blog</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </div>
                    </div>
                </ul>
                <div className='gap-4 hidden lg:flex md:ml-80 lg:ml-96 lg:gap-14 '>
                    <span className='text-white'>Home</span>
                    <span className='text-white'>Pages</span>
                    <span className='text-white'>Shop</span>
                    <span className='text-white'>Blog</span>
                    <span className='text-white'>About Us</span>
                    <span className='text-white'>Contact Us</span>
                </div>
                <div className='flex w-28 gap-5 absolute right-14 '>
                    <img src={heart} alt="" className='w-4 h-4 md:w-6 h-6' />
                    <img src={bag} alt="" className='w-4 h-4 md:w-6 h-6' />
                    <img src={group} alt="" className='w-4 h-4 md:w-6 h-6' />

                </div>

            </div>
        </div>
    )
}

export default Header
