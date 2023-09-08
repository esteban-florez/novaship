// 'use client'

import { type ProjectDetailsTab, type OptionPerson, type Projects, type TeamGroupTab } from '@/lib/types'
import ProjectDetails from './ProjectDetails'
import TeamGroup from './TeamGroup'
import PageNav from './PageNav'
import { useState } from 'react'
import Files from './Files'
import InfoOwner from './InfoOwner'
import Modal from '../Modal'
import { ListBulletIcon } from '@heroicons/react/24/solid'
import TeamGroupTabs from './TeamGroupTabs'
import MembersTab from './MembersTab'
import AddMembersTab from './AddMembersTab'
// import PageNav from './PageNav'
// import { useState } from 'react'
import Button from '../Button'
import { PlusIcon } from '@heroicons/react/24/outline'
import TaskItem from './tasks/TaskItem'
// import Files from './Files'
// import TaskItem from './tasks/TaskItem'
// import EmptyContent from '../EmptyContent'

interface Props {
  isOwner: boolean
  isMember: boolean
  project: Projects
}

export default function PageContent({ isOwner, project, persons }: Props) {
  const [tab, setTab] = useState<ProjectDetailsTab>('Files')
  const [group, setGroup] = useState<TeamGroupTab>('members')
// TODO -> pasar files y tasks a un componente (client)
export default function PageContent({ isOwner, isMember, project }: Props) {
  // const [tab, setTab] = useState<ProjectDetailsTab>('Tasks')

  // const handleChangeTab = (tabOption?: ProjectDetailsTab) => {
  //   if (tabOption !== null && tabOption !== undefined) setTab(tabOption)
  // }

  const projectCategories = project.categories.map(category => {
    return category.title
  })

  const membershipsCount = project.memberships?.length ?? 0
  const projectOwner = project.company ?? project.person
  const personsCount = persons.splice(0, 3)
  // FUTURE IMPLEMENTATION
  // const items = {
  //   Tasks: project.tasks.length > 0
  //     ? project.tasks.map((task) => {
  //         return (
  //           <TaskItem
  //             key={task.id}
  //             projectId={project.id}
  //             task={task}
  //           />
  //         )
  //       })
  //     : <EmptyContent
  //         title='Sin tareas disponibles'
  //         button={{
  //           url: `/home/projects/${project.id}/tasks/create`,
  //           text: 'Agregar tarea'
  //         }}
  //       >
  //         Parece que este proyecto fue registrado hace poco, añade algunas tareas para que los miembros del equipo comiencen a trabajar.
  //       </EmptyContent>
  //     ,
  //   Files: project.tasks.length > 0
  //     ? project.tasks.map((task) => {
  //         return (
  //           <TaskItem
  //             key={task.id}
  //             projectId={project.id}
  //             task={task}
  //           />
  //         )
  //       })
  //     : <EmptyContent title='Sin archivos disponibles'>
  //         Por ahora nadie ha subido un archivo, puedes subir uno si lo consideras necesario.
  //       </EmptyContent>
  // }

  return (
    <section className="px-6 py-4">
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-7 lg:order-1 xl:col-span-5">
          <ProjectDetails
            id={project.id}
            isOwner={isOwner}
            isMember={isMember}
            title={project.title}
            categories={projectCategories}
            description={project.description}
          />
          <div className="mt-4 flex flex-col xl:hidden">
            <Modal
              id="membersModal"
              label={`Ver miembros (${membershipsCount})`}
              icon={<ListBulletIcon className="h-5 w-5" />}
              style="DEFAULT"
              color="SECONDARY"
              hover="WHITE"
              cancelLabel="Cerrar"
            >
              <article className="flex h-80 flex-col">
                {isOwner && <TeamGroupTabs tab={group} setTab={setGroup} />}
                {group === 'members' &&
                  <MembersTab
                    projectId={project.id}
                    memberships={project.memberships}
                    isOwner={isOwner}
                  />}
                {group === 'add' &&
                  <AddMembersTab
                    projectId={project.id}
                    persons={persons}
                  />}
              </article>
            </Modal>
          </div>
          <div className="mt-4">
            {isOwner && <PageNav tab={tab} onTabClick={handleChangeTab} />}
            <div className="card rounded-lg bg-white p-5 shadow-lg">
              {project.tasks.map((task) => {
                return (
                  <Files
                    key={task.id}
                    title={task.title}
                    date={task.updatedAt}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className="col-span-7 hidden flex-col gap-3 lg:order-2 lg:col-span-2 xl:flex">
          <div className="card gap-3 rounded-lg bg-white p-4 shadow-lg">
            <InfoOwner
              owner={projectOwner?.name ?? ''}
              email={projectOwner?.email ?? ''}
              description={projectOwner?.description ?? ''}
            />
          </div>
          <TeamGroup
            id={project.id}
            team={project.team}
            isOwner={isOwner}
            isMember={isMember}
          />
        </div>
      </div>
    </section>
  )
}
