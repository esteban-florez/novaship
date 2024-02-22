import EmptyContent from '@/components/EmptyContent'
import PageTitle from '@/components/PageTitle'
import Pagination from '@/components/Pagination'
import { auth } from '@/lib/auth/pages'
import { getNotifications } from '@/lib/notifications/get'
import { tooltip } from '@/lib/tooltip'
import { diffForHumans } from '@/lib/utils/date'
import getPaginationProps from '@/lib/utils/pagination'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Notificaciones',
}

export default async function NotificationsPage({
  searchParams,
}: SearchParamsProps) {
  const { authUserId } = await auth.user()
  if (authUserId == null) {
    notFound()
  }

  const totalRecords = await prisma.notification.count({
    where: { authUserId },
  })
  const {
    nextPage,
    skip,
    take,
    totalPages,
    page: pageNumber,
  } = getPaginationProps({
    totalRecords,
    searchParams,
  })

  const notifs = await getNotifications(authUserId, take, skip)

  return (
    <>
      <PageTitle
        title="Notificaciones"
        subtitle={tooltip.notification}
      />
      {notifs.length > 0
        ? (
          <section className="mx-auto grid lg:grid-cols-2 p-4 gap-4">
            {notifs.map((notif) => (
              <article
                key={notif.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h3 className="font-bold text-2xl text-primary tracking-tighter">
                  {notif.display.title}
                </h3>
                <p className="font-semibold text-neutral-600 -mt-2">
                  {diffForHumans(notif.createdAt)}
                </p>
                <p>{notif.display.content}</p>
                <Link
                  className="btn btn-primary mt-2"
                  href={notif.display.href}
                >
                  Ver más
                </Link>
              </article>
            ))}
          </section>
          )
        : (
          <div className="pt-20">
            <EmptyContent title="No tienes notificaciones." />
          </div>
          )}
      <Pagination
        currentPage={pageNumber}
        nextPage={nextPage}
        totalPages={totalPages}
        totalRecords={totalRecords}
      />
    </>
  )
}
