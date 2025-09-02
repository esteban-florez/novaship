import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'
import PageTitle from '@/components/PageTitle'
import TwoColumnsLayout from '@/components/TwoColumnsLayout'
import Column from '@/components/Column'
import { getVacant } from '@/lib/data-fetching/vacants'
import { vacantIsExpired, vacantIsFull } from '@/lib/utils/tables'
import BasicData from '@/components/vacants-details/BasicData'
import DarkUserCard from '@/components/DarkUserCard'
import SkillsGrades from '@/components/vacants-details/SkillsGrades'
import ApplyButton from '@/components/vacants/ApplyButton'
import prisma from '@/prisma/client'
import TitleContent from '../TitleContent'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { tooltip } from '@/lib/tooltip'

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
    id: string
    vacantId: string
  }
}

export default async function VacantDetailsPage({
  params: { id: internshipId, vacantId },
}: Context) {
  const { type } = await auth.user()
  const internship = await prisma.internship.findUnique({
    where: { id: internshipId },
    include: {
      grade: true,
      person: true,
    },
  })

  const vacant = await getVacant(vacantId)
  const allowed = ['PERSON', 'INSTITUTE']

  if (
    internship === null ||
    vacant === null ||
    !allowed.includes(type) ||
    vacantIsFull(vacant) ||
    vacantIsExpired(vacant)
  ) {
    notFound()
  }

  const { company, job } = vacant
  const { grade, person } = internship

  return (
    <>
      <PageTitle
        title="Detalle del cupo"
        subtitle={tooltip.internship_apply_vacant_id}
        breadcrumbs={`${job.title} - ${company.name}`}
      >
        <TitleContent
          internshipId={internshipId}
          isPerson={type === 'PERSON'}
          grade={grade.title}
          person={person.name}
        />
      </PageTitle>
      <TwoColumnsLayout>
        <Column>
          <BasicData vacant={vacant} />
          <div className="flex gap-2 mt-2">
            <Link
              className="btn bg-white text-neutral-600 hover:bg-neutral-200 border-neutral-300 hover:border-neutral-500"
              href={`/home/internships/${internshipId}/apply`}
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Volver
            </Link>
            <ApplyButton
              internshipId={internshipId}
              vacantId={vacantId}
            />
          </div>
        </Column>
        <Column>
          <SkillsGrades vacant={vacant} />
          <div className="mt-4" />
          <p className="font-bold mb-2">Empresa del cupo</p>
          <DarkUserCard
            user={company}
            type="COMPANY"
            link={`/home/company/${company.id}`}
          />
        </Column>
      </TwoColumnsLayout>
    </>
  )
}
