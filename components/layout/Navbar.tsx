import Link from 'next/link'
import ProfileIcon from '@/components/ProfileDropdown'
import { Bars3Icon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid'
import NotificationIcon from '../NotificationDropdown'

export default function Navbar() {
  return (
    /**
     * ! <nav> doesn't work, only <div> must be fixed.
     */
    <div className="navbar border-b-2 border-gray-500 bg-base-100">
      <div className="navbar-start">
        <button className="btn-ghost btn-circle btn">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      <div className="navbar-end mr-4 gap-1">
        <Link href="/chats" className="btn-ghost btn-circle btn">
          <div className="indicator">
            <ChatBubbleOvalLeftIcon className="h-6 w-6 text-white" />
            <span className="badge badge-xs indicator-item right-1 top-3 border bg-secondary" />
          </div>
        </Link>
        <NotificationIcon />
        <ProfileIcon />
      </div>
    </div>
  )
}
