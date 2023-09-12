import ProfileDropdown from '@/components/layout/ProfileDropdown'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Breadcrumbs from './Breadcrumbs'
// import NotificationDropdown from './NotificationDropdown'
// import { format } from '@/lib/utils/date'

// TODO -> ¿Como se manejarán las notificaciones?
// con volante, como un CARRO BRUUUUMMMMMMMMM
export default function Navbar() {
  // descomentar pa mostrarselo a Ana namas, que pendejada lo de la fecha
  // const date = format(new Date())

  return (
    <nav className="navbar border-b bg-white shadow-md">
      <div className="w-1/4 sm:navbar-start">
        <button className="btn-ghost btn-circle btn">
          <Bars3Icon className="h-6 w-6" />
        </button>
        <Breadcrumbs />
      </div>
      <div className="w-3/4 text-sm sm:navbar-end sm:text-base">
        {/* <p className="px-5">
          {date}
        </p> */}
        {/* <NotificationDropdown /> */}
        <ProfileDropdown />
      </div>
    </nav>
  )
}
