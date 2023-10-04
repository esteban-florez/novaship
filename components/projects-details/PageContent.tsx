'use client'

import { type ProjectsFull, type ProjectDetailsTab } from '@/lib/types'
import ProjectDetails from './ProjectDetails'
import TeamGroup from './TeamGroup'
import { useState } from 'react'

interface Props {
  isOwner: boolean
  isMember: boolean
  project: ProjectsFull
}

// TODO -> pasar files y tasks a un componente (client)
export default function PageContent({ isOwner, isMember, project }: Props) {
  const [tab, setTab] = useState<ProjectDetailsTab>('Tasks')

  const handleChangeTab = (tabOption?: ProjectDetailsTab) => {
    if (tabOption !== null && tabOption !== undefined) setTab(tabOption)
  }

  const projectCategories = project.categories.map(category => {
    return category.title
  })

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
        {(isOwner || isMember) &&
          <div className="col-span-7 lg:col-span-5">
            {/* {(isOwner || isMember) && <PageNav tab={tab} onTabClick={handleChangeTab} />} */}
            {/* TEMPORAL DISABLED */}
            {/* {isOwner &&
              <PageNav
                id={project.id}
                tab={tab}
                onTabClick={handleChangeTab}
              />} */}
            {/* <div className="card mt-3 rounded-lg bg-white p-5 shadow-lg">
              {tab === 'Tasks'
                ? <Tasks projectId={project.id} tasks={project.tasks} />
                : <Files projectId={project.id} files={project.files} />}
            </div> */}
          </div>}
        {!(isOwner || isMember) &&
          <div className="col-span-7 lg:col-span-5">
            <div className="card rounded-lg bg-white p-5 shadow-lg" />
          </div>}
        <div className="col-span-7 lg:col-span-2">
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
