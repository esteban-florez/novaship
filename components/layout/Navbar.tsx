import ProfileDropdown from '@/components/layout/ProfileDropdown'
// import NotificationDropdown from './NotificationDropdown'
// import { format } from '@/lib/utils/date'

// TODO -> ¿Como se manejarán las notificaciones?
// con volante, como un CARRO BRUUUUMMMMMMMMM
export default function Navbar() {
  // descomentar pa mostrarselo a Ana namas, que pendejada lo de la fecha
  // const date = format(new Date())

  return (
    <nav className="navbar border-b bg-white shadow-md">
      <div className="navbar-start" />
      <div className="navbar-end text-sm sm:text-base">
        {/* <p className="px-5">
          {date}
        </p> */}
        {/* <NotificationDropdown /> */}
        <ProfileDropdown />
      </div>
    </nav>
  )
}
