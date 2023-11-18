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
import { belongsToTeam, getProjectLeader } from '@/lib/utils/tables'
import PieGraphic from '@/components/graphics/PieGraphic'
import { type ChartData } from 'chart.js'
import TasksBarGraphic from '@/components/projects-details/TasksBarGraphic'
import { getStatuses } from '@/lib/utils/tasks'

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
  const { done, pending, review, progress } = getStatuses(
    tasks.map((task) => task.status ?? 'PENDING')
  )
  const data: ChartData<'pie'> = {
    labels: ['Terminada', 'Por empezar', 'En revisión', 'En progreso'],
    datasets: [
      {
        label: 'Porcentaje',
        data: [done, pending, review, progress],
      },
    ],
  }

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
          <div className="col-span-7 gap-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="pb-2 max-h-96 rounded-lg card bg-white shadow-lg">
                <PieGraphic
                  title="Progreso de tareas"
                  data={data}
                />
              </div>
              <div className="w-full rounded-lg card bg-white shadow-lg">
                <TasksBarGraphic tasks={tasks} />
              </div>
            </div>
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
