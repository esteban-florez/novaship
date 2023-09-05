'use client'

import { type ProjectDetailsTab, type Projects } from '@/lib/types'
import ProjectDetails from './ProjectDetails'
import TeamGroup from './TeamGroup'
import PageNav from './PageNav'
import { useState } from 'react'
// import Files from './Files'
import TaskItem from './tasks/TaskItem'

interface Props {
  isOwner: boolean
  isMember: boolean
  project: Projects
}

export default function PageContent({ isOwner, isMember, project }: Props) {
  const [tab, setTab] = useState<ProjectDetailsTab>('Files')

  const handleChangeTab = (tabOption?: ProjectDetailsTab) => {
    if (tabOption !== null && tabOption !== undefined) setTab(tabOption)
  }

  const projectCategories = project.categories.map(category => {
    return category.title
  })

  return (
    <section className="px-6 py-4">
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-7">
          <ProjectDetails
            id={project.id}
            isOwner={isOwner}
            isMember={isMember}
            title={project.title}
            categories={projectCategories}
            description={project.description}
          />
        </div>
        <div className="col-span-7 lg:col-span-5">
          {(isOwner || isMember) && <PageNav tab={tab} onTabClick={handleChangeTab} />}
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
            team={project.team}
            isOwner={isOwner}
          />
        </div>
      </div>
    </section>
  )
}
