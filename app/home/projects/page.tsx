import { type Metadata } from 'next'
import PageContent from '@/components/projects/PageContent'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/pages'
import getPaginationProps from '@/lib/utils/pagination'
import { getProjects } from '@/lib/data-fetching/project'
import { getPersonRelatedIds } from '@/lib/data-fetching/user'
import { type ProjectsFull, type ProjectsTab } from '@/lib/types'
import { GlobeAltIcon, ListBulletIcon, PlusIcon, StarIcon } from '@heroicons/react/24/outline'
import PageTitle from '@/components/PageTitle'
import Link from 'next/link'
import Button from '@/components/Button'
import Pagination from '@/components/Pagination'
import clsx from 'clsx'
import { type Prisma } from '@prisma/client'

export const metadata: Metadata = {
  title: 'Proyectos',
}

interface FilterQueries {
  suggested: Prisma.ProjectWhereInput
  personal: Prisma.ProjectWhereInput
  all: Prisma.ProjectWhereInput
}

// TODO -> Mantener la pestaña escogida al regresar a /projects
export default async function ProjectsPage({ searchParams }: SearchParamsProps) {
  const { id } = await auth.user()
  const { categories } = await getPersonRelatedIds({ id })

  // DRY Pagination
  // TODO ->mejorar logica
  const filter = searchParams.filter ?? 'all'
  const pageNumber = +(searchParams.page ?? 1)
  const FILTER_QUERIES: FilterQueries = {
    suggested: {
      visibility: 'PUBLIC',
      categories: {
        some: {
          id: { in: categories },
        },
      },
      OR: [
        { personId: { not: id } },
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
    personal: {
      OR: [
        { personId: id },
        {
          team: {
            OR: [
              {
                leader: {
                  OR: [
                    { personId: id },
                    { companyId: id },
                  ],
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
    all: {
      visibility: 'PUBLIC',
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
                      OR: [
                        { personId: id },
                        { companyId: id },
                      ],
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
  }
  const totalRecords = await prisma.project.count({ where: FILTER_QUERIES[filter as keyof FilterQueries] })
  const { nextPage, skip, take } = getPaginationProps({ pageNumber, totalRecords })

  let projects: ProjectsFull[] = []

  if (filter === 'suggested') {
    projects = await getProjects({ where: FILTER_QUERIES.suggested, take, skip })
  }

  if (filter === 'personal') {
    projects = await getProjects({ where: FILTER_QUERIES.personal, take, skip })
  }

  if (filter === 'all') {
    projects = await getProjects({ where: FILTER_QUERIES.all, skip, take })
  }

  const PROJECTS_TAB_TRANSLATION = {
    all: 'Todos',
    suggested: 'Sugeridos',
    personal: 'Mis proyectos',
  }
  const links = [{
    title: 'all',
    content: 'Todos',
    icon: <GlobeAltIcon className="h-5 w-5" />,
    query: 'all',
  }, {
    title: 'personal',
    content: 'Mis proyectos',
    icon: <ListBulletIcon className="h-5 w-5" />,
    query: 'personal',
  }, {
    title: 'suggested',
    content: 'Sugeridos',
    icon: <StarIcon className="h-5 w-5" />,
    query: 'suggested',
  }]

  return (
    <>
      <PageTitle
        title="Proyectos"
        subtitle="Descubre los proyectos que rondan la web."
      >
        <Link href="/home/projects/create">
          <Button
            color="PRIMARY"
          >
            <PlusIcon className="h-6 w-6" />
            Agregar
          </Button>
        </Link>
      </PageTitle>
      <PageContent dropdownLabel={`Categorías - ${PROJECTS_TAB_TRANSLATION[filter as ProjectsTab]}`} projects={projects}>
        {links.map((link) => {
          return (
            <Link
              key={link.title}
              href={{
                pathname: '/home/projects',
                query: { filter: link.query },
              }}
              className={clsx('btn', link.title === filter ? 'btn-primary hover:btn-ghost' : 'hover:btn-primary')}
            >
              {link.icon}
              {link.content}
            </Link>
          )
        })}
      </PageContent>
      <Pagination
        url="/home/projects"
        pageNumber={pageNumber}
        nextPage={nextPage}
      />
    </>
  )
}
