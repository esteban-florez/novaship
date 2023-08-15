import Content from './Card/Content'
import Header from './Card/Header'

type Props = React.PropsWithChildren<{
  title: string
  categories: string[]
  description: string
  owner: string
  ubication: string
}>

export default function Offer({
  title,
  categories,
  description,
  owner,
  ubication,
}: Props) {
  return (
    <section className="mb-4 break-inside-avoid">
      <div className="rounded-xl border border-solid border-zinc-300 bg-white shadow">
        <Header title={title} categories={categories} />
        <Content description={description} owner={owner} ubication={ubication} />
      </div>
    </section>
  )
}
