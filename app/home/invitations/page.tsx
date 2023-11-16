import PageTitle from '@/components/PageTitle'
import Pagination from '@/components/Pagination'
import PageContent from '@/components/invitations/PageContent'
import { auth } from '@/lib/auth/pages'
import { getInvitations } from '@/lib/data-fetching/invitation'
import { type InvitationData, type InvitationsTab } from '@/lib/types'
import getPaginationProps from '@/lib/utils/pagination'
import prisma from '@/prisma/client'
import { CheckIcon, ClockIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { type Prisma } from '@prisma/client'
import clsx from 'clsx'
import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Invitaciones',
}

interface FilterQueries {
  pending: Prisma.InvitationWhereInput
  accepted: Prisma.InvitationWhereInput
  rejected: Prisma.InvitationWhereInput
}

export default async function InvitationsPage({
  searchParams,
}: SearchParamsProps) {
  const filter = searchParams.filter ?? 'pending'
  const pageNumber = +(searchParams.page ?? 1)

  const { id: userId } = await auth.user()

  const FILTER_QUERIES: FilterQueries = {
    pending: {
      personId: userId,
      status: 'PENDING',
    },
    accepted: {
      personId: userId,
      status: 'ACCEPTED',
    },
    rejected: {
      personId: userId,
      status: 'REJECTED',
    },
  }
  const totalRecords = await prisma.invitation.count({
    where: FILTER_QUERIES[filter as keyof FilterQueries],
  })
  const { nextPage, skip, take } = getPaginationProps({
    pageNumber,
    totalRecords,
  })

  const pendingCount = await prisma.invitation.count({
    where: { personId: userId, status: 'PENDING' },
  })
  const acceptedCount = await prisma.invitation.count({
    where: { personId: userId, status: 'ACCEPTED' },
  })
  const rejectedCount = await prisma.invitation.count({
    where: { personId: userId, status: 'REJECTED' },
  })

  let invitations: InvitationData[] = []

  if (filter === 'pending') {
    invitations = await getInvitations({
      where: FILTER_QUERIES.pending,
      take,
      skip,
    })
  }

  if (filter === 'rejected') {
    invitations = await getInvitations({
      where: FILTER_QUERIES.rejected,
      take,
      skip,
    })
  }

  if (filter === 'accepted') {
    invitations = await getInvitations({
      where: FILTER_QUERIES.accepted,
      take,
      skip,
    })
  }

  const INVITATIONS_TAB_TRANSLATION = {
    pending: 'Pendientes',
    accepted: 'Aceptadas',
    rejected: 'Rechazadas',
  }
  const links = [
    {
      title: 'pending',
      content: `Pendientes (${pendingCount})`,
      icon: <ClockIcon className="h-5 w-5" />,
      query: 'pending',
    },
    {
      title: 'accepted',
      content: `Aceptadas (${acceptedCount})`,
      icon: <CheckIcon className="h-5 w-5" />,
      query: 'accepted',
    },
    {
      title: 'rejected',
      content: `Rechazadas (${rejectedCount})`,
      icon: <XMarkIcon className="h-5 w-5" />,
      query: 'rejected',
    },
  ]

  return (
    <>
      <PageTitle />
      <PageContent
        dropdownLabel={`Filtrado por - ${
          INVITATIONS_TAB_TRANSLATION[filter as InvitationsTab]
        }`}
        invitations={invitations}
        type={filter === 'pending' ? 'invitation' : 'data'}
      >
        {links.map((link) => {
          return (
            <Link
              key={link.title}
              href={{
                pathname: '/home/invitations',
                query: { filter: link.query },
              }}
              className={clsx(
                'btn',
                link.title === filter
                  ? 'btn-primary hover:btn-ghost'
                  : 'hover:btn-primary'
              )}
            >
              {link.icon}
              {link.content}
            </Link>
          )
        })}
      </PageContent>
      <Pagination
        pageNumber={pageNumber}
        nextPage={nextPage}
      />
    </>
  )
}
