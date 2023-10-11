import DeleteModal from '@/components/projects/DeleteModal'
import { type TaskProps } from '@/lib/types'
import { format } from '@/lib/utils/date'
import { ChatBubbleBottomCenterTextIcon, EyeIcon, PencilIcon, PlusIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon, ClockIcon, ExclamationCircleIcon, InformationCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function TaskItem({ projectId, task }: TaskProps) {
  const subtasksCount = task.subtasks.length
  const subtasksDoneCount = task.subtasks.filter(subtask => subtask.status === 'DONE').length
  const subtasksPendingCount = task.subtasks.filter(subtask => subtask.status === 'PENDING').length
  const subtasksProgressCount = task.subtasks.filter(subtask => subtask.status === 'PROGRESS').length
  const subtasksReviewCount = task.subtasks.filter(subtask => subtask.status === 'REVIEW').length

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
      <div className="col-span-full sm:col-span-4">
        <h5 className="-mb-2 font-bold">{task.title}</h5>
        <small className="font-semibold text-neutral-600">{format(task.createdAt)}</small>
        <span className="my-1 flex gap-2 font-semibold text-neutral-600">{taskStatus()}</span>
        <p className="mt-0 line-clamp-3 sm:-mt-1">{task.description}</p>
      </div>
      <div className="col-span-full sm:col-span-3">
        <div className="join">
          <div className="tooltip" data-tip="Añadir subtarea">
            <Link href={`/home/projects/${projectId}/tasks/${task.id}/subtasks/create`} className="btn-primary join-item btn hover:border-primary hover:bg-white hover:text-neutral-600">
              <PlusIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="tooltip" data-tip="Editar tarea">
            <Link href={`/home/projects/${projectId}/tasks/${task.id}/update`} className="btn-primary join-item btn hover:border-primary hover:bg-white hover:text-neutral-600">
              <PencilIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="tooltip" data-tip="Ver tarea">
            <Link href={`/home/projects/${projectId}/tasks/${task.id}`} className="btn-primary join-item btn hover:border-primary hover:bg-white hover:text-neutral-600">
              <EyeIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="tooltip" data-tip="Añadir revisión">
            <Link href={`/home/projects/${projectId}/tasks/${task.id}/revisions/create`} className="btn-primary join-item btn hover:border-primary hover:bg-white hover:text-neutral-600">
              <ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
            </Link>
          </div>
          <DeleteModal title={task.title} action={`/api/tasks/${task.id}`} />
        </div>
      </div>
    </section>
  )
}
