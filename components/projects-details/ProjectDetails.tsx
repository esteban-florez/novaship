import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'

export default function ProjectDetails() {
  return (
    <>
      <div className="grid grid-cols-6 rounded-lg shadow-md">
        <div className="col-span-6 flex h-36 place-items-center justify-center rounded-lg rounded-b-none bg-neutral md:col-span-2 md:h-full md:rounded-b-lg md:rounded-r-none">
          <button className="btn-ghost btn text-white">
            <PlusCircleIcon className="h-6 w-6" />
            <p className="text-sm">Añadir imagen</p>
          </button>
        </div>
        <div className="col-span-6 flex flex-col rounded-lg rounded-t-none bg-white py-4 md:col-span-4 md:rounded-l-none md:rounded-t-lg">
          <div className="flex justify-between">
            <div className="container pl-5">
              <h3 className="font-title text-base font-bold sm:text-2xl">Mi proyecto</h3>
              <p className="line-clamp-6 text-xs sm:text-sm">Responsable: Myriam Yaqueno</p>
              <p className="line-clamp-6 text-xs sm:text-sm">Fecha: 20/06/2023</p>
            </div>
            <button className="btn-ghost btn px-0 pr-2">
              <EllipsisVerticalIcon className="h-8 w-8" />
            </button>
          </div>
          <p className="line-clamp-6 px-5 pt-4 text-sm">
            El siguiente sistema se esta realizando con el fin de tener una contabilidad más organizada
          </p>
        </div>
      </div>
    </>
  )
}
