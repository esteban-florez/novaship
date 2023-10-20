import SubtaskItem from '@/components/projects/SubtaskItem'
import { type Metadata } from 'next'
import FormLayout from '@/components/forms/FormLayout'
import { notFound } from 'next/navigation'
import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline'
import { getMyTask } from '@/lib/data-fetching/task'
import { auth } from '@/lib/auth/pages'
import { format } from '@/lib/utils/date'
import Link from 'next/link'
import DeleteModal from '@/components/projects/DeleteModal'
import prisma from '@/prisma/client'
import AvatarIcon from '@/components/AvatarIcon'
import GoBackBtn from '@/components/GoBackBtn'

export const metadata: Metadata = {
  title: 'Detalles de Tarea',
}

interface Context {
  params: { id: string, taskId: string }
}

// TODO -> data refresh
// TODO -> cambiar estilos
export default async function TaskPage({ params: { id, taskId } }: Context) {
  const { id: userId } = await auth.user()

  const task = await getMyTask({ id: taskId, userId })
  if (task == null) {
    notFound()
  }

  const person = await prisma.person.findUnique({ where: { id: task.personId } })
  const hasRevisions = task.revisions.length > 0
  const hasSubtasks = task.subtasks.length > 0
  const hasParticipations = task.participations.length > 0

  return (
    <FormLayout>
      <div className="px-4 py-2">
        <div className="border-b">
          <h2 className="-mb-2 text-xl font-semibold">{task.title}</h2>
          <small className="font-semibold text-neutral-600">Encargado - {person?.name}</small>
        </div>
        <div className="px-4">
          <p className="mb-2 text-neutral-600">{task.description}</p>
          {!hasParticipations && <small className="text-neutral-600 font-semibold">No hay participantes registrados.</small>}
          {hasParticipations &&
            <ul>
              {task.participations.map(participation => {
                return (
                  <li key={participation.id} className="tooltip" data-tip={participation.person.name}>
                    <AvatarIcon image={participation.person.image} />
                  </li>
                )
              })}
            </ul>}
        </div>
        <div className="divider" />
        <div className="px-4">
          <h6 className="-mb-2 font-semibold">Revisiones</h6>
          {!hasRevisions && <small className="text-neutral-600 font-semibold">No hay revisiones registradas.</small>}
          {hasRevisions &&
            <ul>
              {task.revisions.map(revision => {
                return (
                  <li key={task.id} className="flex justify-between rounded-md border px-4 py-2 transition-all delay-75 duration-75 hover:bg-neutral-300">
                    <div>
                      <p className="-mb-2">{revision.content}</p>
                      <small className="font-semibold text-neutral-600">{format(revision.createdAt)}</small>
                    </div>
                    <div className="join">
                      <div className="tooltip" data-tip="Editar revisión">
                        <Link href={`/home/projects/${id}/tasks/${taskId}/revisions/${revision.id}/update`} className="btn-primary join-item btn hover:border-primary hover:bg-white hover:text-neutral-600">
                          <PencilIcon className="h-4 w-4" />
                        </Link>
                      </div>
                      <div className="tooltip" data-tip="Borrar revisión">
                        <DeleteModal title={revision.content} action={`/api/revision/${revision.id}`} />
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>}
        </div>
        <div className="divider" />
        <div className="mt-2 px-4 flex flex-col gap-2">
          <h6 className="font-semibold">Subtareas</h6>
          {!hasSubtasks && <small className="text-neutral-600 font-semibold">No hay subtareas registradas.</small>}
          {hasSubtasks &&
            task.subtasks.map(subtask => {
              return (
                <SubtaskItem
                  key={subtask.id}
                  projectId={id}
                  taskId={taskId}
                  subtask={subtask}
                  editAction={`/home/projects/${task.projectId}/tasks/${task.id}/subtasks/${subtask.id}/update`}
                  revisionAction={`/home/projects/${task.projectId}/tasks/${task.id}/subtasks/${subtask.id}/revisions/create`}
                />
              )
            })}
        </div>
        <div className="mt-2 flex justify-end gap-x-2 text-sm">
          <GoBackBtn label="Proyecto" />
          <Link href={`/home/projects/${task.projectId}/tasks/${taskId}/subtasks/create`}>
            <button className="btn btn-primary">
              <PlusIcon className="h-4 w-4" />
              Subtarea
            </button>
          </Link>
        </div>
      </div>
    </FormLayout>
  )
}
