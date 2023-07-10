import Link from 'next/link'
import ProfileDropdown from '@/components/layout/ProfileDropdown'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import Breadcrumbs from '../Breadcrumbs'
import NotificationDropdown from './NotificationDropdown'

export default function Navbar() {
  return (
    <nav className="navbar bg-white shadow-md">
      <div className="navbar-start">
        <button className="btn-ghost btn-circle btn">
          <Bars3Icon className="h-6 w-6" />
        </button>
        <Breadcrumbs />
      </div>

      <div className="navbar-end mr-4 gap-1">
        <Link
          href="/chats"
          className="btn-ghost btn-circle btn"
        >
          <div className="indicator">
            <ChatBubbleOvalLeftIcon className="h-6 w-6" />
            <span className="badge badge-xs indicator-item right-1 top-3 bg-success" />
          </div>
        </Link>
        <NotificationDropdown />
        <ProfileDropdown />
      </div>
    </nav>
  )
}
