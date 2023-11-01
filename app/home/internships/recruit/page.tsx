import PageTitle from '@/components/PageTitle'
import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'
import InternshipList from '@/components/internships/InternshipList'
import { type Prisma } from '@prisma/client'
import RecruitableCard from './RecruitableCard'

export const metadata = {
  title: 'Reclutar pasantes',
}

export default async function RecruitPage({ searchParams }: SearchParamsProps) {
  const { type } = await auth.user()
  if (type !== 'COMPANY') notFound()

  const where: Prisma.InternshipWhereInput = {
    status: 'ACCEPTED',
    recruitments: {
      none: {
        status: 'ACCEPTED',
      },
    },
  }

  return (
    <>
      <PageTitle
        title="Reclutar pasantes"
        subtitle="Aquí puedes ver los pasantes disponibles, y enviarles solicitud de reclutamiento."
      />
      <InternshipList
        component={RecruitableCard}
        where={where}
        searchParams={searchParams}
      />
    </>
  )
}
