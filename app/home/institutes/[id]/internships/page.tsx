import PageTitle from '@/components/PageTitle'
import Pagination from '@/components/Pagination'
import prisma from '@/prisma/client'
import InternshipCard from './InternshipCard'
import EmptyContent from '@/components/EmptyContent'
import getPaginationProps from '@/lib/utils/pagination'
import { auth } from '@/lib/auth/pages'
import { getInternships } from '@/lib/data-fetching/internships'
import { param } from '@/lib/utils/search-params'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Mis pasantías',
}

export default async function MyInternshipsPage({
  searchParams, params: { id: instituteId },
}: PageContext & SearchParamsProps) {
  const { id: userId, type, name } = await auth.user()
  if (type !== 'INSTITUTE' || userId !== instituteId) {
    notFound()
  }

  const where = { instituteId }

  const pageNumber = +(param(searchParams.page) ?? 1)
  const totalRecords = await prisma.internship.count({ where })

  const { nextPage, skip, take } = getPaginationProps({ totalRecords, pageNumber })

  const internships = await getInternships({ where, skip, take })

  return (
    <>
      <PageTitle
        title="Mis pasantes"
        subtitle="Aqui puedes ver todos los pasantes de tu institución."
        breadcrumbs={name}
      />
      {internships.length > 0
        ? (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
            {internships.map(internship => (
              <InternshipCard key={internship.id} internship={internship} />
            ))}
          </section>
          )
        : (
          <EmptyContent
            button={{
              url: '/home/internships/select',
              text: 'Añadir pasante',
            }}
          />
          )}
      {internships.length > 0 && (
        <Pagination
          pageNumber={pageNumber}
          nextPage={nextPage}
        />
      )}
    </>
  )
}
