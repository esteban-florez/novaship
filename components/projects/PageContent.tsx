'use client'

import PageNav from './PageNav'
import { useState } from 'react'
import { ProjectsFull, type ProjectsTab } from '@/lib/types'
import ProjectsCard from './ProjectsCard'
import Pagination from '../Pagination'
import PageTitle from '../PageTitle'
import { PlusIcon } from '@heroicons/react/24/outline'
import Button from '../Button'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  filter: string | string[]
  nextPage: boolean
  pageNumber: number
  projects: ProjectsFull[]
  personalProjects: ProjectsFull[]
  suggestedProjects: ProjectsFull[]
}>

export default function PageContent({ filter, projects, personalProjects, suggestedProjects, nextPage, pageNumber }: Props) {
  const [search, setSearch] = useState('')
  const PROJECT_TABS = {
    all: projects,
    personal: personalProjects,
    suggested: suggestedProjects,
  }

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
      <PageNav
        filter={filter}
        search={search}
        onSearch={setSearch}
      />
      <ProjectsCard
        search={search}
        projects={PROJECT_TABS[filter as ProjectsTab]}
      />
      {filter === 'all' &&
        <Pagination
          url="/home/projects"
          pageNumber={pageNumber}
          nextPage={nextPage}
        />}
    </>
  )
}
