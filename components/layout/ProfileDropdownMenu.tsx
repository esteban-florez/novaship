'use client'

import { ArrowLeftOnRectangleIcon, /* Cog6ToothIcon, */ EyeIcon } from '@heroicons/react/24/solid'
import useFormHandling from '@/lib/hooks/useFormHandling'
import AvatarIcon from '../AvatarIcon'
import Link from 'next/link'

interface DropdownProps {
  username: string
  email: string
}

export default function ProfileDropdownMenu({ username, email }: DropdownProps) {
  const { onSubmit, alert } = useFormHandling({ method: 'DELETE' })

  return (
    <>
      {alert}
      <div className="dropdown-content z-10 flex w-max flex-col rounded-lg border border-base-300 bg-white p-2 shadow-md">
        <Link href="#" className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-neutral-200">
          <AvatarIcon username={username} className="h-10 w-10 bg-black text-white" />
          <div className="mb-2 flex flex-col">
            <p className="text-lg font-semibold">{username}</p>
            <p className="-my-1 text-sm">{email}</p>
          </div>
        </Link>
        <div className="divider my-0" />
        <Link className="flex items-center gap-1 rounded-md px-3 py-1 font-semibold text-primary hover:bg-neutral-200" href="/home/profile">
          <EyeIcon className="h-5 w-5" />
          Ver perfil
        </Link>
        {/* <Link className="flex items-center gap-1 rounded-md px-3 py-1 font-semibold hover:bg-neutral-200" href="#">
          <Cog6ToothIcon className="h-5 w-5" />
          Ajustes
        </Link> */}
        <form action="/api/auth/signout" method="POST" onSubmit={onSubmit}>
          <button className="flex w-full items-center gap-1 rounded-md px-3 py-1 font-semibold text-error hover:bg-neutral-200" type="submit">
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            Cerrar sesión
          </button>
        </form>
      </div>
    </>
  )
}
