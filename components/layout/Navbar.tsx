import ProfileDropdown from '@/components/layout/ProfileDropdown'
import { format } from '@/lib/utils/date'
import clsx from 'clsx'
import Link from 'next/link'
// import NotificationDropdown from './NotificationDropdown'

// TODO -> ¿Como se manejarán las notificaciones?
// con volante, como un CARRO BRUUUUMMMMMMMMM
// TODO -> responsive
export default function Navbar() {
  const date = format(new Date())

  return (
    <nav className="navbar border-b bg-white shadow-md">
      <div className="navbar-start">
        <Link
          href="/home"
          className={clsx(
            'p-2 text-3xl font-bold'
          )}
        >
          Novaship
        </Link>
      </div>
      <div className="navbar-end text-sm sm:text-base">
        <p className="px-5">
          {date}
        </p>
        {/* <NotificationDropdown /> */}
        <ProfileDropdown />
      </div>
    </nav>
  )
}
