import AvatarIcon from '@/components/AvatarIcon'
import Button from '@/components/Button'

type Props = {
  title: string
  description: string
} & ({
  destination: 'offers'
  id: string
  categories: Array<{
    id: string
    title: string
  }>
  owner: string
  location: string
} | {
  destination: 'home'
  link: string
})

export default function Content(props: Props) {
  return (
    <section className="flex w-full justify-center">
      <div className="relative flex flex-col gap-4 rounded-lg bg-black/40 p-6 pt-4 shadow-lg backdrop-blur-sm backdrop-brightness-50 md:w-5/6 lg:w-2/4">
        <img src="/coso3.webp" alt="Imagen decorativa en esquinas" className="pointer-events-none absolute left-0 top-0 -z-10 h-28 w-full rounded-t-xl opacity-90 sm:h-36" />
        <header className="flex flex-col items-center xl:h-20">
          <h3 className="line-clamp-1 text-lg font-bold text-white sm:text-2xl">{props.title}</h3>
          {props.destination === 'offers' &&
            <ul className="flex flex-row flex-wrap font-semibold text-white/75">
              {props.categories.map(category => {
                return (
                  <li
                    key={category.id}
                    className="me-1 cursor-pointer text-base after:text-white/75 after:content-['|'] last:after:content-[] hover:text-white/40"
                  >
                    {category.title}
                  </li>
                )
              })}
            </ul>}
        </header>
        <p className="line-clamp-3 pt-2 text-white sm:pt-7 xl:pt-3">{props.description}</p>
        <footer className="flex flex-col justify-between gap-4 sm:flex-row md:items-center lg:gap-6">
          {props.destination === 'offers' &&
            <div className="order-1 flex flex-row items-center justify-start gap-2 rounded-lg lg:order-none">
              <AvatarIcon className="bg-black text-white" />
              <div className="flex flex-col">
                <h5 className="font-bold text-white lg:text-base">{props.owner}</h5>
                <small className="-mt-1 text-white">{props.location}</small>
              </div>
            </div>}
          <Button
            url={props.destination === 'home' ? props.link : `/home/offers/${props.id}`}
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