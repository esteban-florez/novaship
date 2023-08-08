import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { type Person, type Project } from '@prisma/client'

interface Props {
  project: (Project & {
    person: Person | null
  }) | null
}

export default function ProjectDetails({ project }: Props) {
  return (
    <div className="grid grid-cols-6 rounded-lg shadow-md">
      <div className="col-span-6 flex h-36 place-items-center justify-center rounded-lg rounded-b-none bg-neutral md:col-span-2 md:h-full md:rounded-b-lg md:rounded-r-none">
        <button className="btn-ghost btn text-white">
          <PlusCircleIcon className="h-6 w-6" />
          <p className="">Añadir imagen</p>
        </button>
      </div>
      <div className="col-span-6 flex flex-col rounded-lg rounded-t-none bg-white py-4 md:col-span-4 md:rounded-l-none md:rounded-t-lg">
        <div className="flex justify-between">
          <div className="container pl-5">
            <h3 className="text-base font-bold sm:text-2xl">{project?.title}</h3>
            <p className="sm: line-clamp-6 text-sm">Responsable: {project?.person?.name}</p>
          </div>
          <button className="btn-ghost btn px-0 pr-2">
            <EllipsisVerticalIcon className="h-8 w-8" />
          </button>
        </div>
        <p className="line-clamp-6 px-5 pt-4">
          {project?.description}
        </p>
      </div>
    </div>
  )
}
