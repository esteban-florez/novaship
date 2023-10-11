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
            'p-2 text-3xl font-bold text-primary'
          )}
        >
          Novaship
        </Link>
      </div>
      <div className="navbar-end text-sm sm:text-base">
        <div className="hidden flex-col items-center px-5 md:flex">
          <p>{date}</p>
        </div>
        {/* <NotificationDropdown /> */}
        <ProfileDropdown />
      </div>
    </nav>
  )
}
