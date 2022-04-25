import Head from 'next/head'
import { Children, FunctionComponent, ReactNode } from 'react'
import Navbar from '../components/navbar'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blockchain na Sala de Aula</title>
        <meta name="description" content="Blockchain na sala de aula" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kreon:wght@400;500;700&family=Poppins:ital,wght@0,100;0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col">
        <Navbar />
        <main className=" h-full bg-gray-50 dark:bg-zinc-800 ">
          <div className="    ">{children}</div>
        </main>
        {/* <footer className=" fixed bottom-0 py-3 px-6 text-white bg-purple-500">
          Desenvolvido por lpacheco.tech
        </footer> */}
      </div>
    </>
  )
}

export default MainLayout
