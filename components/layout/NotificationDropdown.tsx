import { BellIcon } from '@heroicons/react/24/outline'
import { getNotifications } from '@/lib/notifications/get'
import { auth } from '@/lib/auth/pages'
import Notification from './Notification'
import EmptyContent from '../EmptyContent'
import Link from 'next/link'

export default async function NotificationDropdown() {
  const { authUserId } = await auth.user()
  const notifications = await getNotifications(authUserId, 3)

  return (
    <div className="dropdown-end dropdown z-30">
      <label
        tabIndex={0}
        className="btn-ghost btn-circle btn"
      >
        <div className="indicator">
          <BellIcon className="h-6 w-6" />
          {notifications.length > 0 && (
            <span className="badge badge-xs indicator-item right-1 top-1 border bg-primary" />
          )}
        </div>
      </label>
      <div className="dropdown-content z-10 rounded-lg border border-neutral-300 bg-white shadow-md max-w-[300px] lg:max-w-none">
        <div className="mb-2 rounded-t-lg bg-primary p-4 text-white shadow">
          <h3 className="text-center font-semibold uppercase">
            Notificaciones
          </h3>
        </div>
        {notifications.length > 0
          ? (
              notifications.map(({ display, id, createdAt }) => (
                <Notification
                  {...display}
                  key={id}
                  id={id}
                  date={createdAt}
                />
              ))
            )
          : (
            <div className="px-20 pb-4">
              <EmptyContent title="No tienes notificaciones." />
            </div>
            )}
        {notifications.length > 0 && (
          <Link href="/home/notifications">
            <button className="w-full rounded-b-lg border-t border-base-300 py-4 text-center hover:bg-base-300">
              <span className="font-bold text-primary">
                Todas las notificaciones
              </span>
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}
