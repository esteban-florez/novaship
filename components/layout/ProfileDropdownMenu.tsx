'use client'

import Link from 'next/link'
import { ArrowLeftOnRectangleIcon, EyeIcon } from '@heroicons/react/24/solid'
import { signOut } from 'next-auth/react'

interface DropdownProps {
  username: string
}

export default function ProfileDropdownMenu({ username }: DropdownProps) {
  return (
    <div className="dropdown-content z-10 flex w-max flex-col gap-3 rounded-lg border border-base-300 bg-white p-6 shadow-md">
      <h5 className="text-center text-lg font-semibold">{username}</h5>
      <Link className="flex gap-1 text-sm font-semibold" href="/home/profile/user">
        <EyeIcon className="h-5 w-5" />
        Ver perfil
      </Link>
      <button className="flex gap-1 text-sm font-semibold text-error" onClick={async () => { await signOut() }}>
        <ArrowLeftOnRectangleIcon className="h-5 w-5" />
        Cerrar sesión
      </button>
    </div>
  )
}
