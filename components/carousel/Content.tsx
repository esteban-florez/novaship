import AvatarIcon from '@/components/AvatarIcon'
import Link from 'next/link'
import InlineList from '../InlineList'

type Props = {
  title: string
  description: string
} & (
  | {
    destination: 'offers'
    id: string
    categories: Array<{
      id: string
      title: string
    }>
    owner: string
    location: string
  }
  | {
    destination: 'home'
    link: string
  }
)

export default function Content(props: Props) {
  return (
    <section className="h-full w-full bg-gray-900/70 flex flex-col justify-center p-4 pb-16 md:p-7 md:pt-0 md:w-[36rem]">
      <div className="line-clamp-1 md:w-[30rem]">
        <h3 className="text-xl font-bold text-white sm:text-2xl border-b-2 border-zinc-300">
          {props.title}
        </h3>
        {props.destination === 'offers' && (
          <InlineList
            items={props.categories.map((category) => category.title)}
            className="text-white/70"
            hideList
          />
        )}
      </div>
      <p className="line-clamp-3 sm:line-clamp-4 my-2 text-white sm:my-4">
        {props.description}
      </p>
      <div className="flex flex-col gap-3 w-full">
        {props.destination === 'offers' && (
          <div className="flex flex-row items-center justify-start gap-2 rounded-lg lg:order-none">
            <AvatarIcon className="bg-black text-white" />
            <div className="flex flex-col">
              <h5 className="font-bold text-white lg:text-base">
                {props.owner}
              </h5>
              <small className="-mt-1 text-white">{props.location}</small>
            </div>
          </div>
        )}
        <Link
          href={
            props.destination === 'home'
              ? props.link
              : `/home/offers/${props.id}`
          }
          className="w-fit"
        >
          <button className="btn btn-wide btn-secondary hover:bg-white hover:text-neutral-600 hover:border-secondary">
            Ver más
          </button>
        </Link>
      </div>
    </section>
  )
}
