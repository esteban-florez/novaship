import Content from './Card/Content'
import Footer from './Card/Footer'
import Header from './Card/Header'

interface Props {
  title: string
  categories: string[]
  description: string
  owner: string
  ubication: string
}

export default function Offer({
  title,
  categories,
  description,
  owner,
  ubication,
}: Props) {
  return (
    <section className="mb-4 break-inside-avoid rounded-xl bg-base-300">
      <div className="relative flex w-full rounded-xl">
        <div className="w-full flex-col">
          <Header title={title} categories={categories} />
          <Content description={description} />
          <Footer owner={owner} ubication={ubication} />
        </div>
      </div>
    </section>
  )
}
