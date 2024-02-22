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
import Progress from './Progress'
import { PDFProvider } from './PDFProvider'
import DownloadButton from './DownloadButton'
import { tooltip } from '@/lib/tooltip'

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

  const {
    nextPage,
    skip,
    take,
    totalPages,
    page: pageNumber,
  } = getPaginationProps({
    totalRecords,
    searchParams,
    pageSize: 4,
  })

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
    <PDFProvider>
      <PageTitle
        title="Historial de progreso"
        subtitle={tooltip.internship_progress}
        breadcrumbs={`${person.name} - ${grade.title}`}
      >
        {type === 'COMPANY' && (
          <UpdateProgress
            minDate={recruitment.startsAt}
            recruitmentId={recruitment.id}
            maxHours={maxHours}
          />
        )}
        <DownloadButton />
      </PageTitle>
      <section className="flex p-4 gap-4">
        <div className="w-2/3">
          <ProgressHistory>
            <ol className="relative border-s space-y-8">
              {progresses.map((progress) => (
                <Progress
                  key={progress.id}
                  progress={progress}
                  withActions={type === 'COMPANY'}
                />
              ))}
            </ol>
          </ProgressHistory>
        </div>
        <div className="w-1/3">
          {type !== 'PERSON'
            ? (
              <InternshipCard
                internship={internship}
                withProgressBar
              />
              )
            : (
              <PersonInternshipCard internship={internship} />
              )}
        </div>
      </section>
      <Pagination
        currentPage={pageNumber}
        nextPage={nextPage}
        totalPages={totalPages}
        totalRecords={totalRecords}
      />
    </PDFProvider>
  )
}
