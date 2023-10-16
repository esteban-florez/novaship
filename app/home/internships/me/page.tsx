import PageTitle from '@/components/PageTitle'
import Pagination from '@/components/Pagination'
import { auth } from '@/lib/auth/pages'
import { getInternships } from '@/lib/data-fetching/internships'
import getPaginationProps from '@/lib/utils/pagination'
import { param } from '@/lib/utils/search-params'
import prisma from '@/prisma/client'
import InternshipCard from './InternshipCard'

export const metadata = {
  title: 'Mis pasantes',
}

export default async function MyInternsPage({ searchParams }: SearchParamsProps) {
  const { id, type } = await auth.user()

  const where = {
    personId: type === 'PERSON' ? id : undefined,
    instituteId: type === 'INSTITUTE' ? id : undefined,
  }

  const pageNumber = +(param(searchParams.page) ?? 1)
  const totalRecords = await prisma.internship.count({ where })

  const { nextPage, skip, take } = getPaginationProps({ totalRecords, pageNumber })

  const internships = await getInternships({ where, skip, take })

  return (
    <>
      <PageTitle
        title="Mis pasantes"
        subtitle="Aqui puedes ver todos los pasantes de tu institución."
      />
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
        {internships.map(internship => (
          <InternshipCard key={internship.id} internship={internship} />
        ))}
      </section>
      <Pagination
        pageNumber={pageNumber}
        nextPage={nextPage}
      />
    </>
  )
}
