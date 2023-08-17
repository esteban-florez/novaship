import Link from 'next/link'
import AvatarIcon from './AvatarIcon'

type Props = React.PropsWithChildren<{
  title: string
  categories?: string[]
  description: string
  owner?: string
  ubication?: string
}>

export default function Card({ title, categories, description, owner, ubication }: Props) {
  const category = (
    <ul className="-mt-1 line-clamp-2 flex flex-row flex-wrap font-semibold text-primary">
      {categories.map(category => {
        return (
          <li className="me-1 cursor-pointer text-sm after:text-neutral-800 after:content-[','] last:after:content-[] hover:text-primary/40" key={category}>
            {category}
          </li>
        )
      })}
    </ul>
  )

  return (
    <>
      <div className="relative">
        <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen de fondo carrusel" className="h-28 w-full rounded-t-xl object-cover" />
        <img src="/ondas.png" alt="card onda" className="absolute bottom-0 w-full" />
      </div>
      <div className="card card-compact bg-base-100 shadow-lg">
        <div className="flex flex-col gap-3 rounded-t-xl px-4 py-1">
          <header>
            <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
            {category}
          </header>
          <p className="line-clamp-2 text-sm">{description}</p>
          <div className="flex flex-col gap-3 pb-3 md:flex-row md:items-center md:justify-between md:gap-0">
            <div className="flex items-center gap-2">
              <AvatarIcon username="Pedro Lopez" className="bg-black text-white" />
              <div className="flex flex-col">
                <h5 className="text-sm font-bold">{owner}</h5>
                <small className="-mt-1 text-xs">{ubication}</small>
              </div>
            </div>
            <Link href="/home/offers/offer" className="btn-secondary btn-sm btn w-full text-sm md:w-auto">
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
