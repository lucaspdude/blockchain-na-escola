import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'
import ContactForm from '../components/ContactForm'
import Section from '../components/section'
import TeamCard from '../components/TeamCard'
import Logo from '../assets/images/logo.svg'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

import PictureLucas from '../assets/images/pessoas/lucas.jpeg'
import PictureMariana from '../assets/images/pessoas/mariana.jpeg'
import PictureMarcelo from '../assets/images/pessoas/marcelo.jpeg'
import { useEffect } from 'react'
import Meta from '../layouts/meta'
import Image from 'next/image'
export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale || 'pt-BR', [
        'common',
        'home',
      ])),
      // Will be passed to the page component as props
    },
  }
}

const Home: NextPage = () => {
  const { t } = useTranslation('home')

  const router = useRouter()

  const handleRedirect = (route: string) => {
    router.push(route)
  }

  return (
    <>
      <Meta
        title="Blockchain na Escola - Início"
        keywords="Blockchain, Escola, Ensino, Escola Pública, Bitcoin, DAO, Organização"
        description="Página inicial do projeto Blockchain na Escola"
        ogTitle=""
        ogType=""
        ogUrl=""
        ogImage=""
      />
      <div className="bg-hero bg-fixed  bg-no-repeat bg-cover bg-center">
        <div className="container mx-auto  justify-center px-6 py-12  w-full ">
          {/* <h3 className=" my-3 text-5xl text-white bg-purple-500 inline-block px-6 py-3 font-bold hover:shadow-lg">
            {t('hero.title')}
          </h3> */}
          <Image src={Logo} alt="logo" className="" height={189} width={537} />
          <br />
          <h4 className=" my-3 text-4xl text-purple-500 bg-white inline-block  px-3 py-3">
            {t('hero.subtitle')}
          </h4>
          <p className=" my-3 text-2xl text-white">{t('hero.paragrapho')}</p>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-zinc-800 py-12 " id="home-team">
        <div className="container mx-auto  justify-center w-full px-6 py-12 my-auto ">
          <h3 className=" my-3 text-5xl text-purple-500 dark:text-white font-bold ">
            {t('$nos.title')}
          </h3>
          <h4 className=" my-3 text-4xl text-zinc-700 font-kreon dark:text-white ">
            {t('$nos.subtitle')}
          </h4>
          <p className=" my-3 text-2xl text-zinc-700 dark:text-white ">
            {t('$nos.paragrapho')}
          </p>
          <Button onClick={() => handleRedirect('/$nos')} variant="success">
            {t('$nos.readmore')}
          </Button>
        </div>
      </div>
      <div className="bg-green-500 dark:bg-purple-500 py-12 bg-pattern ">
        <div className="container mx-auto  justify-center w-full px-6 py-12 my-auto ">
          <h3 className=" my-3 text-5xl text-zinc-700 dark:text-white font-bold ">
            {t('cursos.title')}
          </h3>
          <h4 className=" my-3 text-4xl text-zinc-700 font-kreon dark:text-white ">
            {t('cursos.subtitle')}
          </h4>
          <p className=" my-3 text-2xl text-zinc-700 dark:text-white">
            {t('cursos.paragrapho')}
          </p>
          <Button onClick={() => handleRedirect('/cursos')} variant="default">
            {t('cursos.readmore')}
          </Button>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-zinc-800 py-12 ">
        <div className="container mx-auto  justify-center w-full px-6 py-12 my-auto ">
          <h3 className=" my-3 text-5xl text-purple-500 dark:text-white font-bold ">
            {t('equipe.title')}
          </h3>
          <p className=" my-3 text-2xl text-zinc-700 dark:text-white">
            {t('equipe.subtitle')}
          </p>
        </div>
      </div>
      <div className="bg-gray-200 dark:bg-zinc-900 py-12 ">
        <div className="container mx-auto  justify-center w-full px-6 py-12 my-auto ">
          <div className="grid md:grid-cols-3 gap-6">
            <TeamCard
              name={t('equipe.card_1.name')}
              label={t('equipe.card_1.title')}
              picture={PictureMarcelo}
              description={t('equipe.card_1.descricao')}
            />

            <TeamCard
              name={t('equipe.card_2.name')}
              label={t('equipe.card_2.title')}
              picture={PictureMariana}
              description={t('equipe.card_2.descricao')}
            />

            <TeamCard
              name={t('equipe.card_3.name')}
              label={t('equipe.card_3.title')}
              picture={PictureLucas}
              description={t('equipe.card_3.descricao')}
            />
          </div>
        </div>
      </div>

      <div className="bg-green-500 dark:bg-purple-500 py-12 bg-pattern ">
        <div className="container mx-auto  justify-center w-full px-6 py-12 my-auto ">
          <h3 className=" my-3 text-5xl text-zinc-700 dark:text-white font-bold ">
            {t('contato.title')}
          </h3>
          <h4 className=" my-3 text-3xl text-zinc-700 font-kreon dark:text-white ">
            {t('contato.subtitle')}.
          </h4>

          <div className="md:grid md:grid-cols-2 md:gap-6">
            <ContactForm />

            <div className="px-3 my-6">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="BlckNaEscola"
                options={{ height: 400 }}
              />
            </div>
          </div>

          <div className="my-3 py-6">
            <h3 className=" my-3 text-5xl text-zinc-700 dark:text-white font-bold ">
              {t('redes.title')}.
            </h3>
            <div className="md:grid md:grid-cols-3 md:gap-3">
              <div className="col-span-1">
                <h4 className=" my-3 text-2xl text-zinc-700 dark:text-white font-bold">
                  Linkedin
                </h4>
                <h4 className=" my-3 text-2xl text-zinc-700 dark:text-white font-bold">
                  Facebook
                </h4>
                <h4 className=" my-3 text-2xl text-zinc-700 dark:text-white font-bold">
                  Twitter
                </h4>
              </div>
              <div className="col-span-1">
                <h4 className=" my-3 text-2xl text-zinc-700 dark:text-white font-bold">
                  Instagram
                </h4>
                <h4 className=" my-3 text-2xl text-zinc-700 dark:text-white font-bold">
                  Reddit
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-zinc-800 py-12 ">
        <div className="container mx-auto  justify-center w-full px-6 py-12 my-auto ">
          <h3 className=" my-3 text-5xl text-purple-500 dark:text-white font-bold ">
            {t('parcerias.title')}
          </h3>

          <p className=" my-3 text-2xl text-zinc-700 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            architecto veritatis consequatur veniam eius officia?
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
