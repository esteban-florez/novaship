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
  return (
    <div className="flex w-full flex-col items-center px-4 py-2 even:border-t sm:flex-row">
      <div className="basis-1/4">
        <h2 className="font-semibold">{task.title}</h2>
        <p className="text-sm text-neutral-600">{task.description}</p>
      </div>
      <div className="basis-9/12">
        {task.subtasks.length === 0
          ? (<p className="text-neutral-600">No hay subtareas registradas por los momentos.</p>)
          : (
            <ul className="steps steps-vertical lg:steps-horizontal">
              {task.subtasks.map(subtask => {
                return (
                  <li
                    key={subtask.id} className={clsx({
                      step: true,
                      'step-primary': subtask.status === 'DONE',
                    })}
                  >{subtask.title}
                  </li>
                )
              })}
            </ul>
            )}
      </div>
      <div className="flex basis-1/5 items-center gap-x-2">
        <span className={clsx({
          'h-2 w-2 rounded-full': true,
          'bg-warning': task.status === 'PENDING',
          'bg-primary': task.status === 'PROGRESS',
          'bg-secondary': task.status === 'REVIEW',
          'bg-success': task.status === 'DONE',
        })}
        />
        <p>{taskStatuses[task.status ?? 'PENDING']}</p>
      </div>
      <div className="flex gap-x-2">
        <Button
          url={`/home/projects/${projectId}/tasks/${task.id}`}
          style="ICON"
          color="CANCEL"
          hover="PRIMARY"
        >
          <EyeIcon className="h-5 w-5" />
        </Button>
        <Button
          url={`/home/projects/${projectId}/tasks/${task.id}/update`}
          style="ICON"
          color="CANCEL"
          hover="PRIMARY"
        >
          <PencilIcon className="h-5 w-5" />
        </Button>
        <Button
          url={`/home/projects/${projectId}/tasks/${task.id}/subtasks/create`}
          style="ICON"
          color="CANCEL"
          hover="PRIMARY"
        >
          <PlusIcon className="h-5 w-5" />
        </Button>
        <DeleteModal title={task.title} action={`/api/tasks/${task.id}`} />
      </div>
    </div>
  )
}
