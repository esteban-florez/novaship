'use client'

import Link from 'next/link'
import { ArrowLeftOnRectangleIcon, EyeIcon } from '@heroicons/react/24/solid'
// DEV
// import useFormHandling from '@/lib/hooks/useFormHandling'

interface DropdownProps {
  username: string
}

export default function ProfileDropdownMenu({ username }: DropdownProps) {
  // const { onSubmit, alert } = useFormHandling({ method: 'DELETE' })
  return (
    <>
      {/* {alert} */}
      <div className="dropdown-content z-10 flex w-max flex-col gap-3 rounded-lg border border-base-300 bg-white p-6 shadow-md">
        <h5 className="text-center text-lg font-semibold">{username}</h5>
        <Link className="flex gap-1 text-sm font-semibold" href="/profile/user">
          <EyeIcon className="h-5 w-5" />
          Ver perfil
        </Link>
        {/* <form action="/api/auth/signout" method="POST" onSubmit={onSubmit}> */}
        <form action="/api/auth/signout" method="POST">
          <button className="flex gap-1 text-sm font-semibold text-error" type="submit">
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            Cerrar sesión
          </button>
        </form>
      </div>
    </>
  )
}
