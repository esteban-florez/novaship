import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import AvatarIcon from '../AvatarIcon'

function Members() {
  return (
    <>
      <div className="rounded-xl bg-base-200 px-6 py-3">
        <div className="flex flex-row gap-2">
          <AvatarIcon username="Myriam Yaqueno" status showStatus usernameLength={2} />
          <div className="flex flex-col">
            <h3 className="font-title text-base font-bold sm:text-lg">Myriam Yaqueno</h3>
            <p className="line-clamp-6 text-xs">Miembro</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default function TeamGroup() {
  return (
    <>
      <div className="container bg-white">
        <header className="rounded-t-lg bg-accent px-5 py-4">
          <div className="flex justify-between align-middle">
            <h4 className="font-title text-xl font-bold text-black sm:text-xl">Equipo de trabajo</h4>
            {/* Esto es un dropdown */}
            <EllipsisVerticalIcon className="h-7 text-black" />
          </div>
        </header>
        <main className="flex flex-col gap-3 rounded-b-lg bg-white/10 p-4">
          <p className="line-clamp-6 text-sm font-bold">Total miembros: 3</p>
          <p className="line-clamp-6 text-sm font-bold">Activos - 2</p>
          <Members />
          <Members />
          <button className="btn-accent btn-outline btn w-full sm:text-base">
            Ver chat
          </button>
        </main>
      </div>
    </>
  )
}
