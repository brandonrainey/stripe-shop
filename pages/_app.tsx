import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'
import { SessionProvider as AuthProvider } from 'next-auth/react'
import React from 'react'
import LoadingHeader from '../components/LoadingHeader'
import LoadingSpinner from '../components/LoadingSpinner'
import { usePageLoading } from '../hooks/usePageLoading'


export default function App({ Component, pageProps }: AppProps) {
  const { isPageLoading } = usePageLoading()

  return (
    <>
      {isPageLoading ? (
        <AuthProvider session={pageProps.session}>
          <LoadingHeader />
          <LoadingSpinner />
        </AuthProvider>
      ) : (
        <AuthProvider session={pageProps.session}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </AuthProvider>
      )}
    </>
  )
}
