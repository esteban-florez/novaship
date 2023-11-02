import PageTitle from '@/components/PageTitle'
import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'
import InternshipList from '@/components/internships/InternshipList'
import { type Prisma } from '@prisma/client'
import RecruitableCard from './RecruitableCard'
import FilterBar from './FilterBar'
import { param } from '@/lib/utils/search-params'
import prisma from '@/prisma/client'

export const metadata = {
  title: 'Reclutar pasantes',
}

export default async function RecruitPage({ searchParams }: SearchParamsProps) {
  const { type } = await auth.user()
  if (type !== 'COMPANY') notFound()

  const grades = await prisma.grade.findMany({
    select: { id: true, title: true },
  })

  const search = param(searchParams.search)
  const grade = param(searchParams.grade)

  const where: Prisma.InternshipWhereInput = {
    status: 'ACCEPTED',
    recruitments: {
      none: {
        status: 'ACCEPTED',
      },
    },
    person: {
      name: {
        contains: search,
        mode: 'insensitive',
      },
    },
    gradeId: grade,
  }

  return (
    <>
      <PageTitle
        title="Reclutar pasantes"
        subtitle="Aquí puedes ver los pasantes disponibles, y enviarles solicitud de reclutamiento."
      />
      <FilterBar grades={grades} />
      <InternshipList
        component={RecruitableCard}
        where={where}
        searchParams={searchParams}
      />
    </>
  )
}
