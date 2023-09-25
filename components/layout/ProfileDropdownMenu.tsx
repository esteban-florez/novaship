'use client'

import useDeleteRequest from '@/lib/hooks/useDeleteRequest'
// import Link from 'next/link'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'

type Props = React.PropsWithChildren<{
  username: string
}>

export default function ProfileDropdownMenu({ username }: Props) {
  const { alert, handleSubmit } = useDeleteRequest()

  return (
    <>
      {alert}
      <div className="dropdown-content z-10 flex w-max flex-col gap-3 rounded-lg border border-base-300 bg-white p-6 shadow-md">
        <h5 className="text-center text-lg font-semibold">{username}</h5>
        {/* <Link className="flex gap-1 font-semibold" href="/profile/user">
          <EyeIcon className="h-5 w-5" />
          Ver perfil
        </Link> */}
        <form action="/api/auth/signout" method="DELETE" onSubmit={handleSubmit}>
          <button className="flex gap-1 font-semibold text-error" type="submit">
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            Cerrar sesión
          </button>
        </form>
      </div>
    </>
  )
}
