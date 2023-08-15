import AvatarIcon from '@/components/AvatarIcon'
import Link from 'next/link'

interface Props {
  title: string
  categories: string
  description: string
  owner: string
  ubication: string
}

export default function Content({ title, categories, description, owner, ubication }: Props) {
  return (
    <section className="flex w-full justify-center">
      <div className="flex flex-col gap-4 rounded-lg bg-black/30 p-6 shadow-lg backdrop-blur-sm backdrop-brightness-50 md:w-5/6 lg:w-2/4">
        <header className="text-center">
          <h3 className="text-lg font-bold text-white sm:text-2xl">{title}</h3>
          <h6 className="-mt-1 line-clamp-1 font-semibold text-neutral-200 sm:text-base">
            {categories}
          </h6>
        </header>
        <p className="line-clamp-3 text-white">{description}</p>
        <footer className="flex flex-col justify-between gap-4 sm:flex-row md:items-center lg:gap-6">
          <div className="order-1 flex flex-row items-center justify-start gap-2 rounded-lg lg:order-none">
            <AvatarIcon username="Diseñadores Unidos" bg="bg-black" />
            <div className="flex flex-col">
              <h5 className="font-bold text-white lg:text-base">{owner}</h5>
              <small className="-mt-1 text-white">{ubication}</small>
            </div>
          </div>
          <Link href="/home/offers/offer" className="order-2 w-full rounded-lg bg-secondary px-5 py-2 font-semibold text-white sm:w-auto lg:text-base">
            Ver más
          </Link>
        </footer>
      </div>
    </section>
  )
}
