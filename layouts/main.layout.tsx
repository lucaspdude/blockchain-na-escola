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
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
