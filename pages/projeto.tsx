import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import Heading from '../components/Heading'
import Section from '../components/section'
import Typography from '../components/Typography'

import PictureAriel from '../assets/images/pessoas/ariel.jpg'
import PictureGregory from '../assets/images/pessoas/gregory.jpeg'
import PictureMarcelo from '../assets/images/pessoas/marcelo.jpeg'
import PictureVerber from '../assets/images/pessoas/verber.jpg'
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

const Projeto: NextPage = () => {
  const { t } = useTranslation('paginas')

  return (
    <>
      <Meta
        title="Blockchain na Escola - Projeto"
        keywords="Blockchain, Escola, Ensino, Escola Pública, Bitcoin, DAO, Organização"
        description="Página inicial do projeto Blockchain na Escola"
        ogTitle=""
        ogType=""
        ogUrl=""
        ogImage=""
      />
      <div className="container mx-auto text-justify w-full px-6 whitespace-pre-wrap">
        <Heading variant="h2">{t('projeto.title')}</Heading>
        <Typography>{t('projeto.part1')}</Typography>
        <p className= "items-baseline text-2xl py-3 my-3 text-zinc-900 dark:text-gray-50">
          {t('projeto.part100')}     
          <span className="inline text-2xl py-3 my-3 text-blue-500 dark:text-gray-50 underline visited:purple-500">
            <Link href={t('projeto.link1')}>{t('projeto.textolink1')}</Link>
          </span> 
          {t('projeto.part101')} 
        </p> 
        
        <Typography className="font-bold text-purple-500 text-3xl">
          {t('projeto.subtitle2')}
        </Typography>

        <p className= "pb-0 text-2xl py-3 my-3 text-zinc-900 dark:text-gray-50">{t('projeto.part2')}</p>
          <ul className="list-disc space-y-2 text-2xl text-zinc-800 dark:bg-zinc-800 dark:text-white px-8 py-3">
            <li>{t('projeto.sucesso.sucesso1')}</li>
            <li>{t('projeto.sucesso.sucesso2')}</li>
            <li>{t('projeto.sucesso.sucesso3')}</li>
            <li>{t('projeto.sucesso.sucesso4')}</li>
          </ul>

        <Typography>{t('projeto.part3')}</Typography>
        {/*<Typography className="font-bold text-purple-500 text-3xl">
          {t('projeto.subtitle3')}
        </Typography>
        <ul className="divide-y text-2xl  text-zinc-900 dark:text-gray-50  mx-6 ">
          <ListItem>{t('projeto.parcerias.parcerias1')}</ListItem>
          <ListItem>{t('projeto.parcerias.parcerias2')}</ListItem>
          <ListItem>{t('projeto.parcerias.parcerias3')}</ListItem>
          <ListItem>{t('projeto.parcerias.parcerias4')}</ListItem>
          <ListItem>{t('projeto.parcerias.parcerias5')}</ListItem>
          <ListItem>{t('projeto.parcerias.parcerias6')}</ListItem>
        </ul>*/} 

        <Typography className="font-bold text-purple-500 text-3xl">
          {t('projeto.subtitle4')}
        </Typography>
        <p className= "pb-0 text-2xl py-3 my-3 text-zinc-900 dark:text-gray-50">{t('projeto.part4')}</p>
          <ul className="list-decimal space-y-2 text-2xl text-zinc-800 dark:bg-zinc-800 dark:text-white px-8 py-3">
            <li>{t('projeto.problematicas.problematica1')}</li>
            <li>{t('projeto.problematicas.problematica2')}</li>
          </ul>
        <p className= "pb-0 items-baseline text-2xl py-3 my-3 text-zinc-900 dark:text-gray-50">
          {t('projeto.part102')} 
          <span className="inline text-2xl py-3 my-3 text-blue-500 dark:text-gray-50 underline visited:purple-500">
            <Link href={t('projeto.link2')}>
              {t('projeto.textolink2')}  
            </Link>
          </span>
        </p>
        <Typography>{t('projeto.part5')}</Typography>

        {/*<Typography className="font-bold text-purple-500 text-3xl">
          {t('projeto.subtitle5')}
        </Typography>
        <Typography>{t('projeto.part5')}</Typography>
      */}
        <Typography className="font-bold text-purple-500 text-3xl">
          {t('projeto.subtitle6')}
        </Typography>
        <p className= "pb-0 inline-flex items-baseline underline text-2xl py-3 my-3 text-zinc-900 dark:text-gray-50">
          {t('projeto.part7')}
        </p>
        <ul className="divide-y text-2xl text-zinc-900 dark:text-gray-50  mx-6 ">
          <ListItem>{t('projeto.goals1.goal1')}</ListItem>
          <ListItem>{t('projeto.goals1.goal2')}</ListItem>
          <ListItem>{t('projeto.goals1.goal3')}</ListItem>
          <ListItem>{t('projeto.goals1.goal4')}</ListItem>
          <ListItem>{t('projeto.goals1.goal5')}</ListItem>
          <ListItem>{t('projeto.goals1.goal6')}</ListItem>
          <ListItem>{t('projeto.goals1.goal7')}</ListItem>
          <ListItem>{t('projeto.goals1.goal8')}</ListItem>
          <ListItem>{t('projeto.goals1.goal9')}</ListItem>
          <ListItem>{t('projeto.goals1.goal10')}</ListItem>
        </ul>
        <p className= "pb-0 inline-flex items-baseline underline text-2xl py-3 my-3 text-zinc-900 dark:text-gray-50">
          {t('projeto.part8')}
        </p>
        
        <ul className="divide-y text-2xl  text-zinc-900 dark:text-gray-50  mx-6 ">
          <ListItem>{t('projeto.goals2.goal1')}</ListItem>
          <ListItem>{t('projeto.goals2.goal2')}</ListItem>
          <ListItem>{t('projeto.goals2.goal3')}</ListItem>
          <ListItem>{t('projeto.goals2.goal4')}</ListItem>
          <ListItem>{t('projeto.goals2.goal5')}</ListItem>
          <ListItem>{t('projeto.goals2.goal6')}</ListItem>
        </ul>
        
        <Typography className="font-bold text-purple-500 text-3xl">
          {t('projeto.subtitle7')}
        </Typography>
        <p className= "pb-0 inline-flex items-baseline underline text-2xl py-3 my-3 text-zinc-900 dark:text-gray-50">
          {t('projeto.part7')}
        </p>
        
        <ul className="divide-y text-2xl  text-zinc-900 dark:text-gray-50  mx-6 ">
          <ListItem>{t('projeto.goals3.goal1')}</ListItem>
          <ListItem>{t('projeto.goals3.goal2')}</ListItem>
          <ListItem>{t('projeto.goals3.goal3')}</ListItem>
          <ListItem>{t('projeto.goals3.goal4')}</ListItem>
          <ListItem>{t('projeto.goals3.goal5')}</ListItem>
        </ul>

        <p className= "pb-0 inline-flex underline items-baseline text-2xl py-3 my-3 text-zinc-900 dark:text-gray-50">
          {t('projeto.part8')}
        </p>
        
        <ul className="divide-y text-2xl  text-zinc-900 dark:text-gray-50  mx-6 ">
          <ListItem>{t('projeto.goals4.goal2')}</ListItem>
          <ListItem>{t('projeto.goals4.goal3')}</ListItem>
          <ListItem>{t('projeto.goals4.goal4')}</ListItem>
          <ListItem>{t('projeto.goals4.goal5')}</ListItem>
          <ListItem>{t('projeto.goals4.goal6')}</ListItem>
          <ListItem>{t('projeto.goals4.goal7')}</ListItem>
        </ul>

        {/*<Typography className="font-bold text-purple-500 text-3xl">
          {t('projeto.subtitle8')}
        </Typography>

        <div className="divide-y">
          <div>
            <Typography className="font-bold text-purple-500 text-2xl">
              {t('projeto.mandatos.mandato1.title')}
            </Typography>
            <Typography className="">
              {t('projeto.mandatos.mandato1.descricao')}
            </Typography>
            <Typography className="">
              {t('projeto.mandatos.mandato1.entregaveis')}
            </Typography>
          </div>
          <div>
            <Typography className="font-bold text-purple-500 text-2xl">
              {t('projeto.mandatos.mandato2.title')}
            </Typography>
            <Typography className="">
              {t('projeto.mandatos.mandato2.descricao')}
            </Typography>
            <Typography className="">
              {t('projeto.mandatos.mandato2.entregaveis')}
            </Typography>
          </div>
          <div>
            <Typography className="font-bold text-purple-500 text-2xl">
              {t('projeto.mandatos.mandato3.title')}
            </Typography>
            <Typography className="">
              {t('projeto.mandatos.mandato3.descricao')}
            </Typography>
            <Typography className="">
              {t('projeto.mandatos.mandato3.entregaveis')}
            </Typography>
          </div>
        </div>
        */}
        <Typography className="font-bold text-purple-500 text-3xl">
          {t('projeto.subtitle9')}
        </Typography>
        <div className="flex flex-col items-center my-3 lg:flex lg:flex-row lg:items-center lg:justify-start">
          <Image
            src={PictureAriel}
            alt={`Governor Ariel`}
            height={150}
            width={150}
            className="rounded-full mx-3 h-48 w-48 "
          />
          <Typography className="mx-3">{t('projeto.governor1')}</Typography>
        </div>

        <div className="flex flex-col items-center my-3 lg:flex lg:flex-row lg:items-center lg:justify-start">
          <Image
            src={PictureMarcelo}
            alt={`Governor Marcelo`}
            height={150}
            width={150}
            className="rounded-full mx-3 h-48 w-48 "
          />
          <Typography className="mx-3">{t('projeto.governor2')}</Typography>
        </div>

        <div className="flex flex-col items-center lg:flex lg:flex-row lg:items-center lg:justify-start">
          <Image
            src={PictureGregory}
            alt={'Governor Gregory'}
            height={150}
            width={150}
            className="rounded-full h-48 w-48 "
          />
          <Typography className="mx-3">{t('projeto.governor3')}</Typography>
        </div>

        <div className="flex flex-col items-center my-3 lg:flex lg:flex-row lg:items-center lg:justify-start">
          <Image
            src={PictureVerber}
            alt={`Governor Verber`}
            height={150}
            width={150}
            className="rounded-full mx-3 h-48 w-48 "
          />
          <Typography className="mx-3">{t('projeto.governor4')}</Typography>
        </div>

        <Typography className="font-bold text-purple-500 text-3xl">
          {t('projeto.subtitle10')}
        </Typography>
        <ul className="divide-y text-2xl  text-zinc-900 dark:text-gray-50  mx-6 ">
          <ListItem>{t('projeto.colaboradores.colaborador2')}</ListItem>
          <ListItem>{t('projeto.colaboradores.colaborador1')}</ListItem>
          <ListItem>{t('projeto.colaboradores.colaborador3')}</ListItem>
          {/*   <ListItem>{t('projeto.colaboradores.colaborador4')}</ListItem>
          <ListItem>{t('projeto.colaboradores.colaborador5')}</ListItem>
          <ListItem>{t('projeto.colaboradores.colaborador6')}</ListItem>
          <ListItem>{t('projeto.colaboradores.colaborador7')}</ListItem>
          <ListItem>{t('projeto.colaboradores.colaborador8')}</ListItem>
          */}&nbsp;
        </ul>
        {/* 
        <Typography className="font-bold text-purple-500 text-3xl">
          {t('projeto.subtitle11')}
        </Typography>
        <Typography>{t('projeto.part11')}</Typography>

        <Typography className="font-bold text-purple-500 text-3xl">
          {t('projeto.subtitle12')}
        </Typography>

        <ul className="divide-y text-2xl  text-zinc-900 dark:text-gray-50  mx-6 ">
          <ListItem>{t('projeto.metricas.metrica1')}</ListItem>
          <ListItem>{t('projeto.metricas.metrica2')}</ListItem>
          <ListItem>{t('projeto.metricas.metrica3')}</ListItem>
          <ListItem>{t('projeto.metricas.metrica4')}</ListItem>
          <ListItem>{t('projeto.metricas.metrica5')}</ListItem>
          <ListItem>{t('projeto.metricas.metrica6')}</ListItem>
          <ListItem>{t('projeto.metricas.metrica7')}</ListItem>
          <ListItem>{t('projeto.metricas.metrica8')}</ListItem>
        </ul>*/}
      </div>
    </>
  )
}

export default Projeto
