import PageTitle from '@/components/PageTitle'
import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'
// import FilterBar from './FilterBar'
import { getSearchAndFilter } from '@/lib/utils/search-params'
import prisma from '@/prisma/client'
import getPaginationProps from '@/lib/utils/pagination'
import Pagination from '@/components/Pagination'
import ThreeGrid from '@/components/ThreeGrid'
import EmptyContent from '@/components/EmptyContent'
import VacantCard from '@/components/vacants/VacantCard'
import { getVacants } from '@/lib/data-fetching/vacants'
import { PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import FilterBar from '@/components/FilterBar'
import { type Prisma } from '@prisma/client'

export const metadata = {
  title: 'Reclutar pasantes',
}

export default async function VacantsPage({
  params: { id },
  searchParams,
}: SearchParamsProps & PageContext) {
  const { id: userId, type, name } = await auth.user()
  if (type !== 'COMPANY' || userId !== id) notFound()

  const { filter } = getSearchAndFilter(searchParams)

  const where: Prisma.VacantWhereInput = {
    companyId: id,
    skills: {
      some: {
        id: filter,
      },
    },
  }

  const totalRecords = await prisma.vacant.count({ where })

  const { nextPage, skip, take } = getPaginationProps({ totalRecords, searchParams })

  const vacants = await getVacants({ where, skip, take })
  const skills = await prisma.skill.findMany()

  return (
    <>
      <PageTitle
        title="Cupos publicados"
        subtitle="Aquí puedes ver todos los cupos para pasantes que has publicado."
        breadcrumbs={name}
      >
        <Link href="/home/internships/vacants/create" className="btn btn-primary">
          <PlusIcon className="h-5 w-5" />
          Añadir cupo
        </Link>
      </PageTitle>
      <FilterBar filterLabel="habilidades" filterOptions={skills} />
      {vacants.length > 0
        ? (
          <ThreeGrid>
            {vacants.map(vacant => (
              <VacantCard key={vacant.id} vacant={vacant} />
            ))}
          </ThreeGrid>
          )
        : (
          <EmptyContent
            title="No has registrado ningún cupo."
            button={{
              text: 'Añadir cupo',
              url: '/home/internships/vacants/create',
            }}
          />
          )}
      <Pagination
        nextPage={nextPage}
      />
    </>
  )
}
