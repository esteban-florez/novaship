import AvatarIcon from './AvatarIcon'
import clsx from 'clsx'
import InlineList from './InlineList'
import { type ProjectMembership } from '@/lib/types'
import Link from 'next/link'
import { FireIcon } from '@heroicons/react/24/outline'

interface Props {
  title: string
  categories?: Array<{
    id: string
    title: string
  }>
  description: string
  owner?: string
  location?: string
  members?: ProjectMembership[]
  link?: string
  offerLimit?: number
  expiresAt?: number
}

const stackOrder = ['z-40', 'z-30', 'z-20']

// TODO -> mover el boton a bajo (flex-col) para las ofertas
export default function Card({
  title,
  categories,
  description,
  owner,
  location,
  members,
  link = '',
  offerLimit,
  expiresAt,
}: Props) {
  const expiresAtMessage = () => {
    if (expiresAt != null) {
      if (expiresAt > 0) {
        return `Expira en ${expiresAt} ${expiresAt > 1 ? 'días' : 'día'}`
      }

      if (expiresAt === 0) {
        return 'Expira pronto'
      }
    }

    return 'La oferta expiró'
  }
  const quotasLimit =
    offerLimit != null && offerLimit > 0
      ? `Quedan ${offerLimit} cupos`
      : 'No hay cupos.'

  return (
    <div>
      <div className="relative">
        {/* {expiresAt != null && (
          <div className="absolute rounded-br-lg rounded-tl-lg bg-white/80 px-4 py-2 shadow-lg">
            <p className="text-sm text-neutral-600 font-semibold">
              {expiresAtMessage()}
            </p>
          </div>
        )} */}
        {offerLimit != null && (
          <div className="absolute right-0 rounded-bl-lg rounded-tr-lg bg-white/80 px-4 py-2 shadow-lg">
            <p className="text-sm text-neutral-600 font-semibold">
              {quotasLimit}
            </p>
          </div>
        )}
        <img
          src="/card.webp"
          alt="Imagen de fondo carrusel"
          className="h-28 w-full rounded-t-xl object-cover"
        />
        <img
          src="/onda-horizontal.webp"
          alt="Onda-horizontal"
          className="absolute bottom-0 w-full"
        />
      </div>
      <div className="card card-compact bg-base-100 rounded-lg shadow-lg">
        <div className="flex flex-col gap-3 p-4 pt-1">
          {/* Ofertas */}
          <div className="border-b border-neutral-400 pb-2">
            {expiresAt != null && (
              <div className="flex items-center gap-1">
                <FireIcon className="h-4 w-4" />
                <p className="text-xs text-neutral-600 font-semibold">
                  {expiresAtMessage()}
                </p>
              </div>
            )}
            <h3 className="line-clamp-1 text-lg font-bold sm:text-xl">
              {title}
            </h3>
            {categories !== undefined && categories?.length > 0 && (
              <InlineList
                items={categories.map(({ title }) => title)}
                className="-mt-1"
                hideList
              />
            )}
          </div>
          <p className="line-clamp-2 text-neutral-600 text-sm lg:line-clamp-3">
            {description}
          </p>
          {/* TODO -> actualizar */}
          {members != null
            ? (
              <div className="flex justify-between items-center gap-3">
                <div className="flex shrink-0 flex-row items-center justify-start -space-x-3">
                  {members.map((member, i) => {
                    if (i <= 2) {
                      return (
                        <AvatarIcon
                          key={member.id}
                          className={clsx(
                            'h-10 w-10 border-2 border-white bg-black text-white',
                            stackOrder[i],
                            i > 0 && 'ms-1'
                          )}
                        />
                      )
                    }
                    return null
                  })}
                  {members.length > 3 && (
                    <div
                      className={clsx(
                        'z-10 flex h-10 w-10 items-center justify-center text-sm font-bold',
                        members.length > 9 ? 'ps-2' : ''
                      )}
                    >
                      +{members.length - 3}
                    </div>
                  )}
                </div>
                <Link href={link}>
                  <button className="btn btn-block btn-secondary hover:bg-white hover:text-neutral-600">
                    Ver más
                  </button>
                </Link>
              </div>)
            : (
              <div className="flex flex-col gap-3">
                {owner !== undefined && (
                  <div className="flex items-center gap-2">
                    <AvatarIcon className="bg-black text-white" />
                    <div className="flex flex-col">
                      <h5 className="text-sm font-bold">{owner}</h5>
                      <small className="-mt-1 text-xs">{location}</small>
                    </div>
                  </div>
                )}
                <Link href={link}>
                  <button className="btn btn-block btn-secondary hover:bg-white hover:text-neutral-600">
                    Ver más
                  </button>
                </Link>
              </div>)}
        </div>
      </div>
    </div>
  )
}
