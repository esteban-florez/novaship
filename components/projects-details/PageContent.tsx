'use client'

import { type Membership, type Person, type Project } from '@prisma/client'
import { type TabProp, type OptionPerson } from '@/lib/types'
import ProjectDetails from './ProjectDetails'
import TeamGroup from './TeamGroup'
// import Archive from './Archive'
import InfoUser from './InfoUser'
import { useState } from 'react'
import PageNav from './PageNav'

interface Props {
  owner: Person
  project: (Project & {
    memberships: Array<Membership & {
      person: Person
    }>
    person: Person
  })
  persons: OptionPerson[]
}

export default function PageContent({ owner, project, persons }: Props) {
  const [tab, setTab] = useState<TabProp>('All')
  const handleChangeTab = (tabOption?: TabProp) => {
    if (tabOption !== null && tabOption !== undefined) setTab(tabOption)
  }

  return (
    <section className="grid grid-cols-7 gap-4 p-4">
      <div className="col-span-7 xl:col-span-5">
        <ProjectDetails
          title={project.title}
          description={project.description}
        />
        <div>
          <PageNav active={tab} onTabClick={handleChangeTab} />
          {/* <Archive /> */}
        </div>
      </div>
      <div className="hidden lg:col-span-2 lg:block">
        <div className="card mb-4 bg-white p-4 shadow-md lg:self-start">
          <InfoUser
            owner={project.person.name}
            email={project.person.email}
            description={project.person.description}
          />
        </div>
        <TeamGroup
          id={project?.id ?? ''}
          memberships={project?.memberships}
          isOwner={owner.id === project?.personId}
          persons={persons}
        />
      </div>
      {/* <div className="col-span-7 xl:col-span-2">
        <div className="gap-4 sm:w-auto lg:flex lg:flex-col">
          <div className="mb-4 flex h-72 flex-col gap-2 rounded-lg bg-neutral-300 sm:mb-0" />
          <TeamGroup
            id={project?.id ?? ''}
            memberships={project?.memberships}
            isOwner={owner.id === project?.personId}
            persons={persons}
          />
        </div>
      </div> */}
    </section>
  )
}
