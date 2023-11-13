import PageTitle from '@/components/PageTitle'
import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'
import InternshipList from '@/components/internships/InternshipList'
import { type Prisma } from '@prisma/client'
import RecruitableCard from './RecruitableCard'
import FilterBar from '@/components/FilterBar'
import { getSearchAndFilter } from '@/lib/utils/search-params'
import prisma from '@/prisma/client'

export const metadata = {
  title: 'Reclutar pasantes',
}

export default async function RecruitPage({ searchParams }: SearchParamsProps) {
  const { id, type } = await auth.user()
  if (type !== 'COMPANY') notFound()

  const grades = await prisma.grade.findMany({
    select: { id: true, title: true },
  })

  const { search, filter } = getSearchAndFilter(searchParams)

  const where: Prisma.InternshipWhereInput = {
    status: 'ACCEPTED',
    AND: [
      {
        recruitments: {
          none: {
            status: 'ACCEPTED',
          },
        },
      },
      {
        recruitments: {
          none: {
            vacant: {
              companyId: id,
            },
          },
        },
      },
    ],
    person: {
      name: {
        contains: search,
        mode: 'insensitive',
      },
    },
    gradeId: filter,
  }

  return (
    <>
      <PageTitle
        title="Reclutar pasantes"
        subtitle="Aquí puedes ver los pasantes disponibles, y enviarles solicitud de reclutamiento."
      />
      <FilterBar
        filterOptions={grades}
        filterLabel="carrera"
        searchLabel="nombre"
      />
      <InternshipList
        component={RecruitableCard}
        where={where}
        searchParams={searchParams}
      />
    </>
  )
}
