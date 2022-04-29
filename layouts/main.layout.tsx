import Head from 'next/head'
import { Children, FunctionComponent, ReactNode } from 'react'
import Navbar from '../components/navbar'
import Script from 'next/script'
import Meta from './meta'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-G3W95J261Q"
      ></Script>

      <Script
        id="google-tag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <div className="flex flex-col ">
        <Navbar />
        <main className=" h-full bg-gray-50 dark:bg-zinc-800 ">
          <div className="   ">{children}</div>
        </main>
        {/* <footer className=" fixed bottom-0 py-3 px-6 text-white bg-purple-500">
          Desenvolvido por lpacheco.tech
        </footer> */}
      </div>
    </>
  )
}

export default MainLayout
