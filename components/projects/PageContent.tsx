'use client'

import PageNav from './PageNav'
import { useState } from 'react'
import { type ProjectWithTeamAndCategories, type TabProp } from '@/lib/types'
import ProjectsCard from './ProjectsCard'
import Pagination from '../Pagination'
import PageTitle from '../PageTitle'

type Props = React.PropsWithChildren<{
  nextPage: boolean
  pageNumber: number
  projects: ProjectWithTeamAndCategories[]
  personalProjects: ProjectWithTeamAndCategories[]
}>

export default function PageContent({ projects, personalProjects, nextPage, pageNumber }: Props) {
  const [tab, setTab] = useState<TabProp>('All')
  const [search, setSearch] = useState('')

  const handleChangeTab = (tabOption?: TabProp) => {
    if (tabOption !== null && tabOption !== undefined) setTab(tabOption)
  }

  return (
    <>
      <PageTitle
        title="Proyectos"
        subtitle="Descubre los proyectos que rondan la web."
      />
      <PageNav
        search={search}
        active={tab}
        onSearch={setSearch}
        onTabClick={handleChangeTab}
      />
      {tab === 'All' &&
        <Pagination
          url="/home/projects"
          pageNumber={pageNumber}
          nextPage={nextPage}
        />}
      <ProjectsCard
        search={search}
        projects={tab === 'All' ? projects : personalProjects}
      />
    </>
  )
}
