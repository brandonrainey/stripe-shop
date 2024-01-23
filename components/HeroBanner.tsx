import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import BannerImage from '../public/banner-3-crop.webp'

export default function HeroBanner() {
  const router = useRouter()
  return (
    <div className="w-full h-[300px] sm:h-[700px] relative overflow-hidden">
      <h1 className="absolute w-[400px] lg:w-[600px] z-30 text-3xl md:text-4xl lg:text-5xl xl:text-6xl top-4 lg:top-32 xl:top-48 md:top-24 lg:-right-20 xl:right-20 md:right-0 -right-28 font-semibold text-white drop-shadow-lg">
        Shopping And Department Store.
      </h1>
      <button
        className="absolute top-[250px] xl:top-[350px] lg:top-[300px] md:top-[250px] sm:top-[200px] right-4 xl:right-[300px] lg:right-[250px] md:right-[150px] sm:right-[75px]  z-30 w-32 p-1 bg-white rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white"
        onClick={() => router.push('/Products')}
        aria-label='shop products'
      >
        Shop Products
      </button>
      <Image
        src={BannerImage}
        fill
        alt="hero image"
        className="object-cover object-center"
        placeholder="blur"
        priority={true}
      />
    </div>
  )
}
