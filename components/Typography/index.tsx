import { FunctionComponent, ReactNode } from 'react'

interface TypographyProps {
  children: ReactNode | string
  className?: string
}

const Typography: FunctionComponent<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={`text-2xl py-3 my-3 text-zinc-900 dark:text-gray-50 ${
        className ? className : ''
      }`}
    >
      {children}
    </p>
  )
}

export default Typography
