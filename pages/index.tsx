import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'
import ContactForm from '../components/ContactForm'
import Section from '../components/section'
import TeamCard from '../components/TeamCard'
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
      <div className="bg-hero">
        <div className="container mx-auto  justify-center px-6 py-12  w-full ">
          <h3 className=" my-3 text-5xl text-white font-bold">
            {t('hero.title')}
          </h3>
          <h4 className=" my-3 text-4xl text-white ">{t('hero.subtitle')}</h4>
          <p className=" my-3 text-2xl text-white w-4/6">
            {t('hero.paragrapho')}
          </p>
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
          <p className=" my-3 text-2xl text-zinc-700 dark:text-white md:w-4/6">
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
          <p className=" my-3 text-2xl text-zinc-700 dark:text-white w-4/6">
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
          <h4 className=" my-3 text-4xl text-zinc-700 font-kreon dark:text-white ">
            {t('equipe.subtitle')}
          </h4>
          <p className=" my-3 text-2xl text-zinc-700 dark:text-white w-4/6">
            {t('equipe.paragrapho')}
          </p>
        </div>
      </div>
      <div className="bg-gray-200 dark:bg-zinc-900 py-12 ">
        <div className="container mx-auto  justify-center w-full px-6 py-12 my-auto ">
          <div className="grid md:grid-cols-3 gap-6">
            <TeamCard
              name={t('equipe.card_1.name')}
              label={t('equipe.card_1.title')}
              picture="uashdhuasd"
            />

            <TeamCard
              name={t('equipe.card_2.name')}
              label={t('equipe.card_2.title')}
              picture="uashdhuasd"
            />

            <TeamCard
              name={t('equipe.card_3.name')}
              label={t('equipe.card_3.title')}
              picture="uashdhuasd"
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

          <div className="grid grid-cols-2 gap-3">
            <ContactForm />
            <div></div>
          </div>

          <div className="my-3 py-6">
            <h3 className=" my-3 text-5xl text-zinc-700 dark:text-white font-bold ">
              {t('redes.title')}.
            </h3>
            <div className="grid grid-cols-3 gap-3">
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
