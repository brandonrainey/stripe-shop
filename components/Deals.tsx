import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import ScrollContainer from 'react-indiana-drag-scroll'
import dynamic from 'next/dynamic'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, setDeals, selectDeals, setDealItems, selectDealItems } from '../slices/cartSlice'

type ProductsProps = {
  products: any
}



export default function Deals({ products }: ProductsProps) {
  const dispatch = useDispatch()

  const activeDealItems = useSelector(selectDealItems)

  const activeDeals = useSelector(selectDeals)

  function addItemToCart(index: any) {
    dispatch(addToCart(dealsArray[index]))
  }

  const [dealsArray, setDealsArray] = useState<any>([])

  const [indexArray, setIndexArray] = useState<any>([])

  const MAX_RATING = 50
  const MIN_RATING = 10

  function makeDealsArray() {
    let array = [...products]
    const index_upper = 19
    const index_lower = 0

    for (let i = 0; i <= 5; i++) {
      let newDeal =
        array[
          Math.floor(Math.random() * (index_upper - index_lower + 1)) +
            index_lower
        ]

      let discount =
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING

      newDeal.discountedPrice = newDeal.price - newDeal.price * (discount / 100)

      newDeal.discount = discount

      setDealsArray((dealsArray: any) => [...dealsArray, newDeal])
      
    }
  }

  

  useEffect(() => {
    
    

    if (!activeDeals) {
      
      makeDealsArray()
      
      
    }

    // dispatch(setDeals(true))
    dispatch(setDealItems(dealsArray))
    
  }, [])

  console.log(activeDealItems)

  return (
    <div className="w-full mt-12 flex flex-col mb-4">
      <p className="text-2xl font-semibold ml-12">Best Deals For You</p>
      <ScrollContainer
        className="flex w-full gap-x-6 pb-2 overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
        hideScrollbars={false}
      >
        {dealsArray.map((item: any, index: any) => (
          <div
            className="flex flex-col w-full h-[340px] gap-1 pb-1 mt-8 rounded-xl self-center justify-end min-w-[300px]"
            key={index}
          >
            <Image
              src={item.image}
              height={120}
              width={120}
              alt="product image"
              className="self-center"
            />
            <p className="font-semibold text-medium">{item.title}</p>
            <p className="text-xs line-clamp-2">{item.description}</p>
            <div className="flex gap-x-2 items-center justify-center">
              <p className="text-xl font-bold text-red-600">{`-${item?.discount}%`}</p>
              <p className="line-through text-sm text-slate-500">
                ${item.price.toFixed(2)}
              </p>
              <p className="text-lg font font-semibold ">
                ${item.discountedPrice.toFixed(2)}
              </p>
            </div>

            <button
              className=" w-28 p-1 rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white"
              onClick={() => addItemToCart(index)}
            >
              add to cart
            </button>
          </div>
        ))}
      </ScrollContainer>
    </div>
  )
}
