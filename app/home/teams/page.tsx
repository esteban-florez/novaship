import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/pages'
import getPaginationProps from '@/lib/utils/pagination'
import { getTeams } from '@/lib/data-fetching/teams'
import Pagination from '@/components/Pagination'
import Link from 'next/link'
import PageTitle from '@/components/PageTitle'
import { PlusIcon } from '@heroicons/react/24/outline'
import { type Prisma } from '@prisma/client'
import { tooltip } from '@/lib/tooltip'
import TeamsList from '@/components/teams/TeamsList'
import FilterBar from '@/components/FilterBar'

export const metadata: Metadata = {
  title: 'Equipos de trabajo',
}

interface FilterQueries {
  all: Prisma.TeamWhereInput
  personal: Prisma.TeamWhereInput
}

export default async function TeamsPage({
  searchParams: { filtered, page, search },
}: SearchParamsProps) {
  const { id } = await auth.user()

  // DRY Pagination
  const filterParam = Array.isArray(filtered) ? filtered[0] : filtered
  const pageNumber = +(page ?? 1)
  const searchParam = Array.isArray(search) ? search[0] : search

  const FILTER_QUERIES: FilterQueries = {
    personal: {
      name: {
        contains: searchParam,
        mode: 'insensitive',
      },
      OR: [
        {
          leader: {
            OR: [{ personId: id }, { companyId: id }],
          },
        },
        {
          memberships: {
            some: {
              personId: id,
              invitation: {
                status: 'ACCEPTED',
              },
            },
          },
        },
      ],
    },
    all: {
      name: {
        contains: searchParam,
        mode: 'insensitive',
      },
      OR: [
        {
          leader: {
            OR: [{ personId: { not: id } }, { companyId: { not: id } }],
          },
        },
        {
          memberships: {
            some: {
              personId: { not: id },
              invitation: {
                status: 'ACCEPTED',
              },
            },
          },
        },
      ],
    },
  }
  const totalRecords = await prisma.team.count({
    where:
      FILTER_QUERIES[
        filterParam === '' ? 'all' : (filterParam as keyof FilterQueries)
      ],
  })
  const { nextPage, skip, take, totalPages } = getPaginationProps({
    pageNumber,
    totalRecords,
  })

  const teams = await getTeams({
    where: FILTER_QUERIES[filterParam as keyof FilterQueries],
    take,
    skip,
  })
  const options = [
    {
      id: 'personal',
      name: 'Mis equipos',
    },
  ]

  return (
    <>
      <PageTitle
        title="Equipos de trabajo"
        subtitle={tooltip.team}
      >
        <Link href="/home/teams/create">
          <button className="btn-primary btn hover:border-primary hover:bg-white hover:text-neutral-600">
            <PlusIcon className="h-6 w-6" />
            Agregar
          </button>
        </Link>
      </PageTitle>
      <FilterBar
        key={filterParam}
        searchLabel="Nombre"
        filterLabel="Categorías"
        filterOptions={options}
        selectedOption={filterParam}
      />
      <TeamsList
        teams={teams}
        userId={id}
      />
      <Pagination
        currentPage={pageNumber}
        nextPage={nextPage}
        totalPages={totalPages}
        totalRecords={totalRecords}
        queryParams={{
          filtered: filterParam,
          search,
        }}
      />
    </>
  )
}
