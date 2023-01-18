import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
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

export default function Category({ products }: ProductsProps) {
  const router = useRouter()

  const { category } = router.query

  const [categoryArray, setCategoryArray] = useState([])

  const dispatch = useDispatch()

  function addItemToCart(index: number) {
    dispatch(addToCart(categoryArray[index]))
    dispatch(setOpenAlert(true))
  }

  //sets route to string variable to filter products
  useEffect(() => {
    let name = ''
    switch (category) {
      case 'mens':
        name = "men's clothing"
        break
      case 'womens':
        name = "women's clothing"
        break
      case 'jewelery':
        name = 'jewelery'
        break
      case 'electronics':
        name = 'electronics'
        break
    }
    let array: any = products.filter((product: any) => product.category == name)

    setCategoryArray(array)
  }, [category])

  return (
    <div>
      <Header products={products} />
      <h1 className="text-3xl font-bold pl-6 pt-6 capitalize">{category}</h1>
      <div className="w-full self-center gap-y-4 gap-x-4 px-4 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categoryArray.map((product: any, index: number) => (
          <article className="flex justify-center " key={index}>
            <div className="flex flex-col  w-full h-96 gap-1  pb-1 mt-8 rounded-xl self-center justify-end ">
              <div className="w-full h-full flex justify-center bg-white">
                <Image
                  src={product.image}
                  height={120}
                  width={120}
                  alt="product image"
                  placeholder="blur"
                  blurDataURL="/loading-icon.gif"
                  className="self-center w-auto h-auto"
                />
              </div>
              <div className="flex flex-col bg-[#f6f6f6] p-1 rounded-lg">
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: 'mens' } },
      { params: { category: 'womens' } },
      { params: { category: 'jewelery' } },
      { params: { category: 'electronics' } },
    ],
    fallback: false, // can also be true or 'blocking'
  }
}
