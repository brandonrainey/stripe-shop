import Router from 'next/router'
import { useEffect, useState } from 'react'

export const usePageLoading = () => {
  const [isPageLoading, setIsPageLoading] = useState(false)

  const [areProductsLoading, setAreProductsLoading] = useState(false)

  const [pageUrl, setPageUrl] = useState('')

  useEffect(() => {
    const routeEventStart = (url: any) => {
      setIsPageLoading(true)
      setPageUrl(url)
    }
    const routeEventEnd = () => {
      setIsPageLoading(false)
      setAreProductsLoading(false)
      setPageUrl('')
    }

    Router.events.on('routeChangeStart', routeEventStart)
    Router.events.on('routeChangeComplete', routeEventEnd)
    Router.events.on('routeChangeError', routeEventEnd)
    return () => {
      Router.events.off('routeChangeStart', routeEventStart)
      Router.events.off('routeChangeComplete', routeEventEnd)
      Router.events.off('routeChangeError', routeEventEnd)
    }
  }, [])

  return { isPageLoading, areProductsLoading, pageUrl }
}
