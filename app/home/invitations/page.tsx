import PageTitle from '@/components/PageTitle'
import Pagination from '@/components/Pagination'
import PageContent from '@/components/invitations/PageContent'
import { auth } from '@/lib/auth/pages'
import { getTeamInvitations } from '@/lib/data-fetching/invitation'
import { tooltip } from '@/lib/tooltip'
import { type InvitationData, type InvitationsTab } from '@/lib/types'
import getPaginationProps from '@/lib/utils/pagination'
import prisma from '@/prisma/client'
import { CheckIcon, ClockIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { type Prisma } from '@prisma/client'
import clsx from 'clsx'
import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Invitaciones',
}

interface FilterQueries {
  pending: Prisma.InvitationWhereInput
  accepted: Prisma.InvitationWhereInput
  rejected: Prisma.InvitationWhereInput
}

// #FIX -> se pueden hacer múltiples postulaciones (duplicado)
export default async function InvitationsPage({
  searchParams,
}: SearchParamsProps) {
  const { id: userId, type } = await auth.user()

  const filter = searchParams.filter ?? 'pending'
  const pageNumber = +(searchParams.page ?? 1)

  if (type !== 'PERSON') {
    notFound()
  }

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
    invitations = await getTeamInvitations({
      where: FILTER_QUERIES.pending,
      take,
      skip,
    })
  }

  if (filter === 'rejected') {
    invitations = await getTeamInvitations({
      where: FILTER_QUERIES.rejected,
      take,
      skip,
    })
  }

  if (filter === 'accepted') {
    invitations = await getTeamInvitations({
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
      <PageTitle
        title="Invitaciones"
        subtitle={tooltip.invitation}
      />
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
      <Pagination nextPage={nextPage} />
    </>
  )
}
