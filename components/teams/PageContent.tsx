'use client'

import Link from 'next/link'
import PageTitle from '../PageTitle'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Pagination from '../Pagination'
import { type Team } from '@prisma/client'
import Card from '../Card'
import PageNav from './PageNav'
import { type TabProp } from '@/lib/types'
import { useState } from 'react'

interface Props {
  myTeams: Team[]
  allTeams: Team[]
  pageNumber: number
  nextPage: boolean
}

export default function PageContent({ myTeams, allTeams, pageNumber, nextPage }: Props) {
  const [tab, setTab] = useState<TabProp>('All')

  const handleChangeTab = (tabOption?: TabProp) => {
    if (tabOption !== null && tabOption !== undefined) setTab(tabOption)
  }

  const TEAMS_OPTION = {
    All: allTeams,
    Mine: myTeams,
  }

  const teams = TEAMS_OPTION[tab]

  return (
    <>
      <PageTitle
        title="Equipos de trabajo"
        subtitle="Descubre diferentes equipos de trabajo, y los proyectos públicos creados dentro de la aplicación."
      >
        <Link className="btn-primary btn" href="/home/teams/create">
          <PlusCircleIcon className="h-6 w-6" />
          Crear equipo
        </Link>
      </PageTitle>
      <PageNav
        tab={tab}
        onTabClick={handleChangeTab}
      />
      <section className="mx-auto w-full columns-1 gap-4 rounded-lg p-4
      md:columns-2 lg:columns-3 xl:rounded-tl-none"
      >
        {teams.map(team => {
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
        })}
      </section>
      {tab === 'All' &&
        <Pagination
          url="/home/teams"
          pageNumber={pageNumber}
          nextPage={nextPage}
        />}
    </>
  )
}
