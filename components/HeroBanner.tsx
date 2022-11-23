import React from 'react'
import Image from 'next/image'

export default function HeroBanner() {
  return (
    <div className="w-full h-[300px] sm:h-[500px] relative overflow-hidden">
        <p className='absolute z-30 text-3xl md:text-4xl lg:text-5xl xl:text-6xl top-20 sm:top-48 left-4 sm:left-20 font-semibold'>Hero Text Here</p>
        <Image src={'/hero-image.png'} objectFit={'cover'} fill alt="hero image" />
    </div>
  )
}
