import ProfileDropdown from '@/components/layout/ProfileDropdown'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Breadcrumbs from './Breadcrumbs'
import NotificationDropdown from './NotificationDropdown'
import { format } from '@/lib/utils/date'

export default function Navbar() {
  const date = format(new Date())

  return (
    <nav className="navbar border-b bg-white shadow-md">
      <div className="sm:navbar-start">
        <button className="btn-ghost btn-circle btn">
          <Bars3Icon className="h-6 w-6" />
        </button>
        <Breadcrumbs />
      </div>
      <div className="mr-4 gap-1 text-sm sm:navbar-end sm:text-base">
        <div className="me-4">
          {date}
        </div>
        <NotificationDropdown />
        <ProfileDropdown />
      </div>
    </nav>
  )
}
