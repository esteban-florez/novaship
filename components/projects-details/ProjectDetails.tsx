import { ArrowLeftIcon, PencilIcon } from '@heroicons/react/24/outline'
import Button from '../Button'

interface Props {
  id: string
  title: string
  description: string
  categories: string[]
  isOwner: boolean
  isMember: boolean
}

export default function ProjectDetails({ id, title, description, categories, isOwner, isMember }: Props) {
  return (
    <div className="card rounded-xl bg-white shadow-xl xl:flex-row">
      <div className="relative flex xl:basis-2/4">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Imagen de fondo carrusel"
          className="h-32 w-full rounded-t-lg object-cover md:h-44 xl:h-full xl:rounded-l-lg"
        />
        <img src="/onda-vertical.webp" alt="Onda-vertical" className="absolute bottom-0 right-0 hidden h-full xl:block" />
        <img src="/onda-horizontal.webp" alt="Onda-vertical" className="absolute bottom-0 block w-full xl:hidden" />
      </div>
      <div className="flex flex-col justify-center rounded-t-none p-4 xl:rounded-l-none">
        <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
        <div className="flex flex-wrap gap-2 text-base text-primary">
          {categories.map(category => {
            return (
              <span key={category} className="-my-1 font-semibold text-primary after:content-[','] last:after:content-[]">
                {category}
              </span>
            )
          })}
        </div>
        <p className="line-clamp-6 py-3">{description}</p>
        <div className="flex flex-col justify-between gap-3 md:flex-row md:gap-0 xl:w-auto">
          <Button
            url="/home/projects"
            style="DEFAULT"
            color="WHITE"
            hover="SECONDARY"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Volver al listado
          </Button>
          {!isMember && !isOwner &&
            <Button
              style="DEFAULT"
              color="SECONDARY"
              hover="WHITE"
            >
              <PencilIcon className="h-4 w-4" />
              ¡Quiero Aplicar!
            </Button>}
          {isOwner &&
            <Button
              url={`/home/projects/${id}/update`}
              style="DEFAULT"
              color="ACCENT"
              hover="WHITE"
            >
              <PencilIcon className="h-4 w-4" />
              Actualizar
            </Button>}
        </div>
      </div>
    </div>
  )
}
