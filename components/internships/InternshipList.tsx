import { getInternships } from '@/lib/data-fetching/internships'
import getPaginationProps from '@/lib/utils/pagination'
import { param } from '@/lib/utils/search-params'
import prisma from '@/prisma/client'
import Pagination from '../Pagination'
import EmptyContent from '../EmptyContent'
import { type InternshipWithRelations } from '@/lib/types'
import { type Prisma } from '@prisma/client'

type Props = React.PropsWithChildren<{
  where: Prisma.InternshipWhereInput
  searchParams: Record<string, string | string[] | undefined>
  component: React.FC<{
    internship: InternshipWithRelations
  }>
  emptyButton?: {
    url: string
    text: string
  }
}>

export default async function InternshipList({
  where, searchParams, component, emptyButton,
}: Props) {
  const Component = component
  const pageNumber = +(param(searchParams.page) ?? 1)
  const totalRecords = await prisma.internship.count({ where })

  const { nextPage, skip, take } = getPaginationProps({ totalRecords, pageNumber })

  const internships = await getInternships({ where, skip, take })

  return (
    <>
      {internships.length > 0
        ? (
          <section className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-4">
            {internships.map(internship => (
              <Component
                key={internship.id}
                internship={internship}
              />
            ))}
          </section>
          )
        : (
          <div className="pt-10">
            <EmptyContent
              button={emptyButton}
            />
          </div>
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