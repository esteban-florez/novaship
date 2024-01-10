import PageTitle from '@/components/PageTitle'
import Pagination from '@/components/Pagination'
import { auth } from '@/lib/auth/pages'
import { getRecruitments } from '@/lib/data-fetching/recruitments'
import getPaginationProps from '@/lib/utils/pagination'
import { getSearchAndFilter } from '@/lib/utils/search-params'
import prisma from '@/prisma/client'
import { type UserType, type Prisma, type Interested } from '@prisma/client'
import { notFound } from 'next/navigation'
import RecruitmentsTable from './RecruitmentsTable'
import FilterBar from '@/components/FilterBar'
import { tooltip } from '@/lib/tooltip'

export const metadata = {
  title: 'Solicitudes de pasantía',
}

function getInterestedFilter(option: string | undefined, type: UserType) {
  if (option === undefined) return

  const filters: Rec = {
    received: type === 'COMPANY' ? 'PERSON' : 'COMPANY',
    sent: type === 'COMPANY' ? 'COMPANY' : 'PERSON',
  }

  return filters[option]
}

export default async function RecruitmentsPage({
  searchParams,
}: SearchParamsProps) {
  const { id, type } = await auth.user()
  if (type === 'ADMIN') notFound()

  const { filter, search } = getSearchAndFilter(searchParams)

  const where: Prisma.RecruitmentWhereInput = {
    interested: getInterestedFilter(filter, type) as Interested,
    vacant: {
      companyId: type === 'COMPANY' ? id : undefined,
    },
    internship: {
      instituteId: type === 'INSTITUTE' ? id : undefined,
      personId: type === 'PERSON' ? id : undefined,
      person: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
    },
  }

  const totalRecords = await prisma.recruitment.count({ where })

  const { nextPage, skip, take } = getPaginationProps({
    totalRecords,
    searchParams,
    pageSize: 10,
  })

  const recruitments = await getRecruitments({ where, skip, take })

  const options = [
    { id: 'sent', title: 'Enviada' },
    { id: 'received', title: 'Recibida' },
  ]

  return (
    <>
      <PageTitle
        title="Solicitudes de pasantía"
        subtitle={tooltip.internship_recruitment}
      />
      <FilterBar
        searchLabel="nombre"
        filterLabel="tipo"
        filterOptions={options}
      />
      <RecruitmentsTable recruitments={recruitments} />
      <Pagination nextPage={nextPage} />
    </>
  )
}
