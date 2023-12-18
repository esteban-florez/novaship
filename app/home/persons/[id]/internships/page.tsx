import FilterBar from '@/components/FilterBar'
import InternshipCard from './InternshipCard'
import PageTitle from '@/components/PageTitle'
import InternshipList from '@/components/internships/InternshipList'
import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'
import prisma from '@/prisma/client'
import { getSearchAndFilter } from '@/lib/utils/search-params'
import { type Metadata } from 'next'
import { tooltip } from '@/lib/tooltip'

export const metadata: Metadata = {
  title: 'Mis pasantías',
}

export default async function MyInternshipsPage({
  params: { id: personId },
  searchParams,
}: PageContext & SearchParamsProps) {
  const { id: userId, type, name } = await auth.user()
  if (type !== 'PERSON' && userId !== personId) notFound()

  const grades = await prisma.grade.findMany()

  const { search, filter } = getSearchAndFilter(searchParams)

  return (
    <>
      <PageTitle
        title="Mis pasantías"
        subtitle={tooltip.internship}
        breadcrumbs={name}
      />
      <FilterBar
        filterLabel="carrera"
        searchLabel="universidad"
        filterOptions={grades}
      />
      <InternshipList
        component={InternshipCard}
        searchParams={searchParams}
        where={{
          institute: {
            name: search,
          },
          gradeId: filter,
          NOT: {
            status: 'REJECTED',
          },
          personId,
        }}
      />
    </>
  )
}
