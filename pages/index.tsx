import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'
import ContactForm from '../components/ContactForm'
import TeamCard from '../components/TeamCard'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

import Logo from '../assets/images/logo.svg'

import PictureAriel from '../assets/images/pessoas/ariel.jpg'
import PictureGregory from '../assets/images/pessoas/gregory.jpeg'
import PictureMarcelo from '../assets/images/pessoas/marcelo.jpeg'
import PictureVerber from '../assets/images/pessoas/verber.jpg'
import Meta from '../layouts/meta'
import Partner from '../components/Partner'
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
      <div className="snap-proximity snap-y ">
        <div className="bg-hero2 bg-fixed  bg-no-repeat bg-cover   bg-center snap-center transition-all ease-in-out duration-200 ">
          <div className=" min-h-screen flex  transition-all ease-in-out duration-200 backdrop-blur-sm ">
            <div className="container mx-auto  flex flex-col justify-center px-6 py-12  w-full     ">
              <Image
                src={Logo}
                width={700}
                height={192}
                className="align-start h-96 max-h-96"
              />

              <div className="bg-white/75 backdrop-blur-sm flex items-center justify-center px-6 py-6 mt-6 rounded-tl-2xl rounded-br-2xl shadow-md hover:shadow-2xl transition-all ease-in-out duration-200 backdrop-blur-sm  ">
                <h4 className=" my-3 text-4xl text-purple-500 dark:text-purple-500 font-kreon inline-block ">
                  {t('hero.subtitle')}
                </h4>
              </div>
              {/* <div className="mt-10 md:w-8/12">
                <p className=" whitespace-pre-wrap my-3 text-2xl text-zinc-700 dark:text-white">
                  {t('hero.paragrapho')}
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="bg-slate-200 dark:bg-slate-800 py-12 min-h-screen flex snap-center ">
          <div className="container mx-auto justify-center whitespace-pre-wrap w-full px-6 py-12 my-auto md:grid grid-cols-3 gap-4 grid-rows-2">
            <h3 className=" my-3 text-5xl text-purple-500 dark:text-white font-bold text-decoration-line: underline md:col-start-1 md:text-7xl md:no-underline">
              {t('missao.title')}
            </h3>
            <h4 className=" my-3 text-4xl text-zinc-700 font-kreon dark:text-white md:col-span-2 md:leading-relaxed">
              {t('missao.subtitle')}
            </h4>
            
            <h5 className=" my-3 text-5xl text-purple-500 dark:text-white font-bold text-decoration-line: underline md:row-start-3 md:text-7xl md:no-underline md:">
              {t('missao.title2')}
            </h5>
            <p className=" my-3 text-4xl text-zinc-700 font-kreon dark:text-white md:col-span-2 md:row-start-3 md:leading-relaxed ">
              {t('missao.subtitle2')}
            </p>
          </div>
        </div>

        <div className="bg-green-500 dark:bg-purple-500 py-12 bg-pattern min-h-screen flex snap-center  ">
          <div className="container mx-auto  justify-center w-full px-6 py-12 my-auto ">
            <h3 className=" my-3 text-5xl text-zinc-700 dark:text-white font-bold ">
              {t('cursos.title')}
            </h3>
            <h4 className=" my-3 text-4xl text-zinc-700 font-kreon dark:text-white ">
              {t('cursos.subtitle')}
            </h4>

            <p className=" whitespace-pre-wrap my-3 text-2xl text-zinc-700 dark:text-white md:w-8/12 ">
              {t('cursos.paragrapho')}
            </p>

            <Button onClick={() => handleRedirect('/$nos')} variant="default">
              {t('cursos.readmore')}
            </Button>
          </div>
        </div>

        <div className="bg-gray-200 dark:bg-slate-800 py-12 min-h-screen flex snap-center ">
          <div className="container mx-auto justify-center whitespace-pre-wrap w-full px-6 py-12 my-auto">
            <h3 className=" my-3 text-5xl text-purple-500 dark:text-white font-bold ">
              {t('$nos.title')}
            </h3>

            <h4 className=" my-3 text-4xl text-zinc-700 font-kreon dark:text-white ">
              {t('$nos.subtitle')}
            </h4>

            <p className=" whitespace-pre-wrap my-3 text-2xl text-zinc-700 dark:text-white md:w-8/12 ">
              {t('$nos.paragrapho')}
            </p>
            <p className=" whitespace-pre-wrap mt-6 text-3xl text-zinc-700 dark:text-white md:w-8/12 ">
              {t('$nos.readmore_cta')}
            
            </p>
            <Button onClick={() => handleRedirect('/$nos')} variant="success">
              {t('$nos.readmore')}
            </Button>
          </div>
        </div>

        <div className="min-h-screen flex flex-col snap-center">
          <div className="bg-slate-200 dark:bg-zinc-800 py-12  " id="home-team">
            <div className="container mx-auto  justify-center w-full px-6 py-12 my-auto ">
              <h3 className=" my-3 text-5xl text-purple-500 dark:text-white font-bold ">
                {t('equipe.title')}
              </h3>
              <p className=" whitespace-pre-wrap my-3 text-2xl text-zinc-700 dark:text-white md:w-8/12">
                {t('equipe.subtitle')}
              </p>
            </div>
          </div>
          <div className="bg-slate-300 dark:bg-zinc-900 py-12 ">
            <div className="container mx-auto  justify-center w-full px-6 py-12 my-auto ">
              <div className="grid md:grid-cols-4 gap-6">
                <TeamCard
                  name={t('equipe.card_1.name')}
                  label={t('equipe.card_1.title')}
                  picture={PictureMarcelo}
                  description={t('equipe.card_1.descricao')}
                />
                
                <TeamCard
                  name={t('equipe.card_3.name')}
                  label={t('equipe.card_3.title')}
                  picture={PictureAriel}
                  description={t('equipe.card_3.descricao')}
                
                />

                <TeamCard
                  name={t('equipe.card_2.name')}
                  label={t('equipe.card_2.title')}
                  picture={PictureGregory}
                  description={t('equipe.card_2.descricao')}
                
                />
                <TeamCard
                  name={t('equipe.card_4.name')}
                  label={t('equipe.card_4.title')}
                  picture={PictureVerber}
                  description={t('equipe.card_4.descricao')}
                
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-green-500 dark:bg-purple-500 py-12 bg-pattern min-h-screen flex snap-center "
          id="home-participe"
        >
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
                {t('redes.title')}
              </h3>
              <div className="md:grid md:grid-cols-3 md:gap-3">
                <div className="col-span-1">
                  <a
                    href="https://twitter.com/BlckNaEscola"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className=" whitespace-pre-wrap my-3 text-2xl text-zinc-700 dark:text-white font-bold">
                      Twitter
                    </h4>
                  </a>
                  <a
                    href="https://www.instagram.com/blockchainnaescola/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className=" whitespace-pre-wrap my-3 text-2xl text-zinc-700 dark:text-white font-bold">
                      Instagram
                    </h4>
                  </a>
                    <a href="https://www.linkedin.com/company/blockchain-na-escola/">
                      <h4 className=" whitespace-pre-wrap my-3 text-2xl text-zinc-700 dark:text-white font-bold">
                        LinkedIn
                      </h4>
                    </a>
                </div>
                <div className="col-span-1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-slate-800 py-12 min-h-screen flex snap-center">
          <div className="container mx-auto  justify-center w-full px-6 py-12 my-auto ">
            <h3 className=" my-3 text-5xl text-purple-500 my-6 dark:text-white font-bold ">
              {t('parcerias.title')}
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <Partner
                url="https://celo.org/"
                name="Celo Protocol"
              />
              <Partner
                url="https://www.educarmais.net/"
                name="Educar+"
                alt
              />
              <Partner
                url="https://www.refispring.com/"
                name="ReFi Spring"
                alt
              />
              <Partner url="https://www.play4change.io/" name="Play4Change" />

              
              <Partner url="https://about-players.com.br/" name="Players" alt />
              <Partner url="https://blcktopia.my.canva.site/" name="Blcktopia" />
              <Partner url="https://twitter.com/blu3dao" name="Blu3DAO" />
              <Partner
                url="https://blackleadersdao.webflow.io/"
                name="BlackLeadersDAO"
              />
              <Partner
                url="https://www.instagram.com/docum3ant/"
                name="Docum3ant"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
