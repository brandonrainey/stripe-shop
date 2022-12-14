import Head from 'next/head'
import Categories from '../components/Categories'
import Deals from '../components/DealItems'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
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

export default function Home({ products }: ProductsProps) {
  return (
    <div className="relative">
      <Head>
        <title>Stripe-Shop</title>
        <meta name="description" content="ecommerce stripe shop" />
      </Head>
      <Header products={products} />
      <HeroBanner />
      <main className="sm:px-14 px-4">
        <Categories />
        <Deals products={products} />
      </main>
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
