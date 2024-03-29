import React, { useState } from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, setOpenAlert } from '../slices/cartSlice'
import Alert from '../components/Alert'

interface ProductsProps {
  products: {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: {
      count: number
      rate: number
    }
    title: string
  }[]
}

const MAX_RATING = 5

const MIN_RATING = 1

export default function Products({ products }: ProductsProps) {
  const dispatch = useDispatch()

  function addItemToCart(index: number) {
    dispatch(addToCart(products[index]))

    dispatch(setOpenAlert(true))
  }

  return (
    <div className="flex flex-col justify-center bg-slate-100 ">
      <Header products={products} />

      <h1 className="text-3xl font-bold pl-6 pt-6">All Products</h1>
      <div className="w-full self-center gap-y-4 gap-x-4 px-4 pb-4 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product: any, index: number) => (
          <article className="flex justify-center " key={index}>
            <div className="flex flex-col  w-full h-96 gap-1   mt-8 rounded-xl self-center justify-end shadow-xl bg-white">
              <div className="w-full h-full flex justify-center bg-white rounded-xl ">
                <Image
                  src={product.image}
                  height={120}
                  width={120}
                  alt="product image"
                  placeholder="blur"
                  blurDataURL="/loading-icon.gif"
                  className={`self-center w-auto h-auto ${
                    product.id === 5 && 'h-[180px]'
                  }`}
                  priority={true}
                />
              </div>
              <div className="flex flex-col bg-[#4b88c517] p-1 rounded-lg shadow">
                <div className="flex w-full  ">
                  <p className="font-semibold text-medium mr-6">
                    {product.title}
                  </p>
                  <p className="ml-auto text-2xl font-bold">${product.price}</p>
                </div>

                <p className="text-xs line-clamp-2 ">{product.description}</p>
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

                <button
                  className=" w-28 p-1 bg-white rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white"
                  onClick={() => addItemToCart(index)}
                  aria-label="add to cart"
                >
                  add to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <Alert />
    </div>
  )
}

export async function getStaticProps(context: any) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )

  return {
    props: {
      products,
    },
  }
}
