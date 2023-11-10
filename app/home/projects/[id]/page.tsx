import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import { getProject } from '@/lib/data-fetching/project'
import ProjectDetails from '@/components/projects-details/ProjectDetails'
import TeamGroup from '@/components/projects-details/TeamGroup'
import prisma from '@/prisma/client'
import Tasks from '@/components/projects-details/tasks/Tasks'
import clsx from 'clsx'
import TaskModal from '@/components/projects-details/tasks/TaskModal'
import PageTitle from '@/components/PageTitle'
import { getTasks } from '@/lib/data-fetching/task'
import TasksGraphic from '@/components/projects-details/TasksGraphic'
import { belongsToTeam, getProjectLeader } from '@/lib/utils/tables'

export const metadata: Metadata = {
  title: 'Detalles de proyecto',
}

export default async function ProjectPage({ params: { id } }: PageContext) {
  const { id: userId, type } = await auth.user()
  const user =
    (await prisma.person.findFirst({ where: { id: userId } })) ??
    (await prisma.company.findFirst({ where: { id: userId } }))

  if (id === null || user == null) {
    notFound()
  }

  const project = await getProject({ id })
  if (project === null) {
    notFound()
  }

  const categories = project.categories.map((category) => category.title)
  const leader = getProjectLeader(project)
  const isOwner = leader.id === userId
  const isMember = belongsToTeam(project.team, userId)

  const tasks = await getTasks({ where: { projectId: id } })

  return (
    <>
      <PageTitle breadcrumbs={project.title} />
      <section className="mt-3 sm:mt-0 sm:px-6 sm:py-4">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-7">
            <ProjectDetails
              id={project.id}
              isPrivate={project.visibility === 'PRIVATE'}
              isOwner={isOwner}
              isMember={isMember}
              title={project.title}
              categories={categories}
              description={project.description}
            />
          </div>
          <div className="col-span-full min-h-[320px] rounded-lg card bg-white sm:p-4 shadow-lg">
            <TasksGraphic tasks={tasks} />
          </div>
          {(isOwner || isMember) && (
            <div
              className={clsx(
                'col-span-7',
                project.personId !== userId && 'lg:col-span-5'
              )}
            >
              <div className="card rounded-lg bg-white py-4 sm:p-5 shadow-lg">
                <div className="px-4 sm:px-0 mb-4">
                  <TaskModal
                    action="/api/tasks"
                    method="POST"
                    projectId={id}
                    memberships={project.team?.memberships}
                    person={user}
                    buttonLabel="Nueva tarea"
                  />
                </div>
                <Tasks
                  projectId={project.id}
                  memberships={project.team?.memberships}
                  person={type === 'PERSON' ? user : undefined}
                  tasks={project.tasks}
                />
              </div>
            </div>
          )}
          {project.personId !== userId && (
            <div className="col-span-7 lg:col-span-2 lg:col-start-6">
              <TeamGroup
                user={user}
                team={project.team}
              />
            </div>
          )}
        </div>
      </section>
    </>
  )
}
