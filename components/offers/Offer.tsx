import Content from './Offer/Content'
import Header from './Offer/Header'

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
    <section className="mb-4 break-inside-avoid rounded-xl border border-solid border-zinc-300 shadow">
      <div className="relative flex w-full rounded-xl">
        <div className="w-full flex-col">
          <Header title={title} categories={categories} />
          <Content description={description} owner={owner} ubication={ubication} />
        </div>
      </div>
    </section>
  )
}
