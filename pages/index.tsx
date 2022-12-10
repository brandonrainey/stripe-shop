import Head from 'next/head'
import Image from 'next/image'
import Categories from '../components/Categories'
import Deals from '../components/DealItems'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import dynamic from 'next/dynamic'
import ProductPage from '../components/ProductPage'

type ProductsProps = {
  products: any
}

export default function Home({ products }: ProductsProps) {
  return (
    <div className=''>
      <Header products={products}/>
      <HeroBanner />
      <div className="sm:px-14 px-4">
        <Categories products={products} />
        <Deals products={products} />
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
