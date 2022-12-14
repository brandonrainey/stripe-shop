import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, selectItems, selectTotal } from '../slices/cartSlice'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { useSession } from 'next-auth/react'

interface CartProps {
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

const stripePromise = loadStripe(process.env.stripe_public_key)

export default function Cart({ products }: CartProps) {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const session = useSession()

  async function createCheckoutSession() {
    const stripe = await stripePromise

    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items: items,
      email: session?.data?.user?.email,
    })

    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    })

    if (result?.error.message) alert(result.error.message)
  }

  const MAX_RATING = 5
  const MIN_RATING = 1

  const dispatch = useDispatch()

  function removeItemFromCart(id: number) {
    dispatch(removeFromCart(id))
  }

  return (
    <div>
      <Header products={products} />
      <p
        className={`bg-[#f6f6f6] h-24 flex justify-center items-center shadow ${
          items.length === 0 ? '' : 'hidden'
        }`}
      >
        <span className="text-xl font-semibold">
          {items.length === 0 ? 'Your Cart Is Empty' : ''}
        </span>
      </p>
      <h1
        className={`sm:text-3xl text-2xl pt-4 pl-4 font-bold mb-6 ${
          items.length === 0 ? 'hidden' : ''
        }`}
      >
        Your Cart
      </h1>
      <div className="flex flex-col gap-y-4">
        {items.map((item: any, index: number) => (
          <div
            className="flex flex-col sm:flex-row gap-2 items-center  justify-center border-b pb-2"
            key={index}
          >
            <div className="flex items-center grow">
              <div className="w-1/2 h-full flex justify-center items-center bg-white px-2">
                <Image
                  src={item.image}
                  height={120}
                  width={120}
                  alt="product image"
                  className="self-center min-w-[80px] w-auto h-auto"
                />
              </div>
              <div className="flex flex-col w-3/4 sm:w-full bg-[#f6f6f6] p-1 rounded-lg sm:h-40 ">
                <div className="flex w-full">
                  <p className="font-semibold text-medium mr-6">{item.title}</p>
                  <p className="ml-auto text-2xl font-bold">
                    ${item.discountedPrice?.toFixed(2) || item.price}
                  </p>
                </div>

                <p className="text-xs line-clamp-2 mt-auto">
                  {item.description}
                </p>
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
              </div>
            </div>

            <div className="flex px-4">
              <button
                className=" w-auto sm:min-w-[140px]  p-1 bg-white rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white"
                onClick={() => removeItemFromCart(item.id)}
                aria-label='remove from cart'
              >
                remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {/*  */}
      <div className={`flex flex-col justify-center mt-4 mb-4`}>
        <p
          className={`${
            items.length === 0 ? 'hidden' : ''
          } text-2xl pt-2 pl-2 font-semibold bg-[#f6f6f6]`}
        >
          Total - ${total.toFixed(2)}
        </p>
        <button
          role="link"
          onClick={() => createCheckoutSession()}
          className={`${
            items.length === 0 ? 'hidden' : ''
          } mt-4 w-28 p-1 bg-white rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white`}
          aria-label='checkout'
        >
          Checkout
        </button>
      </div>
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
