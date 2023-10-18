import AvatarIcon from '@/components/AvatarIcon'
import PageTitle from '@/components/PageTitle'
import Link from 'next/link'
import clsx from 'clsx'
import { auth } from '@/lib/auth/pages'
import { getInternship } from '@/lib/data-fetching/internships'
import { format } from '@/lib/utils/date'
import { getInternshipCompany, getInternshipStage } from '@/lib/utils/tables'
import { notFound } from 'next/navigation'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

const stages = {
  PENDING: {
    text: 'La solicitud de pasantía fué enviada, esperando confirmación del estudiante.',
    className: 'alert-warning',
  },
  REJECTED: {
    text: 'La solicitud de pasantía fué rechazada por el estudiante.',
    className: 'alert-error',
  },
  ACCEPTED: {
    text: 'La pasantía fué aceptada por el estudiante y está en búsqueda de empresa.',
    className: 'alert-warning',
  },
  ACTIVE: {
    text: 'La pasantía está actualmente en progreso.',
    className: 'alert-info',
  },
  COMPLETED: {
    text: 'Las horas totales de la pasantía fueron completadas.',
    className: 'alert-success',
  },
}

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

  const { person, institute, grade } = internship
  const stage = getInternshipStage(internship)
  const stageData = stages[stage]

  return (
    <>
      <PageTitle
        title="Detalle de pasantía"
        subtitle="Aquí puedes ver todos los datos de la pasantía."
        breadcrumbs={`${person.name} - ${grade.title}`}
      />
      <section className="flex flex-col lg:flex-row p-4 gap-2">
        <div className="bg-white p-4 rounded-lg shadow w-1/2">
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
              {' ' + format(internship.createdAt)}
            </span>
          </p>
          <p>
            Horas totales:
            <span className="font-bold">
              {` ${internship.hours} horas`}
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
          <div className="divider divider-vertical" />
          <h3 className="font-bold tracking-tighter text-2xl">
            Estado de la pasantía
          </h3>
          <div className={clsx('alert mt-2', stageData.className)}>
            <InformationCircleIcon className="h-6 w-6" />
            <p>
              {stageData.text}
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow w-1/2">
          <h3 className="font-bold text-2xl tracking-tighter">
            Postulaciones/ofertas de empresas
          </h3>
        </div>
      </section>
    </>
  )
}
