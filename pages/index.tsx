import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import Section from '../components/section'
export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale || 'pt-BR', ['common'])),
      // Will be passed to the page component as props
    },
  }
}

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Section title="titulo" content="lorem" identifier="identifier" />
      <Section title="titulo" content="lorem" identifier="identifier" />
      <Section title="titulo" content="lorem" identifier="identifier" />
      <Section title="titulo" content="lorem" identifier="identifier" />
    </>
  )
}

export default Home
