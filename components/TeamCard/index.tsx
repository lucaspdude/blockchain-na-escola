import Image from 'next/image'
import { FunctionComponent, ReactNode, useState } from 'react'
import { FiInfo, FiUser, FiX } from 'react-icons/fi'

import { StaticImageData } from 'next/image'

interface TeamCardProps {
  name: string
  label: string
  picture: StaticImageData
  description: string
}
const TeamCard: FunctionComponent<TeamCardProps> = ({
  name,
  label,
  picture,
  description,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <div
      className="cursos-pointer min-h-96 bg-gray-50 mx-3 my-3 py-6 px-6 text-zinc-800 dark:bg-zinc-800 dark:text-white team-card-container  shadow-md hover:shadow-2xl dark:hover:bg-purple-500 hover:bg-yellow-300 transition-all ease-in-out duration-200 "
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex justify-end">
        {isActive ? (
          <FiX onClick={() => setIsActive(false)} />
        ) : (
          <FiInfo onClick={() => setIsActive(true)} />
        )}
      </div>

      {isActive ? (
        <div className="flex flex-col items-center transition-all ease-in-out duration-200 ">
          <p className="text-xl font-medium text-zinc-800 dark:text-white">
            {description}
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center transition-all ease-in-out duration-200">
          <Image
            src={picture}
            alt={`${name} - ${label}`}
            height={150}
            width={150}
            className="rounded-full z-0 "
          />
          <h4 className="font-kreon text-3xl font-light my-6">{name}</h4>
          <div className="team-card-function no-wrap text-xl bg-zinc-800 dark:bg-zinc-700 w-full mx-3 py-3 text-white flex items-center justify-center my-6">
            {label}
          </div>
        </div>
      )}
    </div>
  )
}

export default TeamCard
