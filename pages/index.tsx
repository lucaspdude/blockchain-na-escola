import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import Section from '../components/section'
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
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
