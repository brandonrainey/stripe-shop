import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'

type ProductsProps = {
  products: any
}

export default function Products({ products }: ProductsProps) {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      {/* filter bubbles */}
      <div></div>
      <p>All Products</p>
      <div className='w-full self-center grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map((product: any) => (
          <div className='flex justify-center '>
            
            <div className="flex flex-col  w-64 h-80 gap-1 pb-1 mt-8 rounded-xl self-center">
              <Image src={product.image} height={100} width={100} alt='product image'/>
              <p className="font-semibold">product name</p>
              <p className="text-xs">small product description</p>
              <div>stars</div>
              <button className=" w-28 p-1 rounded-2xl self-center border-2 border-black font-semibold text-sm">
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
