'use client'

import { useState } from 'react'
import ProjectsCard from './ProjectsCard'
import { type ProjectsFull } from '@/lib/types'
import PageNav from '../PageNav'

type Props = React.PropsWithChildren<{
  projects: ProjectsFull[]
  dropdownLabel: string
}>

export default function PageContent({ projects, dropdownLabel, children }: Props) {
  const [search, setSearch] = useState('')

  return (
    <>
      <PageNav dropdownLabel={dropdownLabel} search={search} onSearch={setSearch}>
        {children}
      </PageNav>
      <ProjectsCard
        search={search}
        projects={projects}
      />
    </>
  )
}
