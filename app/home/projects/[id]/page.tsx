import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import { getProject } from '@/lib/data-fetching/project'
import ProjectDetails from '@/components/projects-details/ProjectDetails'
import prisma from '@/prisma/client'
import PageTitle from '@/components/PageTitle'
import { getTasks } from '@/lib/data-fetching/task'
import {
  belongsToTeam,
  getProjectLeader,
  getTasksStatuses,
} from '@/lib/utils/tables'
import PieGraphic from '@/components/graphics/PieGraphic'
import { type ChartData } from 'chart.js'
import TaskContainer from './TasksContainer'
import { checkEmpty } from '@/lib/utils/verify'
import BarGraphic from '@/components/graphics/BarGraphic'
import { getAllMonths } from '@/lib/utils/date'
import { PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import EmptyContent from '@/components/EmptyContent'
import { getInvitationToTeam } from '@/lib/data-fetching/invitation'

export const metadata: Metadata = {
  title: 'Detalles de proyecto',
}

export default async function ProjectPage({ params: { id } }: PageContext) {
  const { id: userId } = await auth.user()
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
  const teamId = project.teamId ?? ''
  const invitation = await getInvitationToTeam({ userId, teamId })

  const userData = {
    id: userId,
    isOwner,
    isMember,
  }
  const team =
    project.team != null
      ? {
          id: project.team?.id,
          name: project.team?.name,
        }
      : null

  const tasks = await getTasks({ where: { projectId: id } })
  const tasksStatus = getTasksStatuses(tasks)
  const tasksStatusLength = Object.values(tasksStatus).map((t) => t.length)

  const tasksByMonth: number[] = Array(12).fill(0)
  const months = Array.from(Array(12).keys())

  tasks.forEach((t) => {
    const month = months[t.createdAt.getMonth()]
    tasksByMonth[month] == null
      ? (tasksByMonth[month] = 1)
      : (tasksByMonth[month] += 1)
  })

  const tasksProgressData: ChartData<'pie'> = {
    labels: ['Por empezar', 'Completadas', 'En revisión', 'En progreso'],
    datasets: [
      {
        label: 'Porcentaje',
        data: tasksStatusLength,
      },
    ],
  }

  const tasksByMonthData: ChartData<'bar'> = {
    labels: getAllMonths('short'),
    datasets: [
      {
        label: 'Tareas',
        data: tasksByMonth,
      },
    ],
  }

  const showEmptyContent = !checkEmpty([
    tasksStatus.pending,
    tasksStatus.progress,
    tasksStatus.done,
    tasksStatus.review,
    tasksByMonth,
    tasksStatusLength,
  ])

  return (
    <>
      <PageTitle breadcrumbs={project.title} />
      <section className="mt-3 sm:mt-0 sm:px-6 sm:py-4 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-full">
            <ProjectDetails
              id={project.id}
              team={team}
              isPrivate={project.visibility === 'PRIVATE'}
              userData={userData}
              title={project.title}
              categories={categories}
              description={project.description}
              canApply={invitation == null && !isOwner && !isMember}
            />
          </div>
          {isOwner && (
            <div className="col-span-full">
              <Link href={`/home/projects/${id}/tasks?action=create`}>
                <button className="btn btn-primary">
                  <PlusIcon className="w-5 h-5" />
                  Registrar tarea
                </button>
              </Link>
            </div>
          )}
          {showEmptyContent
            ? (
              <>
                {!checkEmpty(tasksStatus.pending) && (
                  <div className="col-span-full sm:col-span-1">
                    <TaskContainer
                      title="Pendientes"
                      tasks={tasksStatus.pending}
                      filter="pending"
                      url={`/home/projects/${id}/tasks`}
                    />
                  </div>
                )}
                {!checkEmpty(tasksStatus.progress) && (
                  <div className="col-span-full sm:col-span-1">
                    <TaskContainer
                      title="En progreso"
                      tasks={tasksStatus.progress}
                      filter="progress"
                      url={`/home/projects/${id}/tasks`}
                    />
                  </div>
                )}
                {!checkEmpty(tasksStatus.done) && (
                  <div className="col-span-full sm:col-span-1">
                    <TaskContainer
                      title="Completas"
                      tasks={tasksStatus.done}
                      filter="done"
                      url={`/home/projects/${id}/tasks`}
                    />
                  </div>
                )}
                {!checkEmpty(tasksStatus.review) && (
                  <div className="col-span-full sm:col-span-1">
                    <TaskContainer
                      title="En revisión"
                      tasks={tasksStatus.review}
                      filter="review"
                      url={`/home/projects/${id}/tasks`}
                    />
                  </div>
                )}
                {!checkEmpty(tasksByMonth) && (
                  <div className="col-span-full sm:col-span-2">
                    <div className="h-80 py-4 card bg-white border border-zinc-300 shadow-lg rounded-md">
                      <BarGraphic
                        title="Tareas por mes"
                        data={tasksByMonthData}
                      />
                    </div>
                  </div>
                )}
                {!checkEmpty(tasksStatusLength) && (
                  <div className="col-span-full sm:col-span-1">
                    <div className="h-80 py-4 items-center card bg-white border border-zinc-300 shadow-lg rounded-md">
                      <PieGraphic
                        title="Progreso de tareas"
                        data={tasksProgressData}
                      />
                    </div>
                  </div>
                )}
              </>
              )
            : (
              <div className="col-span-full py-8 card bg-white rounded-md border border-zinc-300">
                <EmptyContent
                  title={
                  isOwner
                    ? 'Registra algunas tareas'
                    : 'Aún no han añadido tareas'
                }
                >
                  Gestione el desarrollo de su proyecto con algunas tareas.
                </EmptyContent>
              </div>
              )}
        </div>
      </section>
    </>
  )
}
