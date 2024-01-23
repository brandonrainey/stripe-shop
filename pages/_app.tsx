import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'
import { SessionProvider as AuthProvider } from 'next-auth/react'
import React, { Suspense } from 'react'
import LoadingHeader from '../components/LoadingHeader'
import { usePageLoading } from '../hooks/usePageLoading'
import OrdersSkeleton from '../components/OrdersSkeleton'
import ProductsSkeleton from '../components/ProductsSkeleton'
import CategorySkeleton from '../components/CategorySkeleton'


export default function App({ Component, pageProps }: AppProps) {
  const { isPageLoading, pageUrl } = usePageLoading()

  return (
    <>
      {isPageLoading ? (
        <AuthProvider session={pageProps.session}>
          <LoadingHeader />
          {pageUrl == '/Products' ? <ProductsSkeleton /> : null}
          {pageUrl == '/orders' ? <OrdersSkeleton /> : null}
          {pageUrl == '/mens' ? <CategorySkeleton category={'Mens'} /> : null}
          {pageUrl == '/womens' ? (
            <CategorySkeleton category={'Womens'} />
          ) : null}
          {pageUrl == '/jewelery' ? (
            <CategorySkeleton category={'Jewelery'} />
          ) : null}
          {pageUrl == '/electronics' ? (
            <CategorySkeleton category={'Electronics'} />
          ) : null}
          {pageUrl == '/deals' ? (
            <CategorySkeleton category={'Your Deals'} />
          ) : null}
        </AuthProvider>
      ) : (
        <AuthProvider session={pageProps.session}>
          <Provider store={store}>
          <Suspense fallback={<div>Loading...</div>}>
              <Component {...pageProps} />
              </Suspense>
          </Provider>
        </AuthProvider>
      )}
    </>
  )
}
