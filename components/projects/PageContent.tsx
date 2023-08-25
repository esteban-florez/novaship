'use client'

import PageNav from './PageNav'
import { useState } from 'react'
import { type TabProp, type VisibilityFilter } from '@/lib/types'
import { type Membership, type Person, type Project } from '@prisma/client'
import ProjectsCard from './ProjectsCard'

// DRY 18
type Projects = Array<Project & {
  person: Person | null
  memberships: Array<Membership & {
    person: Person
  }>
}>

type Props = React.PropsWithChildren<{
  projects: Projects
  personalProjects: Projects
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
        tab={tab}
        title={title}
        members={members}
        visibility={visibility}
        projects={tab === 'All' ? projects : personalProjects}
      />
    </>
  )
}
