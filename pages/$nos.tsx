import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import Heading from '../components/Heading'
import Typography from '../components/Typography'

import SimboloNos from '../assets/images/paginas/simbolo-nos.png'
import { FunctionComponent, ReactNode } from 'react'
import Meta from '../layouts/meta'
import Link from 'next/link'

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

const Nos: NextPage = () => {
  const { t } = useTranslation('paginas')

  return (
    <>
      <Meta
        title="Blockchain na Escola - $NOS"
        keywords="Blockchain, Escola, Ensino, Escola Pública, Bitcoin, DAO, Organização"
        description="Página inicial do projeto Blockchain na Escola"
        ogTitle=""
        ogType=""
        ogUrl=""
        ogImage=""
      />
      <div className="container mx-auto text-justify w-full px-6 whitespace-pre-wrap">
        <Heading variant="h2">{t('$nos.title')}</Heading>

        <div className="flex items-center block">
          <Image src={SimboloNos} height={100} width={100} />
        </div>
        <Typography>{t('$nos.content1')}</Typography>
        <Typography>{t('$nos.content2')}</Typography>
        <Typography>{t('$nos.content3')}</Typography>
        <Typography className="font-bold text-purple-500 text-3xl">
          {t('$nos.subtitle1')}
        </Typography>
        <Typography>{t('$nos.content4')}</Typography>
        <Typography>{t('$nos.content5')}</Typography>

        <Typography className="font-bold text-purple-500 text-3xl">
          {t('$nos.subtitle2')}
        </Typography>
        <Typography>{t('$nos.content6')}</Typography>
        <Typography>{t('$nos.content7')}</Typography>

        <Typography className="font-bold text-purple-500 text-3xl">
          {t('$nos.subtitle3')}
        </Typography>
        <Typography>{t('$nos.content8')}
          <span className="inline text-2xl py-3 my-3 text-blue-500 dark:text-gray-50 underline visited:purple-500">
            <Link href={t('$nos.link1')}>{t('$nos.textolink1')}</Link>
          </span>
        </Typography>
        <Typography>{t('$nos.content9')}</Typography>
        <Typography>{t('$nos.content10')}</Typography>

        <Typography className="font-bold text-purple-500 text-3xl">
          {t('$nos.subtitle4')}
        </Typography>
        <Typography>{t('$nos.content11')}</Typography>
        <Typography>{t('$nos.content12')}</Typography>

        <Typography className="font-bold text-purple-500 text-3xl">
          {t('$nos.subtitle5')}
        </Typography>
        <Typography>{t('$nos.content13')}</Typography>
        <Typography>{t('$nos.content14')}</Typography>
        <Typography>{t('$nos.content15')}</Typography>
        <Typography>{t('$nos.content16')}</Typography>
        <Typography>{t('$nos.content17')}</Typography>
        <Typography>
          {t('$nos.content18')}&nbsp;
          <span className="inline text-2xl py-3 my-3 text-blue-500 dark:text-gray-50 underline visited:purple-500">
            <Link href={t('$nos.link2')}>{t('$nos.textolink2')}</Link>
          </span>
        </Typography>
        <Typography>{t('$nos.content19')}</Typography>
      </div>
    </>
  )
}

export default Nos
