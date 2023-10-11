import ProfileDropdown from '@/components/layout/ProfileDropdown'
import { format } from '@/lib/utils/date'
import Link from 'next/link'
// import NotificationDropdown from './NotificationDropdown'

// TODO -> ¿Como se manejarán las notificaciones?
// con volante, como un CARRO BRUUUUMMMMMMMMM
export default function Navbar() {
  const date = format(new Date())

  return (
    <nav className="navbar flex-col sm:flex-row border-b bg-white shadow-md relative">
      <div className="w-full sm:navbar-start">
        <Link
          href="/home"
          className="sm:p-2 text-3xl font-bold text-primary mx-auto sm:mx-0"
        >
          Novaship
        </Link>
      </div>
      <div className="w-full sm:navbar-end text-sm sm:text-base">
        <div className="mx-auto sm:mx-0 flex flex-col items-center px-5 ">
          <p>{date}</p>
        </div>
        <div className="absolute top-0 right-2 sm:static">
          <ProfileDropdown />
        </div>
        {/* <NotificationDropdown /> */}
      </div>
    </nav>
  )
}
