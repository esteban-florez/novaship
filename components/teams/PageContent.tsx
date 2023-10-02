'use client'

import Link from 'next/link'
import PageTitle from '../PageTitle'
import { PlusIcon } from '@heroicons/react/24/outline'
import Pagination from '../Pagination'
import { type Team } from '@prisma/client'
import Card from '../Card'
import PageNav from './PageNav'
import Button from '../Button'
import { type TeamsTab } from '@/lib/types'
import { useState } from 'react'
import { includesValue } from '@/lib/utils/text'
interface Props {
  myTeams: Team[]
  allTeams: Team[]
  pageNumber: number
  nextPage: boolean
  filter: string | string[]
}

export default function PageContent({ filter, myTeams, allTeams, pageNumber, nextPage }: Props) {
  const [search, setSearch] = useState('')
  const TEAMS_TABS = {
    all: allTeams,
    personal: myTeams,
  }

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  return (
    <>
      <PageTitle
        title="Equipos de trabajo"
        subtitle="Descubre diferentes equipos de trabajo, y los proyectos públicos creados dentro de la aplicación."
      >
        <Link href="/home/teams/create">
          <Button
            color="PRIMARY"
          >
            <PlusIcon className="h-6 w-6" />
            Agregar
          </Button>
        </Link>
      </PageTitle>
      <PageNav
        search={search}
        onSearch={handleSearch}
        filter={filter}
      />
      <section className="mx-auto w-full columns-1 gap-4 rounded-lg p-4
      md:columns-2 lg:columns-3 xl:rounded-tl-none"
      >
        {TEAMS_TABS[filter as TeamsTab].map(team => {
          if (
            (search === '' || includesValue(team.name, search)) ||
            (includesValue(team.description, search))
          ) {
            return (
              <div key={team.id} className="mb-4 break-inside-avoid">
                <div className="rounded-xl border border-solid border-zinc-300 bg-white shadow">
                  <Card
                    title={team.name}
                    description={team.description}
                    link={`/home/teams/${team.id}`}
                  />
                </div>
              </div>
            )
          }

          return null
        })}
      </section>
      {filter === 'all' &&
        <Pagination
          url="/home/teams"
          pageNumber={pageNumber}
          nextPage={nextPage}
        />}
    </>
  )
}
