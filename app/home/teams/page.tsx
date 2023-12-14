import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import PageContent from '@/components/teams/PageContent'
import { auth } from '@/lib/auth/pages'
import getPaginationProps from '@/lib/utils/pagination'
import { getTeams } from '@/lib/data-fetching/teams'
import Pagination from '@/components/Pagination'
import Link from 'next/link'
import clsx from 'clsx'
import PageTitle from '@/components/PageTitle'
import {
  BriefcaseIcon,
  ListBulletIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import { type TeamsFull, type TeamsTab } from '@/lib/types'
import { type Prisma } from '@prisma/client'

export const metadata: Metadata = {
  title: 'Equipos de trabajo',
}

interface FilterQueries {
  all: Prisma.TeamWhereInput
  personal: Prisma.TeamWhereInput
}

export default async function TeamsPage({ searchParams }: SearchParamsProps) {
  const { id } = await auth.user()

  // DRY Pagination
  const filter = searchParams.filter ?? 'all'
  const pageNumber = +(searchParams.page ?? 1)

  const FILTER_QUERIES: FilterQueries = {
    personal: {
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
    where: FILTER_QUERIES[filter as keyof FilterQueries],
  })
  const { nextPage, skip, take } = getPaginationProps({
    pageNumber,
    totalRecords,
  })

  let teams: TeamsFull[] = []

  if (filter === 'all') {
    teams = await getTeams({ where: FILTER_QUERIES.all, take, skip })
  }

  if (filter === 'personal') {
    teams = await getTeams({ where: FILTER_QUERIES.personal, take, skip })
  }

  const TEAMS_TAB_TRANSLATION = {
    all: 'Todos',
    personal: 'Mis equipos',
  }
  const links = [
    {
      title: 'all',
      content: 'Todos',
      icon: <ListBulletIcon className="h-5 w-5" />,
      query: 'all',
    },
    {
      title: 'personal',
      content: 'Mis Equipos',
      icon: <BriefcaseIcon className="h-5 w-5" />,
      query: 'personal',
    },
  ]

  return (
    <>
      <PageTitle
        title="Equipos de trabajo"
        subtitle="Descubre diferentes equipos de trabajo, y los proyectos públicos creados dentro de la aplicación."
      >
        <Link href="/home/teams/create">
          <button className="btn-primary btn hover:border-primary hover:bg-white hover:text-neutral-600">
            <PlusIcon className="h-6 w-6" />
            Agregar
          </button>
        </Link>
      </PageTitle>
      <PageContent
        dropdownLabel={`Categorías - ${
          TEAMS_TAB_TRANSLATION[filter as TeamsTab]
        }`}
        teams={teams}
        userId={id}
      >
        {links.map((link) => {
          return (
            <Link
              key={link.title}
              href={{
                pathname: '/home/teams',
                query: { filter: link.query },
              }}
              className={clsx(
                'btn',
                link.title === filter
                  ? 'btn-primary hover:btn-ghost'
                  : 'hover:btn-primary'
              )}
            >
              {link.icon}
              {link.content}
            </Link>
          )
        })}
      </PageContent>
      <Pagination nextPage={nextPage} />
    </>
  )
}
