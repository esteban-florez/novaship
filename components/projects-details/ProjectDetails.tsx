import { PencilIcon } from '@heroicons/react/24/outline'
import DeleteModal from '../projects/DeleteModal'
import Link from 'next/link'
import GoBackBtn from '../GoBackBtn'

interface Props {
  id: string
  title: string
  description: string
  categories: string[]
  isPrivate: boolean
  isOwner: boolean
  isMember: boolean
}

export default function ProjectDetails({ id, title, description, categories, isPrivate, isOwner, isMember }: Props) {
  return (
    <div className="card rounded-xl bg-white shadow-lg lg:flex-row">
      <div className="relative flex lg:basis-2/6">
        <img
          src="/card.webp"
          alt="Imagen de fondo carrusel"
          className="h-32 w-full rounded-t-lg object-cover md:h-44 lg:h-full lg:rounded-l-lg"
        />
        <img src="/onda-vertical.webp" alt="Onda-vertical" className="absolute bottom-0 right-0 hidden h-full lg:block" />
        <img src="/onda-horizontal.webp" alt="Onda-vertical" className="absolute bottom-0 block w-full lg:hidden" />
      </div>
      <div className="flex flex-col justify-center rounded-t-none p-4 lg:basis-3/4 xl:rounded-l-none">
        <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
        {isPrivate &&
          <span className="-mt-1 mb-2 font-semibold text-neutral-400">Su proyecto actualmente no es visible para el público</span>}
        <div className="flex flex-wrap gap-2 text-base font-semibold text-neutral-600">
          {categories.map(category => {
            return (
              <span key={category} className="-mt-1 after:text-neutral-600 after:content-[','] last:after:content-[]">
                {category}
              </span>
            )
          })}
        </div>
        <p className="line-clamp-6 py-3">{description}</p>
        <div className="mx-auto flex w-full flex-col justify-between gap-3 sm:mx-0 sm:w-auto sm:flex-row sm:gap-1 sm:text-sm lg:gap-2">
          <GoBackBtn label="Volver al listado" />
          {!isMember && !isOwner &&
            <button className="btn btn-primary hover:bg-white hover:text-neutral hover:border-primary">
              <PencilIcon className="h-4 w-4" />
              ¡Aplicar!
            </button>}
          {isOwner &&
            (
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={`/home/projects/${id}/update`}>
                  <button className="btn btn-primary hover:bg-white hover:text-neutral hover:border-primary">
                    <PencilIcon className="h-4 w-4" />
                    Actualizar
                  </button>
                </Link>
                <DeleteModal
                  title={title}
                  action={`/api/projects/${id}`}
                  showLabel
                />
              </div>
            )}
        </div>
      </div>
    </div>
  )
}
