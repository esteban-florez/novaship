'use client'

import { useState } from 'react'
import { ProjectsFull, type ProjectsTab } from '@/lib/types'
import ProjectsCard from './ProjectsCard'
import Pagination from '../Pagination'
import PageTitle from '../PageTitle'
import { GlobeAltIcon, ListBulletIcon, PlusIcon, StarIcon } from '@heroicons/react/24/outline'
import Button from '../Button'
import Link from 'next/link'
import PageNav from '../PageNav'
import clsx from 'clsx'

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
  const PROJECTS_TAB_TRANSLATION = {
    all: 'Todos',
    suggested: 'Proyectos sugeridos',
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
    content: 'Proyectos sugeridos',
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
      <PageNav dropdownLabel={`Categorías - ${PROJECTS_TAB_TRANSLATION[filter as ProjectsTab]}`} search={search} onSearch={setSearch}>
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
      </PageNav>
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
