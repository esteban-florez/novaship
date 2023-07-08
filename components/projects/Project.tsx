import Card from './Card'

interface Props {
  title: string
  categories: string[]
  description: string
  owner: string
  ubication: string
}

export default function Project({
  title,
  categories,
  description,
  owner,
  ubication,
}: Props) {
  return (
    <>
      <section className="mb-4 break-inside-avoid rounded-xl bg-base-300">
        <div className="relative flex w-full rounded-xl">
          <div className="w-full flex-col">
            <Card title={title} categories={categories} owner={owner} ubication={ubication} description={description} />
          </div>
        </div>
      </section>
    </>
  )
}
