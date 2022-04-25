import { FunctionComponent, ReactNode, useEffect, useState } from 'react'

interface ButtonProps {
  children: ReactNode | string
  variant: 'success' | 'info' | 'danger' | 'default'
  onClick?: () => void
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant,
  onClick,
}) => {
  const [styles, setStyles] = useState<string>(
    'py-3 px-10 bg-purple-500 font-bold text-2xl shadow-lg my-6 rounded-md hover:bg-purple-600 transition-all ease-in-out duration-200'
  )

  useEffect(() => {
    if (variant === 'default') {
      setStyles(
        'py-3 px-10 bg-purple-500 font-bold text-white dark:bg-zinc-900 text-2xl shadow-lg my-6 rounded-md hover:bg-purple-600 transition-all ease-in-out duration-200'
      )
    }
    if (variant === 'success') {
      setStyles(
        'py-3 px-10 bg-green-500 text-purple-500 font-bold text-2xl shadow-lg my-6 rounded-md hover:bg-green-600 transition-all ease-in-out duration-200'
      )
    }

    if (variant === 'info') {
      setStyles(
        'py-3 px-10 bg-purple-500 font-bold text-white dark:bg-zinc-900 text-2xl shadow-lg my-6 rounded-md hover:bg-purple-600 transition-all ease-in-out duration-200'
      )
    }
    if (variant === 'danger') {
      setStyles(
        'py-3 px-10 bg-purple-500 font-bold text-white dark:bg-zinc-900 text-2xl shadow-lg my-6 rounded-md hover:bg-purple-600 transition-all ease-in-out duration-200'
      )
    }
  }, [variant])

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  )
}

export default Button
