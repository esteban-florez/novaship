import PageTitle from '@/components/PageTitle'
import { auth } from '@/lib/auth/pages'
import { getProject } from '@/lib/data-fetching/project'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import Filters from './Filters'
import {
  getProjectLeader,
  getSubtaskPermissions,
  getTaskPermissions,
  getTaskStatus,
  getTeamwork,
} from '@/lib/utils/tables'
import { includesValue } from '@/lib/utils/text'
import { Suspense } from 'react'
import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/24/outline'
import TaskComponent from './TaskComponent'
import EmptyContent from '@/components/EmptyContent'
import RevisionComponent from './RevisionComponent'
import Forms from './Forms'
import SubtaskComponent from './SubtaskComponent'
import { type TaskStatus } from '@prisma/client'
import TaskItem from './TaskItem'

export const metadata: Metadata = {
  title: 'Tareas de proyecto',
}

// TODO -> fallback loading
// TODO -> improve all
export default async function TasksProjectPage({
  searchParams,
  params: { id },
}: SearchParamsWithIdProps) {
  const { id: userId } = await auth.user()

  const project = await getProject({ id })
  if (project == null) {
    notFound()
  }

  const leader = getProjectLeader(project)
  const taskPermissions = getTaskPermissions(leader.id, userId)
  const subtaskPermissions = getSubtaskPermissions(leader.id, userId)

  const teamwork = getTeamwork(project)
  const url = `/home/projects/${id}/tasks`
  const taskId = String(searchParams.id ?? '')
  const subtaskId = String(searchParams.subtaskId ?? '')
  const revisionId = String(searchParams.revisionId ?? '')
  const action = String(searchParams.action ?? '')
  const search = String(searchParams.search ?? '')
  const filter = String(searchParams.filtered ?? '')
  const hasTasks = project.tasks.length > 0
  const tasks = project.tasks.filter((t) => {
    const matchStatus = getTaskStatus(t) === filter.toUpperCase()
    const matchSearch = includesValue([t.title, t.description], search)

    if ((filter === '' && matchSearch) || (matchStatus && matchSearch)) return t
    else return null
  })

  const showContentEmpty =
    [taskId, revisionId].every((i) => i === '') && action === ''
  const showRevision = taskId !== '' && revisionId !== '' && action === ''
  const showSubtask =
    taskId !== '' &&
    subtaskId !== '' &&
    revisionId === '' &&
    (action === '' || action === 'show')
  const showTask =
    taskId !== '' &&
    subtaskId === '' &&
    revisionId === '' &&
    (action === '' || action === 'show')

  return (
    <>
      <PageTitle breadcrumbs={project.title} />
      <section className="grid grid-cols-1 sm:grid-cols-3 sm:p-4">
        <div className="mt-2 sm:mt-0 sm:p-1 col-span-1">
          <div className="relative max-h-[40vh] sm:max-h-[80vh] flex flex-col rounded-md">
            <Filters />
            <div className="scrollbar h-[40vh] sm:h-[80vh] mt-2 bg-white border border-zinc-300 rounded-md divide-y">
              {tasks.length > 0
                ? (
                    tasks.map((t) => {
                      const status = getTaskStatus(t) as TaskStatus

                      return (
                        <TaskItem
                          key={t.id}
                          taskId={t.id}
                          title={t.title}
                          description={t.description}
                          status={status}
                          match={t.id === taskId}
                          filter={filter}
                          url={url}
                        />
                      )
                    })
                  )
                : (
                  <div className="h-full my-auto p-4 flex items-center justify-center">
                    <EmptyContent title="No hay tareas del estado seleccionado" />
                  </div>
                  )}
            </div>
            {leader.id === userId && (
              <Link
                href={{
                  pathname: url,
                  query: { action: 'create' },
                }}
                className="sticky left-0 bottom-0 right-0"
              >
                <button className="mt-2 btn btn-primary btn-block">
                  <PlusIcon className="w-5 h-5" />
                  Registrar tarea
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className="mt-6 sm:mt-0 sm:p-1 col-span-2">
          <div className="max-h-[80vh] rounded-md card">
            <Suspense fallback={<div>Cargando...</div>}>
              <div className="h-[80vh]">
                {showContentEmpty && (
                  <div className="h-[80vh] w-auto my-auto p-4 card bg-white rounded-md border border-zinc-300 flex items-center justify-center">
                    <EmptyContent
                      title={
                        hasTasks
                          ? 'Selecciona alguna tarea'
                          : 'Registremos una nueva tarea'
                      }
                    >
                      El estado del proyecto depende de las tareas y subtareas
                    </EmptyContent>
                  </div>
                )}
                <Forms
                  key={action}
                  action={action}
                  projectId={id}
                  taskId={taskId}
                  subtaskId={subtaskId}
                  revisionId={revisionId}
                  teamwork={teamwork}
                  leader={leader.id === userId}
                  filter={filter}
                />
                {showRevision && (
                  <RevisionComponent
                    id={revisionId}
                    pathname={url}
                    filter={filter}
                    leader={leader.id === userId}
                  />
                )}
                {showSubtask && (
                  <SubtaskComponent
                    id={subtaskId}
                    userId={userId}
                    leaderId={leader.id}
                    pathname={url}
                    permissions={subtaskPermissions}
                    filter={filter}
                  />
                )}
                {showTask && (
                  <TaskComponent
                    id={taskId}
                    pathname={url}
                    permissions={taskPermissions}
                    filter={filter}
                    userId={userId}
                  />
                )}
              </div>
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}
