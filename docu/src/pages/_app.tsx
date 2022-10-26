// import './../styles/tailwind-import.css'

import '../../node_modules/@vermorxt/pandora_ui/dist/cjs/index.css'
import './../styles/main.scss'
import nextI18nextConfig from './../../next-i18next.config'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { GlobalContextProvider } from '../system'
import ContentLoading from '../components/ContentLoading'
import { LayoutProvider } from '../layout/LayoutProvider'

const CmsApp = ({ Component, pageProps }: AppProps & { Component: any }) => {
  const [contentLoaded, setContentLoaded] = useState(false)

  const router = useRouter()

  useEffect(() => {
    console.log('page props: ', pageProps)

    setContentLoaded(true)
  }, [])

  if (contentLoaded) {
    return (
      <GlobalContextProvider>
        <ThemeProvider>
          <LayoutProvider>
            <Component {...pageProps} key={router.asPath} />
          </LayoutProvider>
        </ThemeProvider>
      </GlobalContextProvider>
    )
  }

  return <ContentLoading />
}

export default appWithTranslation(CmsApp, nextI18nextConfig)
