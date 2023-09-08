'use client'

import PageNav from './PageNav'
import { useState } from 'react'
import { type ProjectWithTeamAndCategories, type TabProp, type VisibilityFilter } from '@/lib/types'
import ProjectsCard from './ProjectsCard'

type Props = React.PropsWithChildren<{
  projects: ProjectWithTeamAndCategories[]
  personalProjects: ProjectWithTeamAndCategories[]
}>

export default function PageContent({ projects, personalProjects }: Props) {
  const [tab, setTab] = useState<TabProp>('All')
  const [visibility, setVisibility] = useState<VisibilityFilter>('ALL')
  const [members, setMembers] = useState(0)
  const [title, setTitle] = useState('')

  const handleChange = (event: OnInputEvent | SelectOnInputEvent) => {
    const { name, value } = event.target

    if (name === 'title') {
      setTitle(value)
    }
    if (name === 'visibility' && (value === 'PRIVATE' || value === 'PUBLIC' || value === 'ALL')) setVisibility(value)
    if (name === 'members') {
      const newValue = parseInt(value)
      if (typeof newValue === 'number') {
        setMembers(newValue >= 0 ? newValue : 0)
      }
    }
  }

  const handleChangeTab = (tabOption?: TabProp) => {
    if (tabOption !== null && tabOption !== undefined) setTab(tabOption)
  }

  return (
    <>
      <PageNav active={tab} onInput={handleChange} onTabClick={handleChangeTab} />
      <ProjectsCard
        title={title}
        members={members}
        visibility={visibility}
        projects={tab === 'All' ? projects : personalProjects}
      />
    </>
  )
}
