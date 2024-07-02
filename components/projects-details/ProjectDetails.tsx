'use client'

import { PencilIcon } from '@heroicons/react/24/outline'
import DeleteModal from '../projects/DeleteModal'
import Link from 'next/link'
import useSubmit from '@/lib/hooks/useSubmit'
import { imageValidator } from '@/lib/utils/image'

interface Props {
  id: string
  title: string
  description: string
  categories: string[]
  isPrivate: boolean
  userData: {
    id: string
    isOwner: boolean
    isMember: boolean
  }
  canApply: boolean
  image: string | null
  team: {
    id: string
    name: string
  } | null
}

export default function ProjectDetails({
  id,
  title,
  description,
  categories,
  isPrivate,
  userData,
  canApply,
  team,
  image,
}: Props) {
  const userInTeam = userData.isMember || userData.isOwner
  const { alert, serverErrors, loading, handleSubmit } = useSubmit({
    append: {
      teamId: team?.id,
      projectId: id,
    },
  })

  console.log(image)

  const validImage = imageValidator(image)

  return (
    <>
      {alert}
      {serverErrors}
      <div className="card sm:rounded-xl bg-white shadow-lg lg:flex-row">
        <div className="relative flex lg:basis-2/6">
          <img
            src={image !== null ? validImage : '/card.webp'}
            alt="Imagen de fondo carrusel"
            className="w-full sm:rounded-t-lg max-h-52 lg:rounded-l-lg"
          />
          <img
            src="/onda-vertical.webp"
            alt="Onda-vertical"
            className="absolute bottom-0 right-0 hidden h-full lg:block"
          />
          <img
            src="/onda-horizontal.webp"
            alt="Onda-vertical"
            className="absolute bottom-0 block w-full lg:hidden"
          />
        </div>
        <div className="flex flex-col justify-center rounded-none sm:rounded-t-none p-4 lg:basis-3/4 xl:rounded-l-none">
          <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
          {isPrivate && (
            <span className="-mt-1 mb-2 font-semibold text-neutral-400">
              Su proyecto actualmente no es visible para el público
            </span>
          )}
          <div className="flex flex-wrap gap-2 text-base font-semibold text-neutral-600">
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
          {team != null
            ? (
              <Link href={`/home/teams/${team.id}`}>
                <p className="font-bold text-primary">
                  Equipo encargado ({team.name})
                </p>
              </Link>
              )
            : (
              <p className="font-bold text-primary">
                {userInTeam
                  ? 'Usted lleva este proyecto solo'
                  : 'Este proyecto es personal'}
              </p>
              )}
          <p className="line-clamp-6 py-3">{description}</p>
          <div className="mx-auto flex w-full flex-col sm:justify-end gap-3 sm:mx-0 sm:w-auto sm:flex-row sm:gap-1 sm:text-sm lg:gap-2">
            {team != null && canApply && (
              <form
                action="/api/invitations"
                method="POST"
                onSubmit={handleSubmit}
              >
                <button
                  disabled={loading}
                  className="btn btn-block sm:btn-md btn-primary hover:bg-white hover:text-neutral hover:border-primary"
                >
                  {loading
                    ? (
                      <div className="loading loading-spinner" />
                      )
                    : (
                      <PencilIcon className="h-4 w-4" />
                      )}
                  ¡Aplicar!
                </button>
              </form>
            )}
            {userData.isOwner && (
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={`/home/projects/${id}/update`}>
                  <button className="btn btn-block sm:btn-md btn-primary hover:bg-white hover:text-neutral hover:border-primary">
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
    </>
  )
}
