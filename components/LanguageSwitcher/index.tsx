import { Fragment, FunctionComponent } from 'react'

import { Menu, Transition } from '@headlessui/react'

const LanguageSwitcher: FunctionComponent = () => {
  return (
    <Menu as="div" className="mx-3">
      <Menu.Button>
        <div className="   bg-zinc-700 dark:bg-zinc-800  w-56 text-gray-100 rounded-full px-3 py-2 ">
          Português
        </div>
      </Menu.Button>
      <Menu.Items className="  bg-zinc-700 dark:bg-zinc-800  w-56  flex flex-column absolute mt-2 origin-top-right  text-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
        <div className="py-3  divide-gray-100">
          <Menu.Item>
            <button className="items-center w-full px-5 py-3 text-white hover:bg-zinc-900 text-left ">
              <span>Portugues</span>
            </button>
          </Menu.Item>
          <Menu.Item>
            <button className="items-center w-full px-5 py-3 text-white hover:bg-zinc-900 text-left ">
              <span>Inglês</span>
            </button>
          </Menu.Item>
          <Menu.Item>
            <button className="items-center w-full px-5 py-3 text-white hover:bg-zinc-900 text-left ">
              <span>Espanhol</span>
            </button>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  )
}

export default LanguageSwitcher
