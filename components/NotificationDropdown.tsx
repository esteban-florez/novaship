'use client'

import { useState } from 'react'
import { BellIcon } from '@heroicons/react/24/solid'
import AvatarIcon from './AvatarIcon'

interface Props {
  username: string
  time: number
  bgIcon: string
  children: React.ReactNode
}

function Notification({ username, bgIcon, time, children }: Props) {
  return (
    <li className="flex items-center gap-2 p-1 pe-2 last:pt-1 odd:pb-2 even:pb-2">
      <AvatarIcon username={username} bgColor={bgIcon} usernameLength={2} />
      <div className="max-w-xs flex-col pe-4 text-start">
        <p className="truncate text-xs normal-case text-slate-700">{children}</p>
        <small className="text-xs text-neutral-content">Hace {time} minutos</small>
      </div>
    </li>
  )
}

function NotificationDropdown() {
  return (
    <ul
      onClick={(e) => {
        e.stopPropagation()
      }}
      className="absolute right-0 top-14 z-50 flex max-w-sm flex-col whitespace-normal rounded-lg bg-white p-2 shadow-xl"
    >
      <li className="p-2">
        <h3 className="text-start text-lg text-gray-400">Notificaciones</h3>
      </li>
      <Notification username="Martin Max" time={5} bgIcon="neutral">
        Has sido aceptado para la vacante de la empresa "BeautifulDreams", contáctese con nosotros para más información.
      </Notification>
      <Notification username="APP" time={27} bgIcon="primary">
        Se han publicado nuevas ofertas de trabajo, echa un vistazo.
      </Notification>
      <Notification username="APP" time={58} bgIcon="primary">
        Se ha actualizado la app, dale un vistazo a los nuevos cambios.
      </Notification>
      <Notification username="Andrea Samirez" time={17} bgIcon="neutral">
        Le ha dado like a tu perfil.
      </Notification>
    </ul>
  )
}

export default function NotificationIcon() {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

  const handleClick = (): void => {
    setDropdownIsOpen(!dropdownIsOpen)
  }

  return (
    <button
      onClick={handleClick}
      className={`btn-ghost btn-circle btn ${dropdownIsOpen ? 'relative' : ''}`}
    >
      <div className="indicator">
        <BellIcon className="h-6 w-6 text-white" />
        {!dropdownIsOpen && <span className="badge badge-xs indicator-item right-1 top-3 border bg-secondary" />}
      </div>
      {dropdownIsOpen && <NotificationDropdown />}
    </button>
  )
}
