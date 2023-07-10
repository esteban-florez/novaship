import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import AvatarIcon from '../AvatarIcon'
import Link from 'next/link'

function Members() {
  return (
    <>
      <div className="flex flex-row gap-2">
        <>
          <AvatarIcon username="Myriam Yaqueno" status showStatus usernameLength={2} />
          <div className="flex flex-col align-middle">
            <h3 className="font-title text-sm font-bold sm:text-base">Myriam Yaqueno</h3>
            <p className="-my-1 line-clamp-6 text-xs">Miembro</p>
          </div>
        </>
      </div>
    </>
  )
}

export default function TeamGroup() {
  return (
    <>
      <div>
        <header className="rounded-t-lg bg-accent pl-5">
          <div className="flex flex-row justify-between align-middle">
            <h4 className="mt-2 py-3 font-title text-xl font-bold text-black sm:text-xl">Equipo de trabajo</h4>
            {/* Esto es un dropdown */}
            <button className="btn-ghost btn px-2">
              <EllipsisVerticalIcon className="h-7 text-black" />
            </button>
          </div>
        </header>
        <main className="flex flex-col gap-3 rounded-b-lg bg-white p-4">
          <p className="line-clamp-6 text-sm font-bold">Total miembros: 3</p>
          <p className="line-clamp-6 text-sm font-bold">Activos - 2</p>
          <Members />
          <Members />
          <Link className="btn-accent btn-outline btn-sm btn mt-1 sm:text-base" href="#">
            Ver chat
          </Link>
        </main>
      </div>
    </>
  )
}
