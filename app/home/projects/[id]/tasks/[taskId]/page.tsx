import { type Metadata } from 'next'
import FormLayout from '@/components/forms/FormLayout'
import { notFound } from 'next/navigation'
import {
  ArrowLeftIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline'
import { getMyTask } from '@/lib/data-fetching/task'
import { auth } from '@/lib/auth/pages'
import Link from 'next/link'
import prisma from '@/prisma/client'
import SubtaskModal from '@/components/projects-details/subtasks/SubtaskModal'
import RevisionModal from '@/components/projects-details/revisions/RevisionModal'
import Participations from '@/components/projects-details/tasks/Participations'
import Revisions from '@/components/projects-details/tasks/Revisions'
import Subtasks from '@/components/projects-details/tasks/Subtasks'
import { getProject } from '@/lib/data-fetching/project'
import { getTaskStatus } from '@/lib/utils/tasks'

export const metadata: Metadata = {
  title: 'Detalles de tarea',
}

interface Context {
  params: { id: string, taskId: string }
}

// TODO -> data refresh
// TODO -> cambiar estilos
export default async function TaskPage({ params: { id, taskId } }: Context) {
  const { id: userId, type } = await auth.user()
  const user = await prisma.person.findFirst({
    where: { id: userId },
    select: { id: true, name: true },
  })

  if (user == null) {
    notFound()
  }

  const task = await getMyTask({ id: taskId, userId })
  if (task == null) {
    notFound()
  }

  const status = getTaskStatus({ task })
  const project = await getProject({ id })
  const person = await prisma.person.findUnique({
    where: { id: task.personId },
  })

  const participations = task.participations.map((participation) => {
    return {
      id: participation.id,
      name: participation.person.name,
      image: participation.person.image,
    }
  })

  return (
    <FormLayout title="Información de la tarea">
      <div className="sm:px-4 sm:py-2">
        <div className="flex flex-col">
          <h2 className="-mb-2 text-xl font-semibold">{task.title}</h2>
          <small className="font-semibold text-neutral-600">
            Encargado - {person?.name}
          </small>
          <span className="font-semibold text-neutral-600">{status}</span>
          <p className="mb-2 text-neutral-600">{task.description}</p>
        </div>
        {project?.team != null && (
          <>
            <div className="divider" />
            <div className="mt-4 sm:px-4">
              <Participations participations={participations} />
            </div>
          </>
        )}
        <div className="divider" />
        <div className="sm:px-4">
          <Revisions revisions={task.revisions} />
        </div>
        <div className="divider" />
        <div className="mt-2 px-4 flex flex-col">
          <Subtasks
            subtasks={task.subtasks}
            taskId={taskId}
            memberships={project?.team?.memberships}
            person={type === 'PERSON' ? user : undefined}
          />
        </div>
        <div className="mt-2 flex flex-col sm:flex-row sm:justify-end gap-2 text-sm">
          <Link
            href={`/home/projects/${task.projectId}`}
            className="btn bg-white text-neutral-600 hover:bg-neutral-200 border-neutral-300 hover:border-neutral-500"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Proyecto
          </Link>
          <div
            className="tooltip"
            data-tip="Nueva subtarea"
          >
            <SubtaskModal
              action="/api/subtasks"
              method="POST"
              taskId={taskId}
              buttonLabel="Subtarea"
              memberships={project?.team?.memberships}
              person={type === 'PERSON' ? user : undefined}
            />
          </div>
          <div
            className="tooltip"
            data-tip="Nueva revisión"
          >
            <RevisionModal
              action="/api/revision"
              method="POST"
              taskId={taskId}
              icon={<ChatBubbleBottomCenterTextIcon className="h-4 w-4" />}
              buttonLabel="Revisión"
            />
          </div>
        </div>
      </div>
    </FormLayout>
  )
}
