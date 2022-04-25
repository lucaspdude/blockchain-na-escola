import { FunctionComponent } from 'react'

interface SectionProps {
  content: string
  identifier: string
  title?: string
}

const Section: FunctionComponent<SectionProps> = ({
  content,
  identifier,
  title,
}) => {
  return (
    <div className="h-full px-5 py-12 flex items-center justify-center border border-red-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis alias
      reprehenderit odio, necessitatibus quae iusto quam rerum inventore
      architecto sit dolores neque asperiores totam itaque aliquam velit
      molestias ea? Excepturi.
    </div>
  )
}

export default Section
