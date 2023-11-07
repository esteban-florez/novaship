import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'
import PageTitle from '@/components/PageTitle'
import TwoColumnsLayout from '@/components/TwoColumnsLayout'
import Column from '@/components/Column'
import { getVacant } from '@/lib/data-fetching/vacants'
import { getVacantExpiration } from '@/lib/utils/tables'
import Container from '@/components/Container'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, MagnifyingGlassIcon, PencilIcon } from '@heroicons/react/24/outline'
import BadgeList from '@/components/BadgeList'
import { format } from '@/lib/utils/date'
import VacantStatus from './VacantStatus'
import IconData from '@/components/IconData'

export async function generateMetadata({ params: { vacantId } }: Context) {
  const vacant = await getVacant(vacantId)

  if (vacant === null) {
    notFound()
  }

  const { job, company } = vacant

  return {
    title: `${job.title} - ${company.name}`,
  }
}

interface Context {
  params: {
    vacantId: string
  }
}

export default async function VacantDetailsPage({ params: { vacantId } }: Context) {
  const { id: userId, type } = await auth.user()
  const vacant = await getVacant(vacantId)

  if (vacant === null || type !== 'COMPANY') {
    notFound()
  }

  const {
    company, description, createdAt,
    grades, job, location, skills,
  } = vacant

  if (company.id !== userId) {
    notFound()
  }

  const expiresAt = getVacantExpiration(vacant)

  return (
    <>
      <PageTitle
        title="Detalle del cupo"
        subtitle="Aquí puedes ver todos los datos del cupo, y puedes realizar la postulación al mismo."
        breadcrumbs={`${job.title} - ${company.name}`}
      />
      <TwoColumnsLayout>
        <Column>
          <h2 className="text-primary font-bold tracking-tighter text-2xl leading-tight">
            {job.title}
          </h2>
          <p className="-mt-2 text-neutral-600 font-semibold text-lg line-clamp-1">
            {location.title}
          </p>
          <p className="py-3">{description}</p>
          <div className="flex justify-between p-4">
            <IconData
              label="Fecha de publicación"
              data={format(createdAt)}
              icon={CalendarIcon}
            />
            <IconData
              label="Fecha de expiración"
              data={format(expiresAt)}
              icon={ClockIcon}
            />
          </div>
          <div className="mt-3 flex flex-col lg:flex-row gap-2">
            <Link
              className="btn btn-warning"
              href={`/home/internships/vacants/${vacantId}/update`}
            >
              <PencilIcon className="h-5 w-5" />
              Editar
            </Link>
            <Link
              className="btn btn-primary"
              href="/home/internships/recruit"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
              Buscar pasantes
            </Link>
          </div>
        </Column>
        <Column>
          <p className="font-bold mb-2">
            Estado del cupo
          </p>
          <VacantStatus vacant={vacant} />
          <Container title="Carreras relacionadas">
            <BadgeList items={grades} />
          </Container>
          <div className="mt-4" />
          <Container title="Habilidades requeridas">
            <BadgeList items={skills} />
          </Container>
        </Column>
      </TwoColumnsLayout>
    </>
  )
}
