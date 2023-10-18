import AvatarIcon from '@/components/AvatarIcon'
import PageTitle from '@/components/PageTitle'
import Link from 'next/link'
import StageBadge from './StageBadge'
import GoBackBtn from '@/components/GoBackBtn'
import Recruitments from './Recruitments'
import clsx from 'clsx'
import { auth } from '@/lib/auth/pages'
import { getInternship } from '@/lib/data-fetching/internships'
import { format } from '@/lib/utils/date'
import { getInternshipCompany, getInternshipStage } from '@/lib/utils/tables'
import { notFound } from 'next/navigation'
import { InformationCircleIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { STAGE_ALERTS } from '@/lib/shared/internship-stage'

export default async function InternshipDetailsPage({ params: { id } }: PageContext) {
  const { id: userId } = await auth.user()
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

  if (!ids.includes(userId)) {
    notFound()
  }

  const { person, institute, grade, recruitments, hours, createdAt } = internship
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
          <div className="flex items-center gap-2">
            <AvatarIcon image={person.image} className="w-14 h-14" />
            <div>
              <h1 className="font-bold tracking-tighter text-2xl">
                {person.name}
              </h1>
              <p className="font-semibold text-primary text-lg -mt-2">
                {person.email}
              </p>
            </div>
          </div>
          <p className="mt-4">
            Carrera de la pasantía:
            <span className="font-bold">
              {' ' + grade.title}
            </span>
          </p>
          <p>
            Fecha:
            <span className="font-bold">
              {' ' + format(createdAt)}
            </span>
          </p>
          <p>
            Horas totales:
            <span className="font-bold">
              {` ${hours} horas`}
            </span>
          </p>
          <p>
            Universidad:{' '}
            <span className="font-bold">
              <Link
                className="underline text-secondary"
                href={`/home/profile/${institute.id}`}
              >
                {institute.name}
              </Link>
            </span>
          </p>
          <div className="flex gap-2 mt-2 flex-col lg:flex-row">
            <GoBackBtn label="Volver" />
            <Link className="btn btn-secondary" href={`/home/persons/${person.id}`}>
              <UserIcon className="h-5 w-5" />
              Ver perfil
            </Link>
            {(stage === 'PENDING' || stage === 'REJECTED') && (
              <button className="btn btn-error">
                <XMarkIcon className="h-5 w-5" />
                Eliminar
              </button>
            )}
          </div>
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
