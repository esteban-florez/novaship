'use client'

import Filter from './Filter'
import { useState } from 'react'
import { type TabProp, type VisibilityFilter } from '@/lib/types'
import { type Membership, type Person, type Project } from '@prisma/client'
import List from './List'

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
    <div className="px-4">
      <Filter active={tab} onInput={handleChange} onTabClick={handleChangeTab} />
      <section className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg rounded-tl-none bg-white p-4">
        <List projects={tab === 'All' ? projects : personalProjects} tab={tab} visibility={visibility} members={members} title={title} />
      </section>
    </div>
  )
}
