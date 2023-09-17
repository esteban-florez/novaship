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
  const pageNumber = +(searchParams.page ?? 1)
  const totalRecords = await prisma.team.count()

  console.log(await prisma.team.findFirst({
    where: { id: 'clm5ur2gt01f1v9z4ag8v5ybp' },
    include: {
      memberships: true,
    },
  }))

  const { nextPage, skip, take } = getPaginationProps({ pageNumber, totalRecords })

  const teams = await getTeams({
    where: {
      memberships: {
        every: {
          OR: [
            { companyId: { not: id } },
            { personId: { not: id } },
          ],
        },
      },
    },
    skip,
    take,
  })
  const myTeams = await getTeams({
    where: {
      memberships: {
        every: {
          isLeader: true,
          OR: [
            { companyId: id },
            { personId: id },
          ],
        },
      },
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
    />
  )
}
