'use client'

import Card from '@/components/projects/Card'
import Filter from './Filter'
import { useState } from 'react'
import { type InputOnChange } from '@/lib/types'
import { type Membership, type Person, type Project } from '@prisma/client'

type VisibilityProp = 'PRIVATE' | 'PUBLIC' | 'ALL'

interface Props {
  projects: Array<Project & {
    person: Person | null
    memberships: Array<Membership & {
      person: Person
    }>
  }>
}

export default function PageContent({ projects }: Props) {
  const [visibility, setVisibility] = useState<VisibilityProp>('ALL')
  const [members, setMembers] = useState(0)
  const [title, setTitle] = useState('')

  const handleChange = (event: InputOnChange) => {
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

  return (
    <>
      <Filter active="Mine" onChange={handleChange} />
      <section className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg rounded-tl-none bg-white p-4">
        {projects.map((project) => {
          if (
            (title === '' || project.title.includes(title)) &&
            (visibility === 'ALL' || project.visibility === visibility) &&
            (members === 0 || project.memberships.length === members)
          ) {
            return (
              <div key={project.id} className="mb-3 flex w-full flex-col gap-3">
                <Card
                  id={project.id}
                  title={project.title}
                  status={project.visibility}
                  members={project.memberships}
                />
              </div>
            )
          }

          return null
        })}
      </section>
    </>
  )
}
