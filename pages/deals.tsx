import React from 'react'
import { selectDealItems, addToCart } from '../slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/Header'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'


const MAX_RATING = 5
const MIN_RATING = 1

type DealsProps = {
  products: any
}

export default function Deals({ products }: DealsProps) {
  const dispatch = useDispatch()
  const deals = useSelector(selectDealItems)

  function addItemToCart(index: any) {
    dispatch(addToCart(deals[index]))
  }

  console.log(products)

  //1girl, bare shoulders, blue tongue, breasts, breath, colored tongue, glowing, grey background, hair between eyes, holding, large breasts, long hair, long tongue, open mouth, pointy ears, saliva, saliva trail, simple background, solo, tongue, snake

  return (
    <div>
      <Header products={products}/>
      <p className="text-3xl font-bold pl-6 pt-6 capitalize">Your Deals</p>
      <div className="w-full self-center gap-y-4 gap-x-4 px-4 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {deals.map((product: any, index: any) => (
          <div className="flex justify-center " key={index}>
            <div className="flex flex-col  w-full h-96 gap-1  pb-1 mt-8 rounded-xl self-center justify-end ">
              <div className="w-full h-full flex justify-center bg-white">
                <Image
                  src={product.image}
                  height={120}
                  width={120}
                  alt="product image"
                  className="self-center "
                />
              </div>
              <div className="flex flex-col bg-[#f6f6f6] p-1 rounded-lg">
                <div className="flex w-full  ">
                  <p className="font-semibold text-medium mr-6">
                    {product.title}
                  </p>
                  <div className="flex flex-col ml-auto">
                    <p className="ml-auto text-2xl font-bold">
                      ${product.discountedPrice.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-bold text-red-600">{`-${product?.discount}%`}</p>
                      <p className="line-through text-sm text-slate-500">
                        ${product.price?.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs line-clamp-2 ">{product.description}</p>
                <div className="flex ">
                  {Array(
                    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) +
                      MIN_RATING
                  )
                    .fill(undefined)
                    .map((_, index) => (
                      <StarIcon className="h-5 text-yellow-300" key={index}/>
                    ))}
                </div>

                <button
                  className=" w-28 p-1 bg-white rounded-2xl self-center border-2 border-black font-semibold text-sm hover:bg-black hover:text-white"
                  onClick={() => addItemToCart(index)}
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
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
