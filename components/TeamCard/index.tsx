import { FunctionComponent } from 'react'
import { FiUser } from 'react-icons/fi'

interface TeamCardProps {
  name: string
  label: string
  picture: string
}
const TeamCard: FunctionComponent<TeamCardProps> = ({ name, label }) => {
  return (
    <div className="bg-gray-50 mx-3 my-3 py-6 px-6 text-zinc-800   team-card-container flex flex-col items-center shadow-lg">
      <FiUser size={150} />
      <h4 className="font-kreon text-2xl font-light my-6">{name}</h4>
      <div className="team-card-function bg-zinc-800 w-full mx-3  py-3 text-white flex items-center justify-center my-6">
        {label}
      </div>
    </div>
  )
}

export default TeamCard
