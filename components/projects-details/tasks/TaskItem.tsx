import Button from '@/components/Button'
import DeleteModal from '@/components/projects/DeleteModal'
import { taskStatuses } from '@/lib/translations'
import { EyeIcon, PencilIcon, PlusIcon } from '@heroicons/react/24/outline'
import { type Participation, type Subtask, type Task } from '@prisma/client'
import clsx from 'clsx'

interface Props {
  projectId: string
  task: Task & {
    subtasks: Subtask[]
    participations: Participation[]
  }
}

export default function TaskItem({ projectId, task }: Props) {
  const subtasksCount = {
    DONE: task.subtasks.filter(subtask => subtask.status === 'DONE').length,
    PENDING: task.subtasks.filter(subtask => subtask.status === 'PENDING').length,
    REVIEW: task.subtasks.filter(subtask => subtask.status === 'REVIEW').length,
    PROGRESS: task.subtasks.filter(subtask => subtask.status === 'PROGRESS').length,
  }

  return (
    <section className="flex flex-col rounded-md border px-4 py-2 shadow transition-colors delay-150 duration-150 hover:bg-neutral-200">
      <header className="mb-1 gap-x-2">
        <h2 className="text-xl font-semibold">{task.title}</h2>
        <div className="-mt-1 flex items-center gap-1">
          <span className={clsx({
            'h-3 w-3 rounded-full': true,
            'bg-success': task.status === 'DONE',
            'bg-warning': task.status === 'PENDING',
            'bg-secondary': task.status === 'PROGRESS',
            'bg-primary': task.status === 'REVIEW',
          })}
          />
          <p className="text-sm font-semibold text-neutral-600">{taskStatuses[task.status ?? 'PENDING']}</p>
        </div>
      </header>
      <main>
        <p className="text-base">{task.description}</p>
        {task.subtasks.length === 0
          ? (<p className="my-1 text-sm font-semibold text-neutral-500">No hay subtareas registradas por los momentos.</p>)
          : (
            <div className="stats stats-vertical my-2 shadow lg:stats-horizontal">

              <div className="stat">
                <div className="stat-title">Completadas</div>
                <div className="stat-value">{subtasksCount.DONE}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Pendientes</div>
                <div className="stat-value">{subtasksCount.PENDING}</div>
              </div>

              <div className="stat">
                <div className="stat-title">En progreso</div>
                <div className="stat-value">{subtasksCount.PROGRESS}</div>
              </div>

              <div className="stat">
                <div className="stat-title">En revisión</div>
                <div className="stat-value">{subtasksCount.REVIEW}</div>
              </div>

            </div>
            )}
      </main>
      <div className="mt-2 flex flex-col gap-2 text-sm sm:flex-row">
        <Button
          url={`/home/projects/${projectId}/tasks/${task.id}/subtasks/create`}
          color="WHITE"
          hover="PRIMARY"
        >
          <PlusIcon className="h-5 w-5" />
          Subtarea
        </Button>
        <Button
          url={`/home/projects/${projectId}/tasks/${task.id}`}
          color="WHITE"
          hover="PRIMARY"
        >
          <EyeIcon className="h-5 w-5" />
          Ver
        </Button>
        <Button
          url={`/home/projects/${projectId}/tasks/${task.id}/update`}
          color="WHITE"
          hover="PRIMARY"
        >
          <PencilIcon className="h-5 w-5" />
          Editar
        </Button>
        <DeleteModal title={task.title} action={`/api/tasks/${task.id}`} />
      </div>
    </section>
  )
}
