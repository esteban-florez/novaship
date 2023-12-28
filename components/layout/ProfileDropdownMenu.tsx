'use client'

import { ArrowLeftOnRectangleIcon, EyeIcon } from '@heroicons/react/24/solid'
import AvatarIcon from '../AvatarIcon'
import useSubmit from '@/lib/hooks/useSubmit'
import Link from 'next/link'

interface Props {
  username: string
  email: string
  image: string | null
}

export default function ProfileDropdownMenu({ username, email, image }: Props) {
  const { alert, handleSubmit } = useSubmit({ method: 'DELETE' })

  return (
    <>
      {alert}
      <div className="dropdown-content z-10 flex w-max max-w-xs flex-col rounded-lg border border-base-300 bg-white p-2 shadow-md">
        <span className="flex items-center gap-2 rounded-md px-3 py-2">
          <AvatarIcon image={image} />
          <div className="mb-2 flex flex-col">
            <p className="line-clamp-1 text-lg font-semibold">{username}</p>
            <p className="-my-1 text-sm">{email}</p>
          </div>
        </span>
        <div className="divider my-0" />
        <Link
          href="/home/profile"
          className="flex items-center gap-1 rounded-md px-3 py-1 font-semibold hover:bg-neutral-200 hover:text-primary"
        >
          <EyeIcon className="h-5 w-5" />
          Ver perfil
        </Link>
        <form
          action="/api/auth/signout"
          method="DELETE"
          onSubmit={handleSubmit}
        >
          <button
            className="flex w-full items-center gap-1 rounded-md px-3 py-1 font-semibold text-error hover:bg-neutral-200"
            type="submit"
          >
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            Cerrar sesión
          </button>
        </form>
      </div>
    </>
  )
}
