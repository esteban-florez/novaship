import Card from '../Card'

type Props = React.PropsWithChildren<{
  id: string
  title: string
  categories: string[]
  description: string
  owner: string
  ubication: string
}>

export default function Offer({
  id,
  title,
  categories,
  description,
  owner,
  ubication,
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
          ubication={ubication}
        />
      </div>
    </section>
  )
}
