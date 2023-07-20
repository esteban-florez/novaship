import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Member from './Member'

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
          <Member />
          <Member />
          <Link className="btn-accent btn-outline btn-sm btn mt-1 sm:text-base" href="#">
            Ver chat
          </Link>
        </main>
      </div>
    </>
  )
}
