'use client'

import Link from 'next/link'
import { useState } from 'react'
import AvatarIcon from './AvatarIcon'

interface Props {
  path: string
  name: string
}

function DropdownOption({ path, name }: Props) {
  return (
    <Link
      href={`/${path}`}
      className="border-l py-2 text-start indent-2 text-xs normal-case text-gray-400 hover:border-l-2 hover:border-primary hover:bg-primary/25"
    >
      {name}
    </Link>
  )
}

function ProfileDropdown() {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
      }}
      className="absolute right-0 top-14 z-50 flex flex-col whitespace-nowrap rounded-lg bg-white px-6 py-4 shadow-xl"
    >
      {/* Username */}
      <span className="text-start text-xs text-gray-400">
        Nombre y apellido
      </span>
      <h5 className="mb-3 mt-2 text-center text-black">Username</h5>

      <span className="pt-2 text-start text-xs text-gray-400">Opciones</span>
      <DropdownOption
        path="profile"
        name="Ver perfil"
      />
      <DropdownOption
        path=""
        name="Relleno x1"
      />
      <DropdownOption
        path=""
        name="Relleno x2"
      />
      <DropdownOption
        path=""
        name="Relleno x3"
      />

      {/* Logout */}
      <Link
        href="/login"
        className="mt-6 rounded-sm bg-gray-200 py-2 normal-case shadow-sm transition-colors hover:bg-gray-500 hover:text-white"
      >
        Cerrar sesión
      </Link>
    </div>
  )
}

export default function ProfileIcon() {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

  const handleClick = (): void => {
    setDropdownIsOpen(!dropdownIsOpen)
  }

  return (
    <button
      onClick={handleClick}
      className={`btn-ghost btn-circle btn ${dropdownIsOpen ? 'relative' : ''}`}
    >
      <AvatarIcon username="Maximiliano Xorches" usernameLength={2} />
      {dropdownIsOpen && <ProfileDropdown />}
    </button>
  )
}
