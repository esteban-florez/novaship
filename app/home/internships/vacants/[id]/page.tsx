import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'
import PageTitle from '@/components/PageTitle'
import TwoColumnsLayout from '@/components/TwoColumnsLayout'
import Column from '@/components/Column'
import { getVacant } from '@/lib/data-fetching/vacants'
import { vacantIsExpired, vacantIsFull } from '@/lib/utils/tables'

export async function generateMetadata({ params: { id } }: PageContext) {
  const vacant = await getVacant(id)

  if (vacant === null) {
    notFound()
  }

  const { job, company } = vacant

  return {
    title: `${job.title} - ${company.name}`,
  }
}

export default async function VacantDetailsPage({ params: { id } }: PageContext) {
  const { type } = await auth.user()
  const vacant = await getVacant(id)
  const allowed = ['PERSON', 'INSTITUTE']

  if (vacant === null || !allowed.includes(type) ||
    vacantIsFull(vacant) || vacantIsExpired(vacant)
  ) {
    notFound()
  }

  const {
    recruitments, categories, company, description, duration,
    grades, job, limit, location, skills,
  } = vacant

  console.log(recruitments, categories, description, duration, grades, limit, skills)

  return (
    <>
      <PageTitle
        title="Detalle del cupo"
        subtitle="Aquí puedes ver todos los datos del cupo, y puedes realizar la postulación al mismo."
        breadcrumbs={`${job.title} - ${company.name}`}
      />
      <TwoColumnsLayout>
        <Column>
          <h2 className="text-primary font-bold tracking-tighter text-2xl">
            {job.title}
          </h2>
          <p className="-mt-2">{location.title}</p>
        </Column>
        <Column>
          <p>Work in progress</p>
        </Column>
      </TwoColumnsLayout>
    </>
  )
}
