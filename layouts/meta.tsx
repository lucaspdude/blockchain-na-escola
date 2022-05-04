import Head from 'next/head'
import { FunctionComponent } from 'react'

import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

export interface MetaProps {
  title: string
  keywords: string
  description: string
  ogTitle: string
  ogType: string
  ogUrl: string
  ogImage: string
}

const Meta: FunctionComponent<MetaProps> = ({
  title,
  keywords,
  description,
  ogTitle,
  ogType,
  ogUrl,
  ogImage,
}) => {
  const router = useRouter()

  console.log(router)
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta charSet="utf-8"></meta>
      <link rel="icon" href="/favicon.ico"></link>
      <title>{title}</title>

      <NextSeo
        title={title}
        description={description}
        canonical="https://www.canonical.ie/"
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://blockchainnaescola.com.br',
          title: title,
          description: description,
          // images: [
          //   {
          //     url: 'https://www.example.ie/og-image-01.jpg',
          //     width: 800,
          //     height: 600,
          //     alt: 'Og Image Alt',
          //     type: 'image/jpeg',
          //   },
          //   {
          //     url: 'https://www.example.ie/og-image-02.jpg',
          //     width: 900,
          //     height: 800,
          //     alt: 'Og Image Alt Second',
          //     type: 'image/jpeg',
          //   },
          //   { url: 'https://www.example.ie/og-image-03.jpg' },
          //   { url: 'https://www.example.ie/og-image-04.jpg' },
          // ],
          site_name: 'Blockchain na Escola',
        }}
        twitter={{
          handle: '@BlckNaEscola',
          site: '@BlckNaEscola',
          cardType: 'summary_large_image',
        }}
      />

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
  )
}

export default Meta
