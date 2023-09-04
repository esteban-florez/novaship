'use client'

import { type ProjectDetailsTab, type OptionPerson, type Projects } from '@/lib/types'
import ProjectDetails from './ProjectDetails'
import TeamGroup from './TeamGroup'
import PageNav from './PageNav'
import { useState } from 'react'
// import Files from './Files'
import TaskItem from './tasks/TaskItem'

interface Props {
  isOwner: boolean
  project: Projects
  persons: OptionPerson[]
}

export default function PageContent({ isOwner, project, persons }: Props) {
  const [tab, setTab] = useState<ProjectDetailsTab>('Files')

  const handleChangeTab = (tabOption?: ProjectDetailsTab) => {
    if (tabOption !== null && tabOption !== undefined) setTab(tabOption)
  }

  const projectFields = project.fields.map(field => {
    return field.title
  })

  const projectOwner = project.company ?? project.person

  return (
    <section className="px-6 py-4">
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-7">
          <ProjectDetails
            id={project.id}
            isOwner={isOwner}
            title={project.title}
            fields={projectFields}
            description={project.description}
          />
        </div>
        <div className="col-span-7 lg:col-span-5">
          {isOwner && <PageNav tab={tab} onTabClick={handleChangeTab} />}
          <div className="card rounded-lg bg-white p-5 shadow-lg">
            {tab === 'Tasks' &&
              project.tasks.map((task) => {
                return (
                  <TaskItem
                    key={task.id}
                    projectId={project.id}
                    task={task}
                  />
                )
              })}
          </div>
        </div>
        <div className="col-span-7 lg:col-span-2">
          <TeamGroup
            id={project.id}
            owner={projectOwner?.name ?? ''}
            email={projectOwner?.email ?? ''}
            description={projectOwner?.description ?? ''}
            isOwner={isOwner}
            memberships={project?.memberships}
            persons={persons}
          />
        </div>
      </div>
    </section>
  )
}
