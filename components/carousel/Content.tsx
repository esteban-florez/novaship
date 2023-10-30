import AvatarIcon from '@/components/AvatarIcon'
import Link from 'next/link'
import InlineList from '../InlineList'

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
    <section className="h-full w-full bg-gray-900/70 flex flex-col justify-center p-4 pb-16 md:p-7 md:pt-0 md:w-[36rem]">
      <div className="mb-2 line-clamp-1 md:w-[30rem]">
        <h3 className="-mb-1 text-xl font-bold text-white sm:text-2xl">{props.title}</h3>
        {props.destination === 'offers' &&
          <InlineList
            items={props.categories.map(category => category.title)}
            className="text-white/70"
            hideList
          />}
      </div>
      <p className="line-clamp-2 py-2 text-white sm:py-4 border-t-2 border-neutral-300">
        {props.description}
      </p>
      <div className="flex flex-col gap-3 w-full">
        {props.destination === 'offers' &&
          <div className="flex flex-row items-center justify-start gap-2 rounded-lg lg:order-none">
            <AvatarIcon className="bg-black text-white" />
            <div className="flex flex-col">
              <h5 className="font-bold text-white lg:text-base">{props.owner}</h5>
              <small className="-mt-1 text-white">{props.location}</small>
            </div>
          </div>}
        <Link href={props.destination === 'home' ? props.link : `/home/offers/${props.id}`}>
          <button className="btn btn-wide btn-secondary hover:bg-white hover:text-neutral-600 hover:border-secondary">
            Ver más
          </button>
        </Link>
      </div>
    </section>
    // <section className="flex w-full justify-center">
    //   <div className="relative flex flex-col gap-4 rounded-lg bg-black/40 p-6 pt-4 shadow-lg backdrop-blur-sm backdrop-brightness-50 md:w-5/6 lg:w-2/4">
    //     <img src="/coso3.webp" alt="Imagen decorativa en esquinas" className="pointer-events-none absolute left-0 top-0 -z-10 h-28 w-full rounded-t-xl opacity-90 sm:h-36" />
    //     <header className="flex flex-col items-center xl:h-20">
    //       <h3 className="line-clamp-1 text-lg font-bold text-white sm:text-2xl">{props.title}</h3>
    //       {props.destination === 'offers' &&
    //         <ul className="flex flex-row flex-wrap font-semibold text-white/75">
    //           {props.categories.map(category => {
    //             return (
    //               <li
    //                 key={category.id}
    //                 className="me-1 cursor-pointer text-base after:text-white/75 after:content-['|'] last:after:content-[] hover:text-white/40"
    //               >
    //                 {category.title}
    //               </li>
    //             )
    //           })}
    //         </ul>}
    //     </header>
    //     <p className="line-clamp-3 pt-2 text-white sm:pt-7 xl:pt-3">{props.description}</p>
    //     <footer className="flex flex-col justify-between gap-4 sm:flex-row md:items-center lg:gap-6">
    //       {props.destination === 'offers' &&
    //         <div className="order-1 flex flex-row items-center justify-start gap-2 rounded-lg lg:order-none">
    //           <AvatarIcon className="bg-black text-white" />
    //           <div className="flex flex-col">
    //             <h5 className="font-bold text-white lg:text-base">{props.owner}</h5>
    //             <small className="-mt-1 text-white">{props.location}</small>
    //           </div>
    //         </div>}
    //       <Link href={props.destination === 'home' ? props.link : `/home/offers/${props.id}`}>
    //         <button className="btn btn-wide btn-secondary hover:bg-white hover:text-neutral-600 hover:border-secondary">
    //           Ver más
    //         </button>
    //       </Link>
    //     </footer>
    //   </div>
    // </section>
  )
}
