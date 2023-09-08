import { ArrowLeftIcon, PencilIcon } from '@heroicons/react/24/outline'
import Button from '../Button'

interface Props {
  id: string
  title: string
  description: string
  fields: string[]
  isOwner: boolean
}

export default function ProjectDetails({ id, title, description, fields, isOwner }: Props) {
  return (
    <div className="card rounded-xl bg-white shadow-xl lg:flex-row">
      <div className="relative flex lg:basis-2/4 xl:basis-2/3">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Imagen de fondo carrusel"
          className="h-32 w-full rounded-t-lg object-cover md:h-44 lg:h-full lg:rounded-l-lg"
        />
        <img src="/onda-vertical.webp" alt="Onda-vertical" className="absolute bottom-0 right-0 hidden h-full lg:block" />
        <img src="/onda-horizontal.webp" alt="Onda-vertical" className="absolute bottom-0 block w-full lg:hidden" />
      </div>
      <div className="flex flex-col justify-center rounded-t-none p-4 xl:rounded-l-none">
        <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
        <div className="flex flex-wrap gap-2 text-base text-primary">
          {fields.map(field => {
            return (
              <span key={field} className="-my-1 font-semibold text-primary after:content-[','] last:after:content-[]">
                {field}
              </span>
            )
          })}
        </div>
        <p className="line-clamp-6 py-3">{description}</p>
        <div className="flex flex-col justify-between gap-3 md:flex-row md:gap-0 lg:w-auto">
          <Button
            url="/home/projects"
            style="OUTLINE"
            color="NEUTRAL"
            hover="NEUTRAL"
          >
            <ArrowLeftIcon className="h-4 w-4 text-neutral" />
            <p className="text-neutral">Volver al listado</p>
          </Button>
          {isOwner
            ? (
              <Button
                url={`/home/projects/${id}/update`}
                style="DEFAULT"
                color="ACCENT"
                hover="WHITE"
              >
                <PencilIcon className="h-4 w-4" />
                Actualizar
              </Button>
              )
            : (
              <Button
                style="DEFAULT"
                color="SECONDARY"
                hover="WHITE"
              >
                <PencilIcon className="h-4 w-4" />
                ¡Quiero Aplicar!
              </Button>
              )}
        </div>
      </div>
    </div>
  )
}
