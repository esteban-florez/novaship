import ProfileDropdown from '@/components/layout/ProfileDropdown'
import { format } from '@/lib/utils/date'
import Link from 'next/link'
import NotificationDropdown from './NotificationDropdown'

// ¿Como se manejarán las notificaciones?
// con volante, como un CARRO BRUUUUMMMMMMMMM
// nah mentira, con Server Sent Events B)
export default function Navbar() {
  const date = format(new Date(), true)

  return (
    <nav className="max-h-4 navbar relative flex-col border-b bg-white shadow-md sm:flex-row">
      <div className="w-full sm:navbar-start">
        <Link
          href="/home"
          className="-mb-1.5 mx-auto text-3xl font-bold text-primary sm:-mb-0 sm:mx-0 sm:p-2"
        >
          Novaship
        </Link>
      </div>
      <div className="w-full text-sm sm:navbar-end sm:text-base">
        <div className="mx-auto flex flex-col items-center px-5 sm:mx-0">
          <p>{date}</p>
        </div>
        <NotificationDropdown />
        <span className="mx-1" />
        <div className="absolute right-2 top-0 sm:static">
          <ProfileDropdown />
        </div>
      </div>
    </nav>
  )
}
