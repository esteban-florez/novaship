import NotificationHome from './NotificationHome'
import EmptyContent from '../EmptyContent'
import { type NotificationProps } from '@/lib/types'
import { checkEmpty } from '@/lib/utils/verify'

interface Props {
  notifications: NotificationProps[]
}

export default function NotificationsSection({ notifications }: Props) {
  if (checkEmpty(notifications)) {
    return null
  }

  return (
    <section className="mt-4 sm:p-4">
      <div className="p-4 card bg-white border border-zinc-300 rounded-none sm:rounded-md shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <h3 className="col-span-full text-xl font-bold text-primary">
            Últimas notificaciones
          </h3>
          {notifications.length > 0
            ? (
                notifications.map(({ id, content, ...rest }) => (
                  <div
                    key={id}
                    className="card card-compact border hover:bg-base-200 border-zinc-300 rounded-lg shadow-lg"
                  >
                    <NotificationHome
                      content={content as string}
                      {...rest}
                      key={id}
                    />
                  </div>
                ))
              )
            : (
              <div className="col-span-full">
                <EmptyContent title="No tiene notificaciones." />
              </div>
              )}
        </div>
      </div>
    </section>
  )
}
