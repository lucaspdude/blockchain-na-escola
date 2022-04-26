import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import Heading from '../components/Heading'
import Section from '../components/section'
import Typography from '../components/Typography'
import Meta from '../layouts/meta'
export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale || 'pt-BR', ['common'])),
      // Will be passed to the page component as props
    },
  }
}

const Participe: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <div className="container mx-auto  justify-center w-full px-6">
      <Meta
        title="Blockchain na Escola - Participe"
        keywords="Blockchain, Escola, Ensino, Escola Pública, Bitcoin, DAO, Organização"
        description="Página inicial do projeto Blockchain na Escola"
        ogTitle=""
        ogType=""
        ogUrl=""
        ogImage=""
      />
      <Heading variant="h2">Cursos</Heading>
      <Typography className="text-6xl my-16">
        Parece que a página solicitada não existe
      </Typography>
    </div>
  )
}

export default Participe
