import { type Field, type Location } from '@prisma/client'
import AvatarIcon from '@/components/AvatarIcon'
import Button from '@/components/Button'

interface Props {
  id: string
  title: string
  categories: Field[]
  description: string
  owner: string
  location: Location
}

export default function Content({ id, title, categories, description, owner, location }: Props) {
  return (
    <section className="flex w-full justify-center">
      <div className="relative flex flex-col gap-4 rounded-lg bg-black/40 p-6 pt-4 shadow-lg backdrop-blur-sm backdrop-brightness-50 md:w-5/6 lg:w-2/4">
        <img src="/coso3.webp" alt="Imagen decorativa en esquinas" className="pointer-events-none absolute left-0 top-0 -z-10 h-28 w-full rounded-t-xl opacity-90 sm:h-32" />
        <header className="flex flex-col justify-center text-center xl:h-16">
          <h3 className="line-clamp-1 text-lg font-bold text-white sm:text-2xl">{title}</h3>
          <ul className="-mt-1 line-clamp-2 flex flex-row flex-wrap font-semibold text-primary">
            {categories.map(category => {
              return (
                <li className="me-1 cursor-pointer text-sm after:text-neutral-800 after:content-['|'] last:after:content-[] hover:text-primary/40" key={category.id}>
                  {category.title}
                </li>
              )
            })}
          </ul>
        </header>
        <p className="line-clamp-3 pt-4 text-white sm:pt-7 xl:pt-3">{description}</p>
        <footer className="flex flex-col justify-between gap-4 sm:flex-row md:items-center lg:gap-6">
          <div className="order-1 flex flex-row items-center justify-start gap-2 rounded-lg lg:order-none">
            <AvatarIcon username="Diseñadores Unidos" className="bg-black text-white" />
            <div className="flex flex-col">
              <h5 className="font-bold text-white lg:text-base">{owner}</h5>
              <small className="-mt-1 text-white">{location.title}</small>
            </div>
          </div>
          <Button
            url={`/home/offers/${id}`}
            style="DEFAULT"
            color="SECONDARY"
          >
            Ver más
          </Button>
        </footer>
      </div>
    </section>
  )
}
