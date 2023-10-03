import ProfileDropdown from '@/components/layout/ProfileDropdown'
import { format } from '@/lib/utils/date'
// import NotificationDropdown from './NotificationDropdown'

// TODO -> ¿Como se manejarán las notificaciones?
// con volante, como un CARRO BRUUUUMMMMMMMMM
export default function Navbar() {
  const date = format(new Date())

  return (
    <nav className="navbar border-b bg-white shadow-md">
      <div className="navbar-start">
        <h2 className="pl-2 text-3xl font-bold">Novaship</h2>
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
