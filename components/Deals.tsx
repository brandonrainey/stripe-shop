import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import ScrollContainer from 'react-indiana-drag-scroll'
import dynamic from 'next/dynamic'

type ProductsProps = {
  products: any,
  
}

// const StarIcon = dynamic(() => import('@heroicons/react/24/solid'), { ssr: false})



export default function Deals({ products }: ProductsProps) {

const MAX_RATING = 5
const MIN_RATING = 1

function makeArray() {
  Array(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) +
      MIN_RATING
  )
    .fill(undefined)
    .map((_, index) => (
      <StarIcon className="h-5 text-yellow-300" key={index}/>
    ))
}

  
  //map a deals array
  return (
    <div className="w-full mt-12 flex flex-col mb-4">
      <p className="text-2xl font-semibold ml-12">Best Deals For You</p>
      <ScrollContainer className="flex w-full gap-x-6 pb-2 overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full" hideScrollbars={false}>
        <div className="flex flex-col w-full h-80 gap-1 pb-1 mt-8 rounded-xl self-center justify-end min-w-[300px]">
          <Image
            src={products[0].image}
            height={120}
            width={120}
            alt="product image"
            className="self-center"
          />
          <p className="font-semibold text-medium">{products[0].title}</p>
          <p className="text-xs line-clamp-2 ">{products[0].description}</p>
          <div className="flex">
            
          </div>

          <button className=" w-28 p-1 rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white">
            add to cart
          </button>
        </div>
        <div className="flex flex-col  w-full h-80 gap-1 pb-1 mt-8 rounded-xl self-center justify-end min-w-[300px]">
          <Image
            src={products[3].image}
            height={120}
            width={120}
            alt="product image"
            className="self-center"
          />
          <p className="font-semibold text-medium">{products[0].title}</p>
          <p className="text-xs line-clamp-2 ">{products[0].description}</p>
          <div className="flex">
            
          </div>

          <button className=" w-28 p-1 rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white">
            add to cart
          </button>
        </div>
        <div className="flex flex-col  w-full h-80 gap-1 pb-1 mt-8 rounded-xl self-center justify-end min-w-[300px]">
          <Image
            src={products[7].image}
            height={120}
            width={120}
            alt="product image"
            className="self-center"
          />
          <p className="font-semibold text-medium">{products[0].title}</p>
          <p className="text-xs line-clamp-2 ">{products[0].description}</p>
          <div className="flex">
            
          </div>

          <button className=" w-28 p-1 rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white">
            add to cart
          </button>
        </div>
        <div className="flex flex-col  w-full h-80 gap-1 pb-1 mt-8 rounded-xl self-center justify-end min-w-[300px]">
          <Image
            src={products[11].image}
            height={120}
            width={120}
            alt="product image"
            className="self-center"
          />
          <p className="font-semibold text-medium">{products[0].title}</p>
          <p className="text-xs line-clamp-2 ">{products[0].description}</p>
          <div className="flex">
            
          </div>

          <button className=" w-28 p-1 rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white">
            add to cart
          </button>
        </div>
        <div className="flex flex-col  w-full h-80 gap-1 pb-1 mt-8 rounded-xl self-center justify-end min-w-[300px]">
          <Image
            src={products[11].image}
            height={120}
            width={120}
            alt="product image"
            className="self-center"
          />
          <p className="font-semibold text-medium">{products[0].title}</p>
          <p className="text-xs line-clamp-2 ">{products[0].description}</p>
          <div className="flex">
            
          </div>

          <button className=" w-28 p-1 rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white">
            add to cart
          </button>
        </div>
        <div className="flex flex-col  w-full h-80 gap-1 pb-1 mt-8 rounded-xl self-center justify-end min-w-[300px]">
          <Image
            src={products[11].image}
            height={120}
            width={120}
            alt="product image"
            className="self-center"
          />
          <p className="font-semibold text-medium">{products[0].title}</p>
          <p className="text-xs line-clamp-2 ">{products[0].description}</p>
          <div className="flex">
            
          </div>

          <button className=" w-28 p-1 rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white">
            add to cart
          </button>
        </div>
      </ScrollContainer>
    </div>
  )
}
