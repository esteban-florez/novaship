import ProfileDropdown from '@/components/layout/ProfileDropdown'
import { format } from '@/lib/utils/date'
import Link from 'next/link'
import NotificationDropdown from './NotificationDropdown'
import { Bars3Icon } from '@heroicons/react/24/outline'

// ¿Como se manejarán las notificaciones?
// con volante, como un CARRO BRUUUUMMMMMMMMM
// nah mentira, con Server Sent Events B)
export default function Navbar() {
  const date = format(new Date(), true)

  return (
    <nav className="max-h-4 navbar relative border-b bg-white shadow-md">
      <div className="w-full text-sm navbar-start sm:text-base flex items-center">
        <label
          htmlFor="aside"
          className="sm:hidden btn-ghost btn drawer-button"
        >
          <Bars3Icon className="h-6 w-6" />
        </label>
        <Link
          href="/home"
          className="-mb-1.5 text-3xl font-bold text-primary pb-2 sm:-mb-0 sm:p-2"
        >
          Novaship
        </Link>
      </div>
      <div className="w-full text-sm navbar-end sm:text-base flex items-center">
        <p className="hidden sm:inline sm:mr-2">{date}</p>
        <NotificationDropdown />
        <ProfileDropdown />
      </div>
    </nav>
  )
}
