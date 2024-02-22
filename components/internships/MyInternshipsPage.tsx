import PageTitle from '@/components/PageTitle'
import InternshipCard from './InternshipCard'
import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'
import InternshipList from '@/components/internships/InternshipList'
import FilterBar from '../FilterBar'
import prisma from '@/prisma/client'
import { type Prisma } from '@prisma/client'
import { getSearchAndFilter } from '@/lib/utils/search-params'
import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/24/outline'
import { tooltip } from '@/lib/tooltip'

export const metadata = {
  title: 'Mis pasantías',
}

export default async function MyInternshipsPage({
  searchParams,
  params: { id: urlId },
}: PageContext & SearchParamsProps) {
  const { id: userId, type, name } = await auth.user()

  const allowed = ['COMPANY', 'INSTITUTE']
  if (!allowed.includes(type) || userId !== urlId) notFound()

  const isInstitute = type === 'INSTITUTE'

  const addAction = {
    url: `/home/internships/${isInstitute ? 'select' : 'recruit'}`,
    text: `${isInstitute ? 'Añadir' : 'Reclutar'} pasante`,
  }

  const translation = {
    ADMIN: '',
    PERSON: '',
    COMPANY: 'empresa',
    INSTITUTE: 'institución',
  } as const

  const grades = await prisma.grade.findMany({
    select: { id: true, title: true },
  })

  const { search, filter } = getSearchAndFilter(searchParams)

  const where: Prisma.InternshipWhereInput = {
    person: {
      ci: {
        contains: search,
      },
    },
    gradeId: filter,
    instituteId: type === 'INSTITUTE' ? userId : undefined,
    recruitments:
      type === 'COMPANY'
        ? {
            some: {
              status: 'ACCEPTED',
              vacant: {
                companyId: userId,
              },
            },
          }
        : undefined,
  }

  return (
    <>
      <PageTitle
        title="Mis pasantes"
        subtitle={`${tooltip.internships} ${translation[type]}.`}
        breadcrumbs={name}
      >
        <Link
          className="btn btn-primary"
          href={addAction.url}
        >
          <PlusIcon className="h-5 w-5" />
          {addAction.text}
        </Link>
      </PageTitle>
      <FilterBar
        filterLabel="carrera"
        filterOptions={grades}
        searchLabel="cédula"
      />
      <InternshipList
        component={InternshipCard}
        where={where}
        searchParams={searchParams}
        emptyButton={addAction}
      />
    </>
  )
}
