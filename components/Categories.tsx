import React from 'react'
import Image from 'next/image'
import mensTP from '../public/mens-tp.png'
import { useRouter } from 'next/router'

type ProductsProps = {
  products: any
}

export default function Categories({ products }: ProductsProps) {
  const router = useRouter()
  return (
    <div className="w-full mt-10">
      <p className="text-2xl font-semibold ml-12">Shop Our Top Categories</p>
      <div className="flex flex-wrap lg:flex-nowrap justify-between mt-8 gap-y-3">
        <div className='flex w-full justify-around '>
          <div className="flex  flex-col  sm:h-72 w-40 sm:w-56 border rounded-lg bg-[#d79715] hover:bg-[#e7a218] justify-around items-center cursor-pointer " onClick={() => router.push('/mens')}>
            <p className="pb-2  text-white text-lg font-semibold">MENS</p>
            <Image
              src={mensTP}
              width={120}
              
              alt="category image"
              className="bg-transparent"
            />
          </div>
          <div className="flex flex-col  sm:h-72 w-40 sm:w-56 border rounded-lg bg-[#dc3259] hover:bg-[#f33763] justify-around items-center cursor-pointer" onClick={() => router.push('/womens')}>
            <p className="mt-2 text-white text-lg font-semibold">WOMENS</p>
            <Image
              src={'/womens-tp.png'}
              height={120}
              width={120}
              alt="category image"
              className="bg-transparent"
            />
          </div>
        </div>

        <div className='flex w-full justify-around'>
          <div className="flex flex-col  sm:h-72  w-40 sm:w-56 border rounded-lg bg-[#15baa6] hover:bg-[#16cbb6] justify-around items-center cursor-pointer" onClick={() => router.push('/jewelery')}>
            <p className="mt-2 text-white text-lg font-semibold">JEWERLY</p>
            <Image
              src={'/jewerly-tp.png'}
              height={120}
              width={120}
              alt="category image"
              className="bg-transparent"
            />
          </div>
          <div className="flex flex-col  sm:h-72  w-40 sm:w-56 border rounded-lg bg-[#4611b8] hover:bg-[#4f14d0] justify-around items-center cursor-pointer" onClick={() => router.push('/electronics')}>
            <p className="mt-2 text-white text-lg font-semibold">ELECTRONICS</p>
            <Image
              src={'/electronics-tp.png'}
              height={120}
              width={120}
              alt="category image"
              className="bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
