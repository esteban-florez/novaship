import { BellIcon } from '@heroicons/react/24/outline'
import NotificationDropdownMenu from './NotificationDropdownMenu'
import { getNotifications } from '@/lib/notifications/get'
import { auth } from '@/lib/auth/pages'
import Notification from './Notification'
import EmptyContent from '../EmptyContent'

export default async function NotificationDropdown() {
  const { authUserId } = await auth.user()
  const notifications = await getNotifications(authUserId)

  return (
    <div className="dropdown-end dropdown z-20">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <div className="indicator">
          <BellIcon className="h-6 w-6" />
        </div>
      </label>
      <NotificationDropdownMenu>
        {notifications.length > 0
          ? notifications.map(({ display, id, createdAt }) => (
            <Notification
              {...display}
              key={id}
              id={id}
              date={createdAt}
            />
          ))
          : (
            <EmptyContent className="mx-20 mb-5" title="No hay notificaciones." />
            )}
      </NotificationDropdownMenu>
    </div>
  )
}
