import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import Heading from '../components/Heading'
import Section from '../components/section'
import Typography from '../components/Typography'

import PictureLucas from '../assets/images/pessoas/lucas.jpeg'
import PictureMariana from '../assets/images/pessoas/mariana.jpeg'
import PictureMarcelo from '../assets/images/pessoas/marcelo.jpeg'
import { FunctionComponent, ReactNode } from 'react'
import Meta from '../layouts/meta'

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale || 'pt-BR', [
        'common',
        'paginas',
      ])),
      // Will be passed to the page component as props
    },
  }
}

interface ListItemProps {
  children: ReactNode
}
const ListItem: FunctionComponent<ListItemProps> = ({ children }) => {
  return (
    <li className="text-zinc-800 dark:bg-zinc-800 dark:text-white px-6 py-3   hover:shadow-2xl dark:hover:bg-purple-500 hover:bg-yellow-300 transition-all ease-in-out duration-200">
      {children}
    </li>
  )
}

const Cursos: NextPage = () => {
  const { t } = useTranslation('paginas')

  return (
    <>
      <Meta
        title="Blockchain na Escola - Cursos"
        keywords="Blockchain, Escola, Ensino, Escola Pública, Bitcoin, DAO, Organização"
        description="Página inicial do projeto Blockchain na Escola"
        ogTitle=""
        ogType=""
        ogUrl=""
        ogImage=""
      />
      <div className="container mx-auto  justify-center w-full px-6 whitespace-pre-wrap">
        <Heading variant="h2">{t('cursos.title')}</Heading>

        <ul className="divide-y text-2xl  text-zinc-900 dark:text-gray-50  mx-6 ">
          <ListItem>{t('cursos.curso1')}</ListItem>
          <ListItem>{t('cursos.curso2')}</ListItem>
          <ListItem>{t('cursos.curso3')}</ListItem>
          <ListItem>{t('cursos.curso4')}</ListItem>
          <ListItem>{t('cursos.curso5')}</ListItem>
          <ListItem>{t('cursos.curso6')}</ListItem>
          <ListItem>{t('cursos.curso7')}</ListItem>
          <ListItem>{t('cursos.curso8')}</ListItem>
          <ListItem>{t('cursos.curso9')}</ListItem>
          <ListItem>{t('cursos.curso10')}</ListItem>
        </ul>
      </div>
    </>
  )
}

export default Cursos
