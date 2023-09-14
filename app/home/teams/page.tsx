import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import PageContent from '@/components/teams/PageContent'

export const metadata: Metadata = {
  title: 'Equipos de trabajo',
}

export default async function TeamsPage({ searchParams }: SearchParamsProps) {
  // DRY Pagination
  const pageNumber = +(searchParams.page ?? 1)
  const pageSize = 20
  const totalRecords = await prisma.team.count()
  const totalPages = Math.ceil(totalRecords / pageSize)
  const hasNextPage = pageNumber < totalPages

  const teams = await prisma.team.findMany({
    skip: (pageNumber - 1) * pageSize,
    take: pageSize,
  })

  return (
    <PageContent
      teams={teams}
      hasNextPage={hasNextPage}
      pageNumber={pageNumber}
    />
  )
}
