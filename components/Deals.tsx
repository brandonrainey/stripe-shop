import React from 'react'
import Image from 'next/image'

export default function Deals() {
    //map a deals array
  return (
    <div className='w-full mt-12 flex flex-col'>
        <p className='text-2xl font-semibold ml-12'>Best Deals For You</p>
        <div className='flex flex-col  w-64 h-80 gap-1 pb-1 mt-8 rounded-xl self-center'>
            <img className='w-full h-2/3'/>
            <p className='font-semibold'>product name</p>
            <p className='text-xs'>small product description</p>
            <div>stars</div>
            <button className=' w-28 p-1 rounded-2xl self-center border-2 border-black font-semibold text-sm'>add to cart</button>
        </div>
    </div>
  )
}
