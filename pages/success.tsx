import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'

interface SuccessProps {
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

export default function Success({ products }: SuccessProps) {
  const router = useRouter()

  return (
    <div className="flex flex-col justify-center items-center">
      <Header products={products} />
      <main className="flex flex-col w-3/4 sm:w-1/2 h-52 mt-12 justify-center bg-[#f6f6f6] rounded-lg shadow-lg p-1">
        <div className="flex items-center justify-center">
          <CheckCircleIcon className="h-12 text-green-500" />
          <p className="font-semibold text-xl sm:text-2xl text-center">
            Thank You!, Your order has been confirmed.
          </p>
        </div>
        <div className="text-center text-xs sm:text-base">
          Thank you for shopping with us. A confirmation email will be sent once
          your item has shipped. Check the status of your orders with the link
          below.
        </div>
        <button
          className="w-full p-1 mt-4 bg-white rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white"
          onClick={() => router.push('/orders')}
          aria-label='view orders'
        >
          View Orders
        </button>
      </main>
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
