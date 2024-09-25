import PageTitle from '@/components/PageTitle'
import UpdateProgress from '@/components/internships/actions/UpdateProgress'
import { auth } from '@/lib/auth/pages'
import { recruitmentCompletedHours } from '@/lib/utils/tables'
import { notFound } from 'next/navigation'
import InternshipCard from '@/components/internships/InternshipCard'
import PersonInternshipCard from '@/app/home/persons/[id]/internships/InternshipCard'
import prisma from '@/prisma/client'
import { getRecruitment } from '@/lib/data-fetching/recruitments'
import { getInternship } from '@/lib/data-fetching/internships'
import getPaginationProps from '@/lib/utils/pagination'
import Pagination from '@/components/Pagination'
import Progress from './Progress'
import { tooltip } from '@/lib/tooltip'
import { PDFProvider } from '@/components/pdf/PDFProvider'
import WrapperPDF from '@/components/pdf/WrapperPDF'
import { format } from '@/lib/utils/text'

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
  const { person, grade, hours, institute, instituteId } = internship
  const { companyId, company } = vacant

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

  const PDFDescription = `
  El siguiente documento hace constancia de la participación del estudiante ${person.name
    }, cédula de identidad ${format(
      person.ci,
      'ci'
    )}, el cual se encuentra cursando la carrera de "${grade.title
    }" y realizando actividades de pasantía en la empresa "${company.name
    }", actividades que a la fecha cumplen con ${recruitmentCompletedHours(
      recruitment
    )} de las ${hours} horas pautadas.
  `

  return (
    <PDFProvider documentTitle={`Historial de progreso de ${person.name}`}>
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
      </PageTitle>
      <section className="flex p-4 gap-4">
        <div className="w-2/3">
          <WrapperPDF
            pageTitle="Actividades de la pasantía"
            header={<>
              <p className="font-bold text-lg leading-tight">{institute.name}</p>
              <p className="font-bold text-lg">J-{institute.rif}</p>
            </>}
            footer={`${institute.location.title} - ${institute.phone}`}
            description={PDFDescription}
            extraImage={institute.image ?? undefined}
            descriptionPosition="beforeTitle"
            signResponsable={institute.name}
            sign
          >
            <div className="bg-white px-8 py-4 rounded-lg shadow">
              <ol className="relative border-s space-y-8">
                {progresses.map((progress) => (
                  <Progress
                    key={progress.id}
                    progress={progress}
                    withActions={type === 'COMPANY'}
                  />
                ))}
              </ol>
            </div>
          </WrapperPDF>
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
