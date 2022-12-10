import React from 'react'
import { StarIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

type ProductPageProps = {
  products: any
  productId: any
  openProductPage: any
  setOpenProductPage: any
}

const MAX_RATING = 5
const MIN_RATING = 1

export default function ProductPage({
  products,
  productId,
  openProductPage,
  setOpenProductPage,
}: ProductPageProps) {
  
  const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)

  return (
    <div className="w-full h-[1500px] flex bg-black/50 absolute z-40 top-0 right-0 bottom-0 left-0 justify-center">
      <div className="flex bg-white h-1/2 w-2/3 mt-40 relative items-center">
        <div className='h-[500px] w-[500px] relative'>
          <Image
          src={products[productId].image}
          className="rounded-lg object-contain"
          fill
          alt="product image"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(500, 500)
          )}`}
          style={{
            
            
          }}
        ></Image>
        </div>
        

        <div className='w-1/2'>
          <p>{products[productId].title}</p>
          <p>{products[productId].description}</p>
          <div className="flex ">
            {Array(
              Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) +
                MIN_RATING
            )
              .fill(undefined)
              .map((_, index) => (
                <StarIcon className="h-5 text-yellow-300" key={index} />
              ))}
          </div>
          <p>{products[productId].price}</p>
          <button className=" w-28 p-1 bg-white rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white">
            Add to Cart
          </button>
        </div>
        <XMarkIcon
          className="h-8 absolute right-0 top-0 cursor-pointer"
          onClick={() => setOpenProductPage(false)}
        />
      </div>
    </div>
  )
}
