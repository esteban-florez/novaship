import EmptyContent from '@/components/EmptyContent'
import PageTitle from '@/components/PageTitle'
import Pagination from '@/components/Pagination'
import { auth } from '@/lib/auth/pages'
import { getNotifications } from '@/lib/notifications/get'
import { diffForHumans } from '@/lib/utils/date'
import getPaginationProps from '@/lib/utils/pagination'
import { param } from '@/lib/utils/search-params'
import prisma from '@/prisma/client'
import Link from 'next/link'

export default async function NotificationsPage({ searchParams }: SearchParamsProps) {
  const { authUserId } = await auth.user()

  const totalRecords = await prisma.notification.count({ where: { authUserId } })
  const pageNumber = +(param(searchParams.page) ?? 1)
  const { nextPage, skip, take } = getPaginationProps({
    totalRecords, pageNumber,
  })

  const notifs = await getNotifications(authUserId, take, skip)

  return (
    <>
      <PageTitle
        title="Notificaciones"
        subtitle="Aquí puedes ver el historial de todas tus notificaciones."
      />
      {notifs.length > 0
        ? (
          <section className="mx-auto grid lg:grid-cols-2 p-4 gap-4">
            {notifs.map(notif => (
              <article key={notif.id} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-2xl text-primary tracking-tighter">
                  {notif.display.title}
                </h3>
                <p className="font-semibold text-neutral-600 -mt-2">
                  {diffForHumans(notif.createdAt)}
                </p>
                <p>{notif.display.content}</p>
                <Link
                  className="btn btn-primary mt-2" href={notif.display.href}
                >Ver más
                </Link>
              </article>
            ))}
          </section>
          )
        : (
          <EmptyContent />
          )}
      <Pagination nextPage={nextPage} pageNumber={pageNumber} />
    </>
  )
}
