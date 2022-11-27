import React from 'react'
import Image from 'next/image'

type ProductsProps = {
  products: any
}

export default function Categories({ products }: ProductsProps) {
  return (
    <div className="w-full mt-10">
      <p className="text-2xl font-semibold ml-12">Shop Our Top Categories</p>
      <div className="flex flex-wrap lg:flex-nowrap justify-between mt-8 gap-y-3">
        <div className='flex w-full justify-around '>
          <div className="flex  flex-col  sm:h-72 w-40 sm:w-56 border rounded-lg bg-[#d79715] justify-around items-center ">
            <p className="pb-2  text-white text-lg font-semibold">MENS</p>
            <Image
              src={'/mens-tp.png'}
              height={120}
              width={120}
              alt="category image"
              className="bg-transparent"
            />
          </div>
          <div className="flex flex-col  sm:h-72 w-40 sm:w-56 border rounded-lg bg-[#dc3259] justify-around items-center">
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
          <div className="flex flex-col  sm:h-72  w-40 sm:w-56 border rounded-lg bg-[#16cbb6] justify-around items-center">
            <p className="mt-2 text-white text-lg font-semibold">JEWERLY</p>
            <Image
              src={'/jewerly-tp.png'}
              height={120}
              width={120}
              alt="category image"
              className="bg-transparent"
            />
          </div>
          <div className="flex flex-col  sm:h-72  w-40 sm:w-56 border rounded-lg bg-[#4611b8] justify-around items-center">
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
