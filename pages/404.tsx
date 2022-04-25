import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Heading from '../components/Heading'
import Typography from '../components/Typography'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'

import { useTranslation } from 'next-i18next'
import Button from '../components/Button'
export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale || 'pt-BR', ['common'])),
      // Will be passed to the page component as props
    },
  }
}

const Custom404: NextPage = () => {
  const { t } = useTranslation('common')

  const router = useRouter()

  return (
    <div className="h-full w-full  flex flex-col items-center justify-center py-16 ">
      <Heading variant="h2">404</Heading>

      <Typography className="text-6xl my-16">
        Parece que a página solicitada não existe
      </Typography>

      <Button onClick={() => router.push('/')} variant="default">
        Ir para o Início
      </Button>
    </div>
  )
}

export default Custom404
