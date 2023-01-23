import React from 'react'
import { StarIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart, setOpenAlert } from '../slices/cartSlice'



interface ProductPageProps {
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
  productId: number
  openProductPage: boolean
  setOpenProductPage: React.Dispatch<React.SetStateAction<boolean>>
}

const MAX_RATING = 5

const MIN_RATING = 1

export default function ProductPage({
  products,
  productId,
  setOpenProductPage,
}: ProductPageProps) {
  const dispatch = useDispatch()

  function addItemToCart() {
    dispatch(addToCart(products[productId]))

    dispatch(setOpenAlert(true))

    setOpenProductPage(false)
  }

  return (
    <article className="w-full h-[1500px] flex bg-black/50 absolute z-40 top-0 right-0 bottom-0 left-0 justify-center " data-testid='product-page'>
      <div className="flex md:flex-row flex-col bg-white h-[800px] md:h-1/2 w-full md:w-2/3 mt-24 md:mt-40 relative items-center rounded-lg">
        <div className="h-[500px] w-full sm:w-[500px] relative">
          <Image
            src={products[productId].image}
            className="rounded-lg object-contain p-1 "
            fill
            alt="product image"
            placeholder="blur"
            blurDataURL={`/loading-icon.gif`}
            priority={true}
          ></Image>
        </div>

        <div className="w-full flex flex-col h-full justify-center gap-y-12 bg-[#f6f6f6] rounded-lg p-2">
          <div className="flex flex-col  rounded-lg p-1">
            <p className="text-2xl font-semibold self-start mb-4">
              {products[productId].title}
            </p>
            <p className="">{products[productId].description}</p>
            <div className="flex ">
              {Array(
                Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) +
                  MIN_RATING
              )
                .fill(undefined)
                .map((_, index) => (
                  <StarIcon className="h-8 text-yellow-300" key={index} />
                ))}
            </div>
          </div>

          <p className="text-3xl font-semibold">${products[productId].price}</p>
          <button className=" w-28 p-1 bg-white rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white" onClick={() => addItemToCart()} aria-label='add to cart'>
            Add to Cart
          </button>
        </div>
        <XMarkIcon
          className="h-8 absolute right-0 top-0 cursor-pointer"
          onClick={() => setOpenProductPage(false)}
        />
      </div>
      
    </article>
  )
}
