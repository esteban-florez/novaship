'use client'

import { ArrowLeftIcon, PencilIcon } from '@heroicons/react/24/outline'
import { schema } from '@/lib/validation/schemas/hiring'
import Button from '../Button'
import DeleteModal from '../projects/DeleteModal'
import useSubmit from '@/lib/hooks/useSubmit'
import Input from '../forms/inputs/Input'
import { type Status } from '@prisma/client'
interface Props {
  id: string
  isOwner: boolean
  title: string
  expiresAt: number
  description: string
  categories: string[]
  userHasApplied: boolean
  hiringStatus: Status
}

export default function Details({ id, isOwner, title, description, expiresAt, categories, userHasApplied, hiringStatus }: Props) {
  const expiresAtDate = expiresAt > 0 ? `Expira en ${expiresAt} días` : 'La oferta expiró'
  const statusMessages = {
    PENDING: '¡Su postulación se encuentra en espera!',
    REJECTED: '¡Su postulación ha sido rechazada!',
    ACCEPTED: '¡Su postulación ha sido aceptada!',
  }

  const {
    handleSubmit, alert,
    serverErrors, register,
  } = useSubmit({
    schema,
  })

  return (
    <>
      {alert}
      {serverErrors}
      <div className="card rounded-xl bg-white shadow-xl lg:flex-row">
        <div className="relative flex lg:basis-2/5">
          <div className="absolute rounded-br-lg rounded-tl-lg bg-white/80 px-4 py-2 shadow-lg">
            <p className="text-sm font-semibold">{expiresAtDate}</p>
          </div>
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Imagen de fondo carrusel"
            className="h-32 w-full select-none rounded-t-lg object-cover md:h-44 lg:h-auto lg:rounded-l-lg"
          />
          <img src="/onda-vertical.webp" alt="Onda-vertical" className="absolute bottom-0 right-0 hidden h-full select-none lg:block" />
          <img src="/onda-horizontal.webp" alt="Onda-vertical" className="absolute bottom-0 block w-full select-none lg:hidden" />
        </div>
        <div className="flex w-full flex-col rounded-t-none p-4 xl:rounded-l-none">
          <h3 className="w-5/6 text-xl font-bold sm:text-2xl">{title}</h3>
          <div className="flex flex-wrap gap-1 text-base font-semibold text-neutral-600">
            {categories.map(category => {
              return <span key={category} className="-mt-1 after:text-neutral-600 after:content-[','] last:after:content-[]">{category}</span>
            })}
          </div>
          <p className="line-clamp-6 py-3">{description}</p>
          <div className="mx-auto flex w-full flex-col justify-between gap-3 sm:mx-0 sm:w-auto sm:flex-row sm:gap-1 sm:text-sm lg:gap-2">
            <Button
              url="/home/offers"
              style="DEFAULT"
              color="WHITE"
              hover="SECONDARY"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Volver al listado
            </Button>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-col gap-3 sm:flex-row">
                {userHasApplied &&
                  <span className="mx-auto font-semibold text-neutral-600 sm:mx-0 sm:me-4">
                    {statusMessages[hiringStatus]}
                  </span>}
                {(!isOwner && !userHasApplied) &&
                  <form action="/api/hiring" method="POST" onSubmit={handleSubmit}>
                    <Input
                      name="offerId"
                      placeholder=""
                      value={id}
                      className="hidden"
                      register={register}
                    />
                    <Button
                      style="DEFAULT"
                      color="PRIMARY"
                      hover="WHITE"
                    >
                      <PencilIcon className="h-4 w-4" />
                      ¡Aplicar!
                    </Button>
                  </form>}

                {isOwner &&
                (
                  <>
                    <Button
                      url={`/home/offers/${id}/update`}
                      style="DEFAULT"
                      color="PRIMARY"
                      hover="WHITE"
                    >
                      <PencilIcon className="h-4 w-4" />
                      Actualizar
                    </Button>
                    <DeleteModal
                      title={title}
                      action={`/api/offers/${id}`}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
