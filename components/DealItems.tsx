import React, { useEffect } from 'react'
import Image from 'next/image'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  setDeals,
  selectDeals,
  setDealItems,
  selectDealItems,
  setOpenAlert,
} from '../slices/cartSlice'

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
    discount?: number
    discountedPrice?: number
  }[]
}

export default function DealItems({ products }: ProductsProps) {
  const dispatch = useDispatch()

  const activeDealItems = useSelector(selectDealItems)

  const activeDeals = useSelector(selectDeals)

  function addItemToCart(index: number) {
    dispatch(addToCart(activeDealItems[index]))
    dispatch(setOpenAlert(true))
  }

  const MAX_RATING = 50
  
  const MIN_RATING = 10

  function makeNewDealsArray() {
    let array = [...products]

    // first deal
    let indexOne = Math.floor(Math.random() * (3 - 0 + 1)) + 0

    let dealOne = array[indexOne]

    let discount =
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING

    dealOne.discountedPrice = dealOne.price - dealOne.price * (discount / 100)

    dealOne.discount = discount

    dispatch(setDealItems(dealOne))

    // second deal
    let indexTwo = Math.floor(Math.random() * (7 - 4 + 1)) + 4

    let dealTwo = array[indexTwo]

    discount =
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING

    dealTwo.discountedPrice = dealTwo.price - dealTwo.price * (discount / 100)

    dealTwo.discount = discount

    dispatch(setDealItems(dealTwo))

    // third deal
    let indexThree = Math.floor(Math.random() * (11 - 8 + 1)) + 8

    let dealThree = array[indexThree]

    discount =
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING

    dealThree.discountedPrice =
      dealThree.price - dealThree.price * (discount / 100)

    dealThree.discount = discount

    dispatch(setDealItems(dealThree))

    // fourth deal
    let indexFour = Math.floor(Math.random() * (15 - 12 + 1)) + 12

    let dealFour = array[indexFour]

    discount =
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING

    dealFour.discountedPrice =
      dealFour.price - dealFour.price * (discount / 100)

    dealFour.discount = discount

    dispatch(setDealItems(dealFour))

    // fifth deal
    let indexFive = Math.floor(Math.random() * (19 - 16 + 1)) + 16

    let dealFive = array[indexFive]

    discount =
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING

    dealFive.discountedPrice =
      dealFive.price - dealFive.price * (discount / 100)

    dealFive.discount = discount

    dispatch(setDealItems(dealFive))
  }

  //prevents new deal creation on page routing
  useEffect(() => {
    if (!activeDeals) {
      makeNewDealsArray()
    }

    dispatch(setDeals(true))
  }, [])

  return (
    <section className="w-full mt-12 flex flex-col mb-4  ">
      <h1 className="text-2xl sm:text-3xl font-semibold ml-12">Best Deals For You</h1>
      <ScrollContainer
        className="flex w-full gap-x-6 pb-2 overflow-x-scroll scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-show px-4 "
        hideScrollbars={false}
      >
        {activeDealItems.map((item: any, index: number) => (
          <article
            className="flex flex-col w-full h-[380px] gap-1  mt-8 rounded-xl self-center justify-end min-w-[300px] shadow-xl bg-white "
            key={index}
          >
            <div className='flex justify-center h-full w-full relative'>
              <Image
              src={item.image}
              fill
              sizes='100%'
              alt="product image"
              placeholder="blur"
              blurDataURL="/loading-icon.gif"
              className="self-center mb-auto p-4 object-contain"
            />
            </div>
            

            <div className={`flex flex-col  rounded-lg p-1 `}>
              <p className="font-semibold text-medium">{item.title}</p>
              <p className="text-xs line-clamp-2">{item.description}</p>
              <div className="flex gap-x-2 items-center justify-center">
                <p className="text-lg font-bold text-red-600">{`-${item?.discount}%`}</p>
                <p className="line-through text-sm text-slate-500">
                  ${item.price?.toFixed(2)}
                </p>
                <p className="text-lg font font-semibold ">
                  ${item.discountedPrice?.toFixed(2)}
                </p>
              </div>

              <button
                className=" w-28 p-1 rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white"
                onClick={() => addItemToCart(index)}
                aria-label="add to cart"
              >
                add to cart
              </button>
            </div>
          </article>
        ))}
      </ScrollContainer>
    </section>
  )
}
