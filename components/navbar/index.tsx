import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiMenu, FiX } from 'react-icons/fi'

import Logo from '../../assets/images/logo.svg'
import LanguageSwitcher from '../LanguageSwitcher'
import ThemeSwitcher from '../ThemeSwitcher'

interface NavLinkProps {
  title: string
  route: string
  children?: {
    title: string
    route: string
  }[]
}
const NavLink: FunctionComponent<NavLinkProps> = ({
  title,
  route,
  children,
}) => {
  const router = useRouter()

  return (
    <li>
      <Link href={route}>
        <a
          className={`block py-2  px-3 text-purple  text-lg text-purple-500  dark:text-green-500 uppercase hover:bg-purple-500 hover:text-white hover:rounded-full cursor-pointer transition-all ease-in-out duration-200 ${
            router.asPath === route
              ? 'font-bold border-b-2 dark:border-b-green-500 border-b-purple-500'
              : ''
          }`}
        >
          {title}
        </a>
      </Link>
    </li>
  )
}

const Menu = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <ul className="flex flex-col md:flex-row md:space-x-3 md:text-sm md:font-medium ">
        <NavLink title={t('header.menu.nossos-cursos')} route="/cursos" />
        <NavLink title={t('header.menu.equipe')} route="/#home-team" />
        <NavLink title={t('header.menu.$nos')} route="/$nos" />
        <NavLink title={t('header.menu.o-projeto')} route="/projeto" />
        <NavLink title={t('header.menu.participe')} route="/#home-participe" />
      </ul>
      <div className=" my-6   md:my-auto">
        <LanguageSwitcher />
      </div>
      <div className=" my-6   md:my-auto">
        <ThemeSwitcher />
      </div>
    </>
  )
}

const Navbar: FunctionComponent = () => {
  const [shouldDisplay, setShouldDisplay] = useState<boolean>(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const router = useRouter()
  useEffect(() => {
    if (shouldDisplay) {
      setShouldDisplay(false)
    }
  }, [router])

  return (
    <nav className="bg-green-500 dark:bg-zinc-900  sticky  top-0 w-full z-10 shadow-lg flex items-center justify-center">
      <div className="container flex flex-wrap items-center justify-center   ">
        <div className="flex items-center justify-between w-full md:flex-1 px-6 ">
          <Link href="/">
            <a className="flex items-center py-3 px-0 mx-0 ">
              <Image
                src={Logo}
                alt="logo"
                className=""
                height={63}
                width={179}
              />
            </a>
          </Link>

          <span
            className="cursor-pointer  md:hidden "
            onClick={() => setShouldDisplay(!shouldDisplay)}
          >
            {shouldDisplay ? (
              <FiX color={theme === 'dark' ? '#40e37e' : '#723ad8'} size={36} />
            ) : (
              <FiMenu
                color={theme === 'dark' ? '#40e37e' : '#723ad8'}
                size={36}
              />
            )}
          </span>
        </div>

        <div
          className="mx-auto hidden  justify-end items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <Menu />
        </div>

        <div
          className={`
${shouldDisplay ? ' h-screen origin-top-right' : 'hidden'}
 transition-all ease-in-out duration-200 px-10

  w-full
              
        `}
        >
          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
