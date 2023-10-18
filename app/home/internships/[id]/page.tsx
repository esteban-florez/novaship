import InternshipActions from '@/components/internships/InternshipActions'
import InternshipData from './InternshipData'
import PageTitle from '@/components/PageTitle'
import StageBadge from './StageBadge'
import Recruitments from './Recruitments'
import clsx from 'clsx'
import PersonData from './PersonData'
import { auth } from '@/lib/auth/pages'
import { getInternship } from '@/lib/data-fetching/internships'
import { getInternshipCompany, getInternshipStage } from '@/lib/utils/tables'
import { notFound } from 'next/navigation'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { STAGE_ALERTS } from '@/lib/shared/internship-stage'

export default async function InternshipDetailsPage({ params: { id } }: PageContext) {
  const { id: userId, type } = await auth.user()
  const internship = await getInternship(id)
  if (internship === null) {
    notFound()
  }

  const company = getInternshipCompany(internship)

  const ids = [
    company?.id,
    internship.personId,
    internship.instituteId,
  ]

  const hiddenForPerson = type === 'PERSON' && internship.status === 'REJECTED'

  if (!ids.includes(userId) || hiddenForPerson) {
    notFound()
  }

  const { person, institute, grade, recruitments } = internship
  const stage = getInternshipStage(internship)
  const stageAlert = STAGE_ALERTS[stage]

  const PRE_COMPANY_STAGES = [
    'PENDING', 'REJECTED', 'ACCEPTED',
  ]

  const inPreCompanyStage = PRE_COMPANY_STAGES.includes(stage)

  return (
    <>
      <PageTitle
        title="Detalle de pasantía"
        subtitle="Aquí puedes ver todos los datos de la pasantía."
        breadcrumbs={`${person.name} - ${grade.title}`}
      />
      <section className="flex flex-col lg:flex-row p-4 gap-2">
        <div className="bg-white p-4 rounded-lg shadow lg:w-1/2">
          <PersonData person={person} />
          <InternshipData
            grade={grade}
            internship={internship}
            institute={institute}
          />
          <div className="mt-4" />
          <InternshipActions
            className="lg:flex-row"
            internship={internship}
            stage={stage}
            userType={type}
            details={false}
          />
          <div className="divider divider-vertical" />
          <h3 className="font-bold tracking-tighter text-2xl">
            Estado de la pasantía: <StageBadge stage={stage} />
          </h3>
          <div className={clsx('alert mt-2', stageAlert.className)}>
            <InformationCircleIcon className="h-6 w-6" />
            <p>
              {stageAlert.text}
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow lg:w-1/2">
          {inPreCompanyStage
            ? (
              <Recruitments recruitments={recruitments} stage={stage} />
              )
            : (
              <>
                <h3 className="font-bold tracking-tighter text-2xl">
                  Empresa de la pasantía
                </h3>
              </>
              )}
        </div>
      </section>
    </>
  )
}
