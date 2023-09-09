'use client'

import PageNav from './PageNav'
import { useState } from 'react'
import { type ProjectWithTeamAndCategories, type TabProp } from '@/lib/types'
import ProjectsCard from './ProjectsCard'

type Props = React.PropsWithChildren<{
  projects: ProjectWithTeamAndCategories[]
  personalProjects: ProjectWithTeamAndCategories[]
}>

export default function PageContent({ projects, personalProjects }: Props) {
  const [tab, setTab] = useState<TabProp>('All')
  const [search, setSearch] = useState('')

  const handleChangeTab = (tabOption?: TabProp) => {
    if (tabOption !== null && tabOption !== undefined) setTab(tabOption)
  }

  return (
    <>
      <PageNav
        search={search}
        active={tab}
        onSearch={setSearch}
        onTabClick={handleChangeTab}
      />
      <ProjectsCard
        search={search}
        projects={tab === 'All' ? projects : personalProjects}
      />
    </>
  )
}
