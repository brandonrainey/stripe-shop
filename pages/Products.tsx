import React, { useState } from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { addToCart } from '../slices/cartSlice'

type ProductsProps = {
  products: any
}

const MAX_RATING = 5
const MIN_RATING = 1

export default function Products({ products }: ProductsProps) {
  const dispatch = useDispatch()

  function addItemToCart(index: any) {
    dispatch(addToCart(products[index]))
  }

  return (
    <div className="flex flex-col justify-center">
      <Header />
      {/* filter bubbles */}
      <div></div>
      <p className='text-3xl font-bold pl-6 pt-6'>All Products</p>
      <div className="w-full self-center gap-y-4 gap-x-4 px-4 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product: any, index: any) => (
          
          <div className="flex justify-center ">
            <div className="flex flex-col  w-full h-80 gap-1 pb-1 mt-8 rounded-xl self-center justify-end">
              <Image
                src={product.image}
                height={120}
                width={120}
                alt="product image"
                className="self-center"
              />
              <div className='flex w-full'>
                <p className="font-semibold text-medium mr-6">{product.title}</p>
                <p className='ml-auto text-xl font-bold'>${product.price}</p>
              </div>
              
              <p className="text-xs line-clamp-2 ">{product.description}</p>
              <div className='flex'>
                {Array(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING)
                  .fill(undefined)
                  .map((_, index) => (<StarIcon className="h-5 text-yellow-300" />))}
              </div>
              
              <button className=" w-28 p-1 rounded-2xl self-center border-2 border-black font-semibold text-sm" onClick={() => addItemToCart(index)}>
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )

  return {
    props: {
      products,
    },
  }
}
