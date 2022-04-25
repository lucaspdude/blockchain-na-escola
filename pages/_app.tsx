import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../layouts/main.layout'
import { ThemeProvider } from 'next-themes'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
