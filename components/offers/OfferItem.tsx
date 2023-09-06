import { type Location, type Category, type Company } from '@prisma/client'
import Card from '../Card'

type Props = React.PropsWithChildren<{
  id: string
  title: string
  categories: Category[]
  description: string
  company: Company
  location: Location['title']
}>

export default function OfferItem({
  id,
  title,
  categories,
  description,
  company,
  location,
}: Props) {
  return (
    <section className="mb-4 break-inside-avoid">
      <div className="rounded-xl border border-solid border-zinc-300 bg-white shadow">
        <Card
          link={`/home/offers/${id}`}
          title={title}
          categories={categories}
          description={description}
          owner={company.name}
          location={location}
        />
      </div>
    </section>
  )
}
