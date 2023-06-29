import Link from 'next/link'
import ProfileDropdown from '@/components/ProfileDropdown'
import { Bars3Icon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid'
import NotificationIcon from '../NotificationDropdown'
import Breadcrumbs from '../Breadcrumbs'

export default function Navbar() {
  return (
    <nav className="navbar bg-neutral">
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
            <ChatBubbleOvalLeftIcon className="h-6 w-6 text-white" />
            <span className="badge badge-xs indicator-item right-1 top-3 border bg-secondary" />
          </div>
        </Link>
        <NotificationIcon />
        <ProfileDropdown />
      </div>
    </nav>
  )
}
