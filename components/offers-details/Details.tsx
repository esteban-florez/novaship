'use client'

import {
  BriefcaseIcon,
  HashtagIcon,
  MapPinIcon,
  PencilIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'
import DeleteModal from '../projects/DeleteModal'
import useSubmit from '@/lib/hooks/useSubmit'
import { type Interested, type Status } from '@prisma/client'
import Link from 'next/link'
import { getExpiresAtDate } from '@/lib/utils/date'
import { useState } from 'react'
interface Props {
  id: string
  isOwner: boolean
  title: string
  expiresAt: Date | null
  description: string
  categories: string[]
  userHasApplied: boolean
  hiringStatus: Status
  location: string
  limit: number
  job: string
  interested: Interested
  hiringId: string
}

export default function Details({
  id,
  isOwner,
  title,
  description,
  expiresAt,
  categories,
  userHasApplied,
  hiringStatus,
  location,
  limit,
  job,
  interested,
  hiringId,
}: Props) {
  const [status, setStatus] = useState<Status>('ACCEPTED')
  const expires = getExpiresAtDate(expiresAt)
  const expiresAtDate =
    expires > 0
      ? `Expira en ${expires} ${expires > 1 ? 'días' : 'día'}`
      : 'La oferta expiró'
  const statusMessages = {
    PENDING: '¡Su postulación se encuentra en espera!',
    REJECTED: '¡Su postulación ha sido rechazada!',
    ACCEPTED: '¡Su postulación ha sido aceptada!',
  }

  const { handleSubmit, alert, serverErrors, loading } = useSubmit({
    method: interested === 'COMPANY' ? 'PUT' : 'POST',
    append: {
      offerId: id,
      status,
    },
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
            src="/card.webp"
            alt="Imagen de fondo carrusel"
            className="h-32 w-full select-none rounded-t-lg object-cover md:h-44 lg:h-auto lg:rounded-l-lg"
          />
          <img
            src="/onda-vertical.webp"
            alt="Onda-vertical"
            className="absolute bottom-0 right-0 hidden h-full select-none lg:block"
          />
          <img
            src="/onda-horizontal.webp"
            alt="Onda-vertical"
            className="absolute bottom-0 block w-full select-none lg:hidden"
          />
        </div>
        <div className="flex w-full flex-col rounded-t-none p-4 xl:rounded-l-none">
          <h3 className="w-5/6 text-xl font-bold sm:text-2xl">{title}</h3>
          <div className="mb-2 flex flex-wrap gap-1 text-base font-semibold text-neutral-600">
            {categories.map((category) => {
              return (
                <span
                  key={category}
                  className="-mt-1 after:text-neutral-600 after:content-[','] last:after:content-[]"
                >
                  {category}
                </span>
              )
            })}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <small className="flex gap-1 items-center">
              <MapPinIcon className="w-5 h-5 text-primary" />
              <span className="font-bold">{location}</span>
            </small>
            <small className="flex gap-1 items-center">
              <HashtagIcon className="h-5 w-5 text-primary" />
              Cupos disponibles <span className="font-bold">{limit}</span>
            </small>
            <small className="flex gap-1 items-center">
              <BriefcaseIcon className="h-5 w-5 text-primary" />
              <span className="font-bold">{job}</span>
            </small>
          </div>
          <p className="line-clamp-6 py-3">{description}</p>
          <div className="mx-auto flex w-full flex-col justify-between gap-3 sm:mx-0 sm:w-auto sm:flex-row sm:gap-1 sm:text-sm lg:gap-2">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-col gap-3 sm:flex-row">
                {interested === 'COMPANY' && (
                  <div className="flex flex-col gap-4">
                    <p className="font-bold text-neutral-600">
                      ¿Deseas aceptar la oferta de trabajo?
                    </p>
                    <form
                      action={`/api/hiring/${hiringId}`}
                      method="POST"
                      onSubmit={handleSubmit}
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="btn btn-primary">Aceptar</button>
                        <button
                          onClick={() => {
                            setStatus('REJECTED')
                          }}
                          className="btn btn-error"
                        >
                          Rechazar
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                {interested === 'PERSON' && userHasApplied && (
                  <span className="mx-auto font-semibold text-neutral-600 sm:mx-0 sm:me-4">
                    {statusMessages[hiringStatus]}
                  </span>
                )}
                {!isOwner && !userHasApplied && (
                  <form
                    action="/api/hiring"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <button
                      disabled={loading}
                      className="btn btn-block md:btn-wide btn-primary"
                    >
                      <PencilSquareIcon className="h-4 w-4" />
                      ¡Aplicar!
                    </button>
                  </form>
                )}

                {isOwner && (
                  <>
                    <Link href={`/home/offers/${id}/update`}>
                      <button className="btn btn-block sm:btn-md btn-primary">
                        <PencilIcon className="h-4 w-4" />
                        Actualizar
                      </button>
                    </Link>
                    <DeleteModal
                      title={title}
                      action={`/api/offers/${id}`}
                      showLabel
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
