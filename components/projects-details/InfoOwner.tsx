import { ArrowRightIcon } from '@heroicons/react/24/outline'
import AvatarIcon from '../AvatarIcon'
import Link from 'next/link'

interface Props {
  id: string
  name: string
  description: string
  members?: number | null
}

export default function InfoOwner({ name, description, id, members }: Props) {
  return (
    <>
      <div className="flex flex-col items-center justify-start gap-2 xl:flex-row">
        <AvatarIcon className="h-12 w-12 bg-black text-white" />
        <div className="mb-2 flex flex-col">
          <p className="text-base font-semibold">{name}</p>
          {members != null && <p className="-my-1 text-sm">{members} miembros</p>}
        </div>
      </div>
      <p className="mb-1 line-clamp-3 text-sm">{description}</p>
      <Link href={`/home/teams/${id}`}>
        <button className="btn btn-block btn-secondary hover:bg-white hover:text-neutral-600 hover:border-secondary">
          {members != null ? 'Ver equipo' : 'Ver perfil'}
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </Link>
    </>
  )
}
