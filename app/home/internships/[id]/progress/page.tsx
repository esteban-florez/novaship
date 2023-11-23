import PageTitle from '@/components/PageTitle'
import UpdateProgress from '@/components/internships/actions/UpdateProgress'
import { auth } from '@/lib/auth/pages'
import { recruitmentCompletedHours } from '@/lib/utils/tables'
import { notFound } from 'next/navigation'
import ProgressHistory from './ProgressHistory'
import InternshipCard from '@/components/internships/InternshipCard'
import PersonInternshipCard from '@/app/home/persons/[id]/internships/InternshipCard'
import prisma from '@/prisma/client'
import { getRecruitment } from '@/lib/data-fetching/recruitments'
import { getInternship } from '@/lib/data-fetching/internships'
import getPaginationProps from '@/lib/utils/pagination'
import Pagination from '@/components/Pagination'

export const metadata = {
  title: 'Historial de progreso',
}

export default async function InternshipProgressPage({
  params: { id },
  searchParams,
}: PageContext & SearchParamsProps) {
  // DRY 1823
  const { id: userId, type } = await auth.user()

  const recruitment = await getRecruitment(id)
  if (recruitment === null) notFound()

  const internship = await getInternship(recruitment.internshipId)
  if (internship === null) notFound()

  const { vacant } = recruitment
  const { person, grade, instituteId } = internship
  const { companyId } = vacant

  const ids = [companyId, instituteId, person.id]

  if (!ids.includes(userId) || recruitment.status !== 'ACCEPTED') {
    notFound()
  }

  const where = {
    recruitmentId: recruitment.id,
  }

  const totalRecords = await prisma.progress.count({ where })

  const { nextPage, skip, take } = getPaginationProps({ totalRecords, searchParams, pageSize: 4 })

  const progresses = await prisma.progress.findMany({
    where,
    skip,
    take,
    orderBy: {
      startsAt: 'desc',
    },
  })

  const maxHours = internship.hours - recruitmentCompletedHours(recruitment)

  return (
    <>
      <PageTitle
        title="Historial de progreso"
        subtitle="Aquí puedes ver el historial de actualizaciones de progreso de la pasantía."
        breadcrumbs={`${person.name} - ${grade.title}`}
      >
        {type === 'COMPANY' && (
          <UpdateProgress
            recruitmentId={recruitment.id}
            maxHours={maxHours}
          />
        )}
      </PageTitle>
      <section className="flex p-4 gap-4">
        <div className="w-2/3">
          <ProgressHistory progresses={progresses} isCompany={type === 'COMPANY'} />
        </div>
        <div className="w-1/3">
          {type !== 'PERSON'
            ? (
              <InternshipCard internship={internship} withProgressBar />
              )
            : (
              <PersonInternshipCard internship={internship} />
              )}
        </div>
      </section>
      <Pagination nextPage={nextPage} />
    </>
  )
}
