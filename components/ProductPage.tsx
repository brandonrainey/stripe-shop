import React from 'react'

type ProductPageProps = {
  products: any
}

export default function ProductPage({ products }: ProductPageProps) {
  console.log(products)
  return (
    <div className='w-full h-[1500px] flex bg-black/50 absolute z-40 top-0 right-0 bottom-0 left-0 justify-center'>
      <div className='bg-white h-1/2 w-1/2 mt-40'>

      </div>
    </div>
  )
}
