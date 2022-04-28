import { FunctionComponent } from 'react'

interface PartnerProps {
  url: string
  name: string
  alt?: boolean
}

const Partner: FunctionComponent<PartnerProps> = ({ url, name, alt }) => {
  return (
    <div
      className="
      border-4
      px-6 py-6 flex items-center justify-center text-2xl font-bold font-kreon h-56 md:h-36 cursor-pointer   
      transition-all ease-in-out duration-200 rounded-md
      border-gray-200 hover:text-zinc-800 hover:shadow-lg dark:hover:bg-purple-500 hover:bg-yellow-300
      hover:text-4xl
      break-all
      "
    >
      <a href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
  )
}

export default Partner
