import react, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Categories from '../components/Categories'
import Deals from '../components/DealItems'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import Alert from '../components/Alert'

type ProductsProps = {
  products: any
}

export default function Home({ products }: ProductsProps) {
  


  return (
    <div className='relative'>
      <Header products={products}/>
      <HeroBanner />
      <div className="sm:px-14 px-4">
        <Categories products={products} />
        <Deals products={products} />
      </div>
      <Alert />
      
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
