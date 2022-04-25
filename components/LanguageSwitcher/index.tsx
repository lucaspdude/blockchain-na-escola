import { Fragment, FunctionComponent, useEffect, useState } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

const LanguageSwitcher: FunctionComponent = () => {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  const languages = router.locales

  const [currentLang, setCurrentLang] = useState<'pt' | 'en' | 'es'>('pt')

  const displayLang = () => {
    switch (currentLang) {
      case 'en':
        return t('header.idiomas.ingles')
      case 'es':
        return t('header.idiomas.espanhol')
      case 'pt':
        return t('header.idiomas.portugues')
    }
  }

  useEffect(() => {
    const localStorageHasLanguage = localStorage.getItem('@blockchain.lang')

    if (localStorageHasLanguage) {
      const parsedLanguage = JSON.parse(localStorageHasLanguage)
      setCurrentLang(parsedLanguage)
    }
  }, [])

  const handleSwithLanguage = (language: string) => {
    i18n.changeLanguage(language)
    setCurrentLang(language)
    localStorage.setItem('@blockchain.lang', JSON.stringify(language))
    router.push(router.route, router.route, { locale: language })
  }

  return (
    <Menu as="div" className="mx-3">
      <Menu.Button>
        <div className="   bg-zinc-700 dark:bg-zinc-800  w-56 text-gray-100 rounded-full px-3 py-2 ">
          {displayLang()}
        </div>
      </Menu.Button>
      <Menu.Items className="  bg-zinc-700 dark:bg-zinc-800  w-56  flex flex-column absolute mt-2 origin-top-right  text-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
        <div className="py-3  divide-gray-100">
          <Menu.Item>
            <button
              onClick={() => handleSwithLanguage('pt')}
              className="items-center w-full px-5 py-3 text-white hover:bg-zinc-900 text-left "
            >
              <span>{t('header.idiomas.portugues')}</span>
            </button>
          </Menu.Item>
          <Menu.Item>
            <button
              onClick={() => handleSwithLanguage('en')}
              className="items-center w-full px-5 py-3 text-white hover:bg-zinc-900 text-left "
            >
              <span>{t('header.idiomas.ingles')}</span>
            </button>
          </Menu.Item>
          <Menu.Item>
            <button
              onClick={() => handleSwithLanguage('es')}
              className="items-center w-full px-5 py-3 text-white hover:bg-zinc-900 text-left "
            >
              <span>{t('header.idiomas.espanhol')}</span>
            </button>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  )
}

export default LanguageSwitcher
