import PageTitle from '@/components/PageTitle'
import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'
// import FilterBar from './FilterBar'
import { param } from '@/lib/utils/search-params'
import prisma from '@/prisma/client'
import getPaginationProps from '@/lib/utils/pagination'
import Pagination from '@/components/Pagination'
import ThreeGrid from '@/components/ThreeGrid'
import EmptyContent from '@/components/EmptyContent'
import VacantCard from './VacantCard'
import { getVacants } from '@/lib/data-fetching/vacants'

export const metadata = {
  title: 'Reclutar pasantes',
}

export default async function VacantsPage({
  params: { id },
  searchParams,
}: SearchParamsProps & PageContext) {
  const { id: userId, type, name } = await auth.user()
  if (type !== 'COMPANY' || userId !== id) notFound()

  const where = { companyId: id }
  const pageNumber = +(param(searchParams.page) ?? 1)
  const totalRecords = await prisma.vacant.count({ where })

  const { nextPage, skip, take } = getPaginationProps({ totalRecords, pageNumber })

  const vacants = await getVacants({ where, skip, take })

  return (
    <>
      <PageTitle
        title="Cupos publicados"
        subtitle="Aquí puedes ver todos los cupos para pasantes que has publicado."
        breadcrumbs={name}
      />
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
        pageNumber={pageNumber}
      />
    </>
  )
}
