'use client'

import Link from 'next/link'
import { useState } from 'react'
import AvatarIcon from './AvatarIcon'
import { useSession } from 'next-auth/react'

interface OptionsProps {
  path: string
  name: string
}

interface DropdownProps {
  username: string
}

function DropdownOption({ path, name }: OptionsProps) {
  return (
    <Link
      href={`/${path}`}
      className="border-l-4 py-2 text-start indent-2 text-xs normal-case text-gray-400 hover:border-primary hover:bg-primary/25"
    >
      {name}
    </Link>
  )
}

function ProfileDropdown({ username }: DropdownProps) {
  return (
    <ul
      onClick={(e) => {
        e.stopPropagation()
      }}
      className="absolute left-0 top-16 z-50 flex w-full flex-col whitespace-nowrap rounded-lg border border-gray-600 bg-neutral px-6 py-4 sm:left-auto sm:right-0 sm:top-14 sm:w-auto sm:max-w-xs"
    >
      <li>
        <span className="text-start text-xs text-neutral-content">
          Nombre y apellido
        </span>
        <h5 className="mb-3 mt-2 text-center text-xs text-white">{username}</h5>
      </li>

      <li className="flex flex-col">
        <span className="pt-2 text-start text-xs text-neutral-content">Opciones</span>
        <DropdownOption
          path="profile"
          name="Ver perfil"
        />
      </li>

      <li>
        <Link
          href="/login"
          className="btn-secondary btn-sm btn mt-6 w-full normal-case transition-colors hover:btn-primary"
        >
          Cerrar sesión
        </Link>
      </li>
    </ul>
  )
}

export default function ProfileIcon() {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const { data } = useSession()
  const username = data?.user?.name ?? ''

  const handleClick = (): void => {
    setDropdownIsOpen(!dropdownIsOpen)
  }

  return (
    <button
      onClick={handleClick}
      className="btn-ghost btn-circle btn sm:relative"
    >
      <AvatarIcon username={username} usernameLength={2} />
      {dropdownIsOpen && <ProfileDropdown username={username} />}
    </button>
  )
}
