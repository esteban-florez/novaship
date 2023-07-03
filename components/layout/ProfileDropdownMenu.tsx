import { ArrowRightOnRectangleIcon, EyeIcon } from '@heroicons/react/24/solid'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

interface DropdownProps {
  username: string
}

export default function ProfileDropdownMenu({ username }: DropdownProps) {
  return (
    <ul
      onClick={(e) => {
        e.stopPropagation()
      }}
      className="absolute left-0 top-16 z-50 flex w-full cursor-default flex-col gap-4 whitespace-nowrap rounded-lg border border-gray-600 bg-neutral px-6 py-4 normal-case sm:left-auto sm:right-0 sm:top-14 sm:w-auto sm:max-w-xs"
    >
      <li>
        <h5 className="text-lg font-semibold text-white">{username}</h5>
      </li>

      <li>
        <Link
          href="/profile"
          className="flex items-center gap-2 p-0 normal-case transition-all hover:brightness-125"
        >
          <EyeIcon className="h-5 w-5" />
          Ver perfil
        </Link>
      </li>

      <li>
        <button
          className="flex items-center gap-2 p-0 normal-case text-error transition-all hover:brightness-125"
          onClick={async () => { await signOut() }}
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          Cerrar sesión
        </button>
      </li>
    </ul>
  )
}
