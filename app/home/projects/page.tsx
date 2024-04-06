import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/pages'
import getPaginationProps from '@/lib/utils/pagination'
import { getProjects } from '@/lib/data-fetching/project'
import { getPersonRelatedIds } from '@/lib/data-fetching/user'
import { PlusIcon } from '@heroicons/react/24/outline'
import PageTitle from '@/components/PageTitle'
import Link from 'next/link'
import Pagination from '@/components/Pagination'
import { type Prisma } from '@prisma/client'
import { tooltip } from '@/lib/tooltip'
import { notFound } from 'next/navigation'
import FilterBar from '@/components/FilterBar'
import ProjectsCard from '@/components/projects/ProjectsCard'

export const metadata: Metadata = {
  title: 'Proyectos',
}

interface FilterQueries {
  suggested: Prisma.ProjectWhereInput
  personal: Prisma.ProjectWhereInput
  all: Prisma.ProjectWhereInput
}

export default async function ProjectsPage({
  searchParams: { filtered, page, search },
}: SearchParamsProps) {
  const { id, type } = await auth.user()
  if (type === 'INSTITUTE' || type === 'ADMIN') {
    notFound()
  }

  const { categories } = await getPersonRelatedIds({ id })

  // DRY Pagination
  const filterParam = Array.isArray(filtered) ? filtered[0] : filtered
  const pageNumber = +(page ?? 1)
  const searchParam = Array.isArray(search) ? search[0] : search

  const FILTER_QUERIES: FilterQueries = {
    suggested: {
      AND: [
        {
          visibility: 'PUBLIC',
        },
        {
          title: {
            contains: searchParam,
            mode: 'insensitive',
          },
        },
        {
          categories: {
            some: {
              id: { in: categories },
            },
          },
        },
        {
          OR: [
            { personId: { not: id } },
            {
              AND: [
                { personId: null },
                {
                  team: {
                    OR: [
                      {
                        leader: {
                          OR: [
                            { personId: { not: id } },
                            { companyId: { not: id } },
                          ],
                        },
                      },
                      {
                        memberships: {
                          some: {
                            personId: { not: id },
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    personal: {
      AND: [
        {
          title: {
            contains: searchParam,
            mode: 'insensitive',
          },
        },
        {
          OR: [
            { personId: id },
            {
              team: {
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
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    all: {
      AND: [
        {
          title: {
            contains: searchParam,
            mode: 'insensitive',
          },
        },
        {
          visibility: 'PUBLIC',
        },
        {
          OR: [
            { personId: { not: id } },
            {
              AND: [
                { personId: null },
                {
                  team: {
                    NOT: [
                      {
                        leader: {
                          OR: [{ personId: id }, { companyId: id }],
                        },
                      },
                      {
                        memberships: {
                          some: { personId: id },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  }
  const totalRecords = await prisma.project.count({
    where:
      FILTER_QUERIES[
        filterParam === '' ? 'all' : (filterParam as keyof FilterQueries)
      ],
  })
  const { nextPage, skip, take, totalPages } = getPaginationProps({
    pageNumber,
    totalRecords,
  })

  const projects = await getProjects({
    where: FILTER_QUERIES[filterParam as keyof FilterQueries],
    take,
    skip,
  })

  const options = [
    {
      id: 'personal',
      name: 'Mis proyectos',
    },
    {
      id: 'suggested',
      name: 'Sugeridos',
    },
  ]

  return (
    <>
      <PageTitle
        title="Proyectos"
        subtitle={tooltip.project}
      >
        <Link href="/home/projects/create">
          <button className="btn btn-primary">
            <PlusIcon className="h-6 w-6" />
            Agregar
          </button>
        </Link>
      </PageTitle>
      <FilterBar
        key={filterParam}
        searchLabel="Nombre"
        filterLabel="Categoría"
        filterOptions={options}
        selectedOption={filterParam}
      />
      <ProjectsCard
        projects={projects}
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
