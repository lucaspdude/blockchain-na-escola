import { FunctionComponent, ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode | string
  variant: 'h1' | 'h2' | 'h3'
}

const Heading: FunctionComponent<HeadingProps> = ({ children, variant }) => {
  switch (variant) {
    case 'h1': {
      return (
        <h1 className="text-5xl font-bold py-3 my-3 bg-purple-500 text-white dark:bg-zinc-900 dark:text-white inline-block px-6">
          {children}
        </h1>
      )
    }
    case 'h2': {
      return (
        <h2 className="text-4xl font-bold py-3 my-3 bg-purple-500 text-white dark:bg-zinc-900 dark:text-white inline-block px-6">
          {children}
        </h2>
      )
    }
    case 'h3': {
      return (
        <h3 className="text-3xl font-bold py-3 my-3 bg-purple-500 text-white dark:bg-zinc-900 dark:text-white inline-block px-6">
          {children}
        </h3>
      )
    }
    default: {
      return (
        <h3 className="text-3xl font-bold py-3 my-3 bg-purple-500 text-white dark:bg-zinc-900 dark:text-white inline-block px-6">
          {children}
        </h3>
      )
    }
  }
}

export default Heading
