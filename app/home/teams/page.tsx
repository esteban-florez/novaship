import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import PageContent from '@/components/teams/PageContent'
import { auth } from '@/lib/auth/pages'

export const metadata: Metadata = {
  title: 'Equipos de trabajo',
}

export default async function TeamsPage({ searchParams }: SearchParamsProps) {
  const activeUser = await auth.user()
  // DRY Pagination
  const pageNumber = +(searchParams.page ?? 1)
  const pageSize = 20
  const totalRecords = await prisma.team.count()
  const totalPages = Math.ceil(totalRecords / pageSize)
  const hasNextPage = pageNumber < totalPages

  const teams = await prisma.team.findMany({
    skip: (pageNumber - 1) * pageSize,
    take: pageSize,
    include: {
      memberships: {
        include: {
          person: true,
        },
      },
    },
  })

  const allTeams = teams.filter(team => {
    return team.memberships.some(member => member.personId !== activeUser.id)
  })
  // no se como mostrar mis equipos xd
  const myTeams = teams.filter(team => {
    return team.memberships.filter(member => {
      return member.personId === activeUser.id
    }).length > 0
  })

  return (
    <PageContent
      allTeams={allTeams}
      myTeams={myTeams}
      hasNextPage={hasNextPage}
      pageNumber={pageNumber}
    />
  )
}
