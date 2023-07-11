import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import AvatarIcon from '../AvatarIcon'
import Link from 'next/link'

interface Props {
  title: string
  owner: string
  status: string
}

export default function Header({ title, owner, status }: Props) {
  return (
    <>
      <section className="card grid grid-cols-7 justify-between rounded-lg border border-solid border-zinc-300 shadow md:rounded-l-none lg:items-center">
        <div className="order-1 col-span-7 flex flex-row items-center gap-3 lg:col-span-2">
          <div className="w-14 rounded-l-lg rounded-r-full bg-primary py-9 text-center sm:w-20 md:w-28 lg:w-16" />
          <div className="flex flex-col ">
            <h3 className="font-title text-base font-bold sm:text-lg">{title}</h3>
            <small className="-mt-1 line-clamp-6 text-sm font-semibold text-stone-500">Estado: {status}</small>
          </div>
        </div>
        <div className="order-3 col-span-7 flex flex-row items-center justify-normal gap-2 p-4 sm:col-span-6 lg:col-span-2 lg:justify-center lg:p-0">
          <AvatarIcon username="Myriam Yaqueno" bg="bg-neutral" />
          <div className="flex flex-col">
            <h5 className="text-base font-bold">{owner}</h5>
            <h5 className="-mt-1 line-clamp-6 text-sm">Responsable</h5>
          </div>
        </div>
        <div className="order-4 hidden flex-row items-center justify-center gap-2 p-4 lg:col-span-2 lg:flex">
          <div>
            <AvatarIcon username="Liz Villegas" bg="bg-accent" />
            <AvatarIcon username="Estefani Garcia" bg="bg-secondary" />
            <AvatarIcon username="Esteban Florez" bg="bg-warning" />
          </div>
          <p className="line-clamp-6 text-sm font-bold">+3</p>
        </div>
        <div className="order-5 col-span-7 flex flex-row justify-end gap-2 p-4 sm:col-span-1">
          <Link href="/projects/project">
            <EyeIcon className="h-7 w-7" />
          </Link>
          <button>
            <PencilIcon className="h-6 w-6" />
          </button>
          <button>
            <TrashIcon className="h-6 w-6" />
          </button>
        </div>
      </section>
    </>
  )
}
