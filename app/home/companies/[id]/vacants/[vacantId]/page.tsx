import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'
import PageTitle from '@/components/PageTitle'
import TwoColumnsLayout from '@/components/TwoColumnsLayout'
import Column from '@/components/Column'
import { getVacant } from '@/lib/data-fetching/vacants'
import Link from 'next/link'
import { MagnifyingGlassIcon, PencilIcon } from '@heroicons/react/24/outline'
import VacantStatus from './VacantStatus'
import BasicData from '@/components/vacants-details/BasicData'
import SkillsGrades from '@/components/vacants-details/SkillsGrades'

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

  const { company, job } = vacant

  if (company.id !== userId) {
    notFound()
  }

  return (
    <>
      <PageTitle
        title="Detalle del cupo"
        subtitle="Aquí puedes ver todos los datos del cupo, así como editarlo."
        breadcrumbs={`${job.title} - ${company.name}`}
      />
      <TwoColumnsLayout>
        <Column>
          <BasicData vacant={vacant} />
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
          <VacantStatus vacant={vacant} />
          <SkillsGrades vacant={vacant} />
        </Column>
      </TwoColumnsLayout>
    </>
  )
}
