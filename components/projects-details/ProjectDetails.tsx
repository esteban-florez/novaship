import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'

export default function ProjectDetails() {
  return (
    <>
      <div className="mt-12 flex flex-col gap-2 rounded-lg bg-white p-5 shadow-md">
        <div className="relative flex w-full flex-row justify-end gap-6">
          <div className="absolute bottom-0 left-1 grid h-36 w-72 place-items-center rounded-md bg-slate-300">
            <button className="btn-ghost btn">
              <PlusCircleIcon className="h-8 w-8" />
              <p>Añadir imagen</p>
            </button>
          </div>
          <div className="flex w-3/5 justify-between">
            <div className="container pl-8">
              <h3 className="font-title text-base font-bold sm:text-2xl">Mi proyecto</h3>
              <p className="line-clamp-6 text-base">Responsable: Myriam Yaqueno</p>
              <p className="line-clamp-6 text-base">Fecha: 20/06/2023</p>
            </div>
            <EllipsisVerticalIcon className="h-8 w-8" />
          </div>
        </div>
        <p className="line-clamp-6 p-2 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, cumque deserunt ea impedit necessitatibus esse ab excepturi, possimus debitis deleniti alias aut vitae quidem temporibus cupiditate, autem dolores quo eius?</p>
      </div>
    </>
  )
}
