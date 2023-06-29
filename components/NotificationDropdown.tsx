'use client'

import { useState } from 'react'
import { BellIcon } from '@heroicons/react/24/solid'
import AvatarIcon from './AvatarIcon'

interface Props {
  username: string
  time: number
  bg?: string
  children: React.ReactNode
}

function Notification({ username, bg = 'bg-white', time, children }: Props) {
  return (
    <li className="flex w-80 max-w-xs items-center gap-2 py-1 pe-6 ps-4 last:mb-2 last:pt-1 odd:pb-2 even:pb-2 hover:bg-neutral-focus">
      <AvatarIcon username={username} bg={bg} usernameLength={2} />
      <div className="flex flex-col text-start">
        <p className="line-clamp-2 text-xs normal-case text-white">{children}.</p>
        <small className="text-xs normal-case text-neutral-content">Hace {time} minutos.</small>
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
      className="absolute left-0 top-16 z-50 flex w-full flex-col whitespace-normal rounded-lg border border-gray-600 bg-neutral sm:left-auto sm:right-0 sm:top-14 sm:w-auto sm:max-w-xs md:right-0"
    >
      <li className="mb-2 bg-primary p-4 shadow">
        <h3 className="text-white">Notificaciones</h3>
      </li>

      <Notification username="Martin Max" time={5} bg="bg-white">
        Has sido aceptado para la vacante de la empresa "BeautifulDreams", contáctese con nosotros para más información
      </Notification>
      <Notification username="APP" time={27} bg="bg-primary">
        Se han publicado nuevas ofertas de trabajo, echa un vistazo
      </Notification>
      <Notification username="APP" time={57} bg="bg-primary">
        Se ha actualizado la app, dale un vistazo a los nuevos cambios
      </Notification>
      <Notification username="Andrea Samirez" time={17} bg="bg-white">
        Le ha dado like a tu perfil
      </Notification>
      <Notification username="APP" time={0} bg="bg-primary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit quas beatae, iusto consequuntur nesciunt ut. Eius ab, labore, dolores soluta et repellat, iure quis minima doloribus esse molestias velit
      </Notification>

      <li className="border-t border-gray-600 py-4 hover:bg-neutral-focus">
        <span className="text-secondary hover:text-primary">Ver más</span>
      </li>
    </ul>
  )
}

export default function NotificationIcon() {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

  const handleClick = () => {
    setDropdownIsOpen(!dropdownIsOpen)
  }

  return (
    <button
      onClick={handleClick}
      className="btn-ghost btn-circle btn sm:relative"
    >
      <div className="indicator">
        <BellIcon className="h-6 w-6 text-white" />
        {!dropdownIsOpen && <span className="badge badge-xs indicator-item right-1 top-3 border bg-secondary" />}
      </div>
      {dropdownIsOpen && <NotificationDropdown />}
    </button>
  )
}
