import Head from 'next/head'
import Categories from '../components/Categories'
import Deals from '../components/DealItems'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import Alert from '../components/Alert'

interface ProductsProps {
  error: boolean
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

export default function Home({ products, error }: ProductsProps) {
  return (
    <div className="relative  bg-slate-100 font-NotoSans">
      <Head>
        <title>Stripe-Shop</title>
        <meta name="description" content="ecommerce stripe shop" />
        
      </Head>
      {error ? (
        <div>Error fetching data from API</div>
      ) : (
        <>
          <Header products={products} />
          <HeroBanner />
          <main className="sm:px-14 px-4">
            <Categories />
            <Deals products={products} />
          </main>
          <Alert />
        </>
      )}
    </div>
  )
}

export async function getStaticProps(context: any) {
  try {
    const response = await fetch('https://fakestoreapi.com/products')

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(
        `Error fetching data: HTTP ${response.status} ${response.statusText}`
      )
    }

    const products = await response.json()

    return {
      props: {
        products,
      },
    }
  } catch (error) {
    console.error('Error fetching products:', error)

    // Return an error status or fallback value
    return {
      props: {
        products: [], // Fallback empty array
        error: true,
      },
    }
  }
}
