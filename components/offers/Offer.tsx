import { type Field, type Location } from '@prisma/client'
import Card from '../Card'

type Props = React.PropsWithChildren<{
  id: string
  title: string
  categories: Field[]
  description: string
  owner: string
  location: Location
}>

export default function Offer({
  id,
  title,
  categories,
  description,
  owner,
  location,
}: Props) {
  return (
    <section className="mb-4 break-inside-avoid">
      <div className="rounded-xl border border-solid border-zinc-300 bg-white shadow">
        <Card
          id={id}
          title={title}
          categories={categories}
          description={description}
          owner={owner}
          location={location}
        />
      </div>
    </section>
  )
}
