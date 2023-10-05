import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import PageContent from '@/components/teams/PageContent'
import { auth } from '@/lib/auth/pages'
import getPaginationProps from '@/lib/utils/pagination'
import { getTeams } from '@/lib/data-fetching/teams'

export const metadata: Metadata = {
  title: 'Equipos de trabajo',
}

export default async function TeamsPage({ searchParams }: SearchParamsProps) {
  const { id } = await auth.user()

  // DRY Pagination
  const filter = searchParams.filter ?? 'all'
  const pageNumber = +(searchParams.page ?? 1)
  const totalRecords = await prisma.team.count()

  const { nextPage, skip, take } = getPaginationProps({ pageNumber, totalRecords })

  const teams = await getTeams({
    where: {
      OR: [
        {
          leader: {
            OR: [
              { personId: { not: id } },
              { companyId: {not: id } }
            ]
          },
        },
        {
          memberships: {
            some: {
              personId: { not: id },
              invitation: {
                status: 'ACCEPTED'
              }
            }
          }
        }
      ]
    },
    skip,
    take,
  })
  const myTeams = await getTeams({
    where: {
      OR: [
        {
          leader: {
            OR: [
              { personId: id },
              { companyId: id }
            ]
          },
        },
        {
          memberships: {
            some: {
              personId: id,
              invitation: {
                status: 'ACCEPTED'
              }
            }
          }
        }
      ]
    },
    skip,
    take,
  })

  return (
    <PageContent
      allTeams={teams}
      myTeams={myTeams}
      nextPage={nextPage}
      pageNumber={pageNumber}
      filter={filter}
    />
  )
}
