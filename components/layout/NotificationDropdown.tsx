import { BellIcon } from '@heroicons/react/24/outline'
import NotificationDropdownMenu from './NotificationDropdownMenu'

export default function NotificationDropdown() {
  return (
    <div className="dropdown-end dropdown z-20">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <div className="indicator">
          <BellIcon className="h-6 w-6" />
          <span className="badge badge-xs indicator-item right-1 top-3 border bg-success" />
        </div>
      </label>
      <NotificationDropdownMenu />
    </div>
  )
}
