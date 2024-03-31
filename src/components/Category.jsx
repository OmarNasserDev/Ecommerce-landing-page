import React from 'react'
import cardbaking from "../assets/baking.png"
import cardbeauty from "../assets/beauty.png"
import cardbread from "../assets/bread.png"
import carddiabeticfood from "../assets/diabeticfood.png"
import carddish from "../assets/dish.png"
import cardfreshfruit from "../assets/freshfruit.png"
import cardmeatfish from "../assets/meat&fish.png"
import cardoil from "../assets/oil.png"
import cardsnacks from "../assets/snacks.png"
import cardveg from "../assets/cardveg.png"
import cardbev from "../assets/cardbev.png"
import cardcook from "../assets/cardcook.png"
const Category = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-start'>
            <h1 className='text-[#00B207] font-serif text-xl'>CATEGORY</h1>
            <h1 className='text-5xl mt-5'>Shop by Top Categories</h1>
            <div className='w-full h-full flex items-center justify-center flex-wrap gap-4'>
                <div className='w-60 h-62 flex flex-col items-center border-2 border-gray-300 hover:border-[#2C742F] hover:shadow-lg hover:shadow-emerald-800 gap-12  p-5 rounded-md'>
                    <img src={cardfreshfruit} alt="" className='' />
                    <h1 className='text-2xl font-serif'>Fresh Fruit</h1>
                </div>
                <div className='w-60 h-62 flex flex-col items-center border-2 border-gray-300 hover:border-[#2C742F] hover:shadow-lg hover:shadow-emerald-800 gap-12  p-5 rounded-md'>
                    <img src={cardveg} alt="" className='' />
                    <h1 className='text-2xl font-serif'>Fresh Fruit</h1>
                </div>
                <div className='w-60 h-62 flex flex-col items-center border-2 border-gray-300 hover:border-[#2C742F] hover:shadow-lg hover:shadow-emerald-800 gap-12  p-5 rounded-md'>
                    <img src={cardmeatfish} alt="" className='' />
                    <h1 className='text-2xl font-serif'>Fresh Fruit</h1>
                </div>
                <div className='w-60 h-62 flex flex-col items-center border-2 border-gray-300 hover:border-[#2C742F] hover:shadow-lg hover:shadow-emerald-800 gap-12  p-5 rounded-md'>
                    <img src={cardsnacks} alt="" className='' />
                    <h1 className='text-2xl font-serif'>Fresh Fruit</h1>
                </div>
                <div className='w-60 h-62 flex flex-col items-center border-2 border-gray-300 hover:border-[#2C742F] hover:shadow-lg hover:shadow-emerald-800 gap-12  p-5 rounded-md'>
                    <img src={cardbev} alt="" className='' />
                    <h1 className='text-2xl font-serif'>Fresh Fruit</h1>
                </div>
                <div className='w-60 h-62 flex flex-col items-center border-2 border-gray-300 hover:border-[#2C742F] hover:shadow-lg hover:shadow-emerald-800 gap-12  p-5 rounded-md'>
                    <img src={cardbeauty} alt="" className='' />
                    <h1 className='text-2xl font-serif'>Fresh Fruit</h1>
                </div>
                <div className='w-60 h-62 flex flex-col items-center border-2 border-gray-300 hover:border-[#2C742F] hover:shadow-lg hover:shadow-emerald-800 gap-12  p-5 rounded-md'>
                    <img src={cardbread} alt="" className='' />
                    <h1 className='text-2xl font-serif'>Fresh Fruit</h1>
                </div>
                <div className='w-60 h-62 flex flex-col items-center border-2 border-gray-300 hover:border-[#2C742F] hover:shadow-lg hover:shadow-emerald-800 gap-12  p-5 rounded-md'>
                    <img src={cardbaking} alt="" className='' />
                    <h1 className='text-2xl font-serif'>Fresh Fruit</h1>
                </div>
                <div className='w-60 h-62 flex flex-col items-center border-2 border-gray-300 hover:border-[#2C742F] hover:shadow-lg hover:shadow-emerald-800 gap-12  p-5 rounded-md'>
                    <img src={cardcook} alt="" className='' />
                    <h1 className='text-2xl font-serif'>Fresh Fruit</h1>
                </div>
                <div className='w-60 h-62 flex flex-col items-center border-2 border-gray-300 hover:border-[#2C742F] hover:shadow-lg hover:shadow-emerald-800 gap-12  p-5 rounded-md'>
                    <img src={carddiabeticfood} alt="" className='' />
                    <h1 className='text-2xl font-serif'>Fresh Fruit</h1>
                </div>
                <div className='w-60 h-62 flex flex-col items-center border-2 border-gray-300 hover:border-[#2C742F] hover:shadow-lg hover:shadow-emerald-800 gap-12  p-5 rounded-md'>
                    <img src={carddish} alt="" className='' />
                    <h1 className='text-2xl font-serif'>Fresh Fruit</h1>
                </div>
                <div className='w-60 h-62 flex flex-col items-center border-2 border-gray-300 hover:border-[#2C742F] hover:shadow-lg hover:shadow-emerald-800 gap-12  p-5 rounded-md'>
                    <img src={cardoil} alt="" className='' />
                    <h1 className='text-2xl font-serif'>Fresh Fruit</h1>
                </div>
            </div>

        </div>
    )
}

export default Category
