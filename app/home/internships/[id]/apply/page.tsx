import PageTitle from '@/components/PageTitle'
import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'
import { type Prisma } from '@prisma/client'
import FilterBar from '@/components/FilterBar'
import { getSearchAndFilter } from '@/lib/utils/search-params'
import prisma from '@/prisma/client'
import { getInternship } from '@/lib/data-fetching/internships'
import { getInternshipStage, validVacants } from '@/lib/utils/tables'
import getPaginationProps from '@/lib/utils/pagination'
import { getVacants } from '@/lib/data-fetching/vacants'
import Pagination from '@/components/Pagination'
import EmptyContent from '@/components/EmptyContent'
import VacantCard from '@/components/vacants/VacantCard'
import TitleContent from './TitleContent'
import { tooltip } from '@/lib/tooltip'

export const metadata = {
  title: 'Buscar cupos',
}

export default async function RecruitPage({
  searchParams,
  params: { id },
}: PageContext & SearchParamsProps) {
  const { id: userId, type } = await auth.user()
  const internship = await getInternship(id)
  if (internship === null) notFound()

  const ids = [internship.personId, internship.instituteId]
  const stage = getInternshipStage(internship)
  if (stage !== 'ACCEPTED' || !ids.includes(userId)) notFound()

  const { filter } = getSearchAndFilter(searchParams)
  const { grade, person } = internship
  const jobs = await prisma.job.findMany()

  const where: Prisma.VacantWhereInput = {
    grades: {
      some: {
        id: grade.id,
      },
    },
    jobId: filter,
  }

  const totalRecords = await prisma.vacant.count({ where })

  const { nextPage, skip, take } = getPaginationProps({
    pageSize: 5,
    totalRecords,
    searchParams,
  })

  const allVacants = await getVacants({ where, skip, take })

  const vacants = validVacants(allVacants)

  return (
    <>
      <PageTitle
        title="Buscar cupos"
        subtitle={tooltip.internship_apply_id}
        breadcrumbs={`${grade.title} - ${person.name}`}
      >
        <TitleContent
          internshipId={internship.id}
          isPerson={type === 'PERSON'}
          grade={grade.title}
          person={person.name}
        />
      </PageTitle>
      <FilterBar
        filterOptions={jobs}
        filterLabel="puesto de trabajo"
      />
      {vacants.length > 0
        ? (
          <div className="grid gap-4 p-4 lg:grid-cols-2">
            {vacants.map((vacant) => (
              <VacantCard
                internshipId={internship.id}
                key={vacant.id}
                vacant={vacant}
                withGrades
              />
            ))}
          </div>
          )
        : (
          <EmptyContent>
            No hemos encontrado ningún cupo de pasantía para la carrera que
            buscas.
          </EmptyContent>
          )}
      <Pagination nextPage={nextPage} />
    </>
  )
}
