// 'use client'

import { /* type ProjectDetailsTab, */ type Projects } from '@/lib/types'
import ProjectDetails from './ProjectDetails'
import TeamGroup from './TeamGroup'
// import PageNav from './PageNav'
// import { useState } from 'react'
import Button from '../Button'
import { PlusIcon } from '@heroicons/react/24/outline'
import TaskItem from './tasks/TaskItem'
import PageTitle from '../PageTitle'
// import Files from './Files'
// import TaskItem from './tasks/TaskItem'
// import EmptyContent from '../EmptyContent'

interface Props {
  isOwner: boolean
  isMember: boolean
  project: Projects
}

// TODO -> pasar files y tasks a un componente (client)
export default function PageContent({ isOwner, isMember, project }: Props) {
  // const [tab, setTab] = useState<ProjectDetailsTab>('Tasks')

  // const handleChangeTab = (tabOption?: ProjectDetailsTab) => {
  //   if (tabOption !== null && tabOption !== undefined) setTab(tabOption)
  // }

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
    <>
      <PageTitle title='Proyectos' subtitle='Descubre los proyectos que rondan la web.' breadcrumbs={project.title} />
      <section className="px-6 py-4">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-7 xl:col-span-5">
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
              <div className="card rounded-lg bg-white p-5 shadow-lg">
                {isOwner &&
                  <div className="flex items-center justify-end">
                    <Button
                      url={`/home/projects/${project.id}/tasks/create`}
                      color="PRIMARY"
                      hover="WHITE"
                    >
                      <PlusIcon className="h-5 w-5" />
                      Agregar tarea
                    </Button>
                  </div>}
                {project.tasks.map(task => {
                  return (
                    <TaskItem
                      key={task.id}
                      projectId={project.id}
                      task={task}
                    />
                  )
                })}
              </div>
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
    </>
  )
}
