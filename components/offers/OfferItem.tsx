import Card from '../Card'

type Props = React.PropsWithChildren<{
  id: string
  title: string
  categories: Array<{
    id: string
    title: string
  }>
  description: string
  companyName: string
  location: string
  limit: number
  expiresAt: number
}>

export default function OfferItem({
  id,
  title,
  categories,
  description,
  companyName,
  location,
  limit,
  expiresAt,
}: Props) {
  return (
    <section className="max-w-xs mb-4 break-inside-avoid">
      <div className="rounded-xl border border-solid border-zinc-300 bg-white shadow">
        <Card
          link={`/home/offers/${id}`}
          title={title}
          categories={categories}
          description={description}
          owner={companyName}
          location={location}
          offerLimit={limit}
          expiresAt={expiresAt}
        />
      </div>
    </section>
  )
}
