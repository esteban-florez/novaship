import DeleteModal from '@/components/projects/DeleteModal'
import { format } from '@/lib/utils/date'
import {
  ChatBubbleBottomCenterTextIcon,
  EyeIcon,
  PencilIcon,
} from '@heroicons/react/24/outline'
import {
  CheckCircleIcon,
  ClockIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import SubtaskModal from '../subtasks/SubtaskModal'
import TaskModal from './TaskModal'
import {
  type Membership,
  type Participation,
  type Person,
  type Revision,
  type Subtask,
  type Task,
} from '@prisma/client'
import RevisionModal from '../revisions/RevisionModal'

interface Props {
  projectId: string
  task: Task & {
    subtasks: Array<
    Subtask & {
      revisions: Revision[]
    }
    >
    participations: Participation[]
    revisions: Revision[]
  }
  person?: {
    id: string
    name: string
  }
  memberships?: Array<
  Membership & {
    person: Person
  }
  >
}

export default function TaskItem({
  projectId,
  task,
  person,
  memberships,
}: Props) {
  const subtasksCount = task.subtasks.length
  const subtasksDoneCount = task.subtasks.filter(
    (subtask) => subtask.status === 'DONE'
  ).length
  const subtasksPendingCount = task.subtasks.filter(
    (subtask) => subtask.status === 'PENDING'
  ).length
  const subtasksProgressCount = task.subtasks.filter(
    (subtask) => subtask.status === 'PROGRESS'
  ).length
  const subtasksReviewCount = task.subtasks.filter(
    (subtask) => subtask.status === 'REVIEW'
  ).length

  const taskStatus = () => {
    if (subtasksCount === 0) {
      return (
        <>
          <InformationCircleIcon className="h-5 w-5 text-primary" />
          <small>No hay subtareas asociadas.</small>
        </>
      )
    }

    if (subtasksDoneCount === subtasksCount) {
      return (
        <>
          <CheckCircleIcon className="h-5 w-5 text-primary" />
          <small>Tarea compleatada.</small>
        </>
      )
    }

    if (subtasksPendingCount > 0) {
      return (
        <>
          <ClockIcon className="h-5 w-5 text-primary" />
          <small>Hay {subtasksPendingCount} subtareas pendientes.</small>
        </>
      )
    }

    if (subtasksProgressCount > 0) {
      return (
        <>
          <ExclamationCircleIcon className="h-5 w-5 text-primary" />
          <small>Hay {subtasksProgressCount} subtareas en progreso.</small>
        </>
      )
    }

    if (subtasksReviewCount > 0) {
      return (
        <>
          <QuestionMarkCircleIcon className="h-5 w-5 text-primary" />
          <small>Hay {subtasksReviewCount} subtareas en revisión.</small>
        </>
      )
    }
  }

  return (
    <section className="grid grid-cols-7 gap-y-2 rounded-md border border-neutral-300 px-4 py-2">
      <div className="col-span-full">
        <h5 className="-mb-2 font-bold">{task.title}</h5>
        <small className="font-semibold text-neutral-600">
          {format(task.createdAt)}
        </small>
        <span className="my-1 flex gap-2 font-semibold text-neutral-600">
          {taskStatus()}
        </span>
        <div className="my-2 join">
          <div
            className="tooltip"
            data-tip="Añadir subtarea"
          >
            <SubtaskModal
              method="POST"
              action="/api/subtasks"
              taskId={task.id}
            />
          </div>
          <div
            className="tooltip"
            data-tip="Editar tarea"
          >
            <TaskModal
              action={`/api/tasks/${task.id}`}
              method="PUT"
              projectId={projectId}
              person={person}
              task={task}
              memberships={memberships}
              icon={<PencilIcon className="h-4 w-4" />}
            />
          </div>
          <div
            className="tooltip"
            data-tip="Ver tarea"
          >
            <Link
              href={`/home/projects/${projectId}/tasks/${task.id}`}
              className="btn-primary join-item btn hover:border-primary hover:bg-white hover:text-neutral-600"
            >
              <EyeIcon className="h-4 w-4" />
            </Link>
          </div>
          <div
            className="tooltip"
            data-tip="Borrar tarea"
          >
            <DeleteModal
              title={task.title}
              action={`/api/tasks/${task.id}`}
            />
          </div>
          <div
            className="tooltip"
            data-tip="Añadir revisión"
          >
            <RevisionModal
              action="/api/revision"
              method="POST"
              taskId={task.id}
              icon={<ChatBubbleBottomCenterTextIcon className="h-4 w-4" />}
            />
          </div>
        </div>
        <p className="mt-0 line-clamp-3 leading-tight sm:-mt-1">
          {task.description}
        </p>
      </div>
    </section>
  )
}
