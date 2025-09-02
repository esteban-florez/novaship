import { type TasksWithRelationship } from '@/lib/types'
import { getTaskStatus } from '@/lib/utils/tables'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { type TaskStatus } from '@prisma/client'
import Link from 'next/link'
import Progress from './Progress'

interface Props {
  title: string
  tasks: TasksWithRelationship[]
  url: string
  filter: string
}

// TODO -> redirigir a la task seleccionada.
export default function TaskContainer({ title, tasks, url, filter }: Props) {
  const s = tasks.length - 2 > 1 ? 's' : ''
  const renderedTasks = tasks.slice(0, 4)
  const percentages = {
    DONE: 100,
    REVIEW: 0,
    PROGRESS: 50,
    PENDING: 0,
  }
  return tasks.length > 0
    ? (
      <div className="relative h-80 p-4 card border border-zinc-300 bg-white shadow-lg rounded-md">
        <h4 className="mb-4 text-primary text-xl font-bold">{title}</h4>
        {renderedTasks.map((t, i) => {
          const progress = getTaskStatus(t)
          const percentage = percentages[progress as TaskStatus]

          if (i < 3) {
            return (
              <div
                key={t.id}
                className="mb-3"
              >
                <h6 className="font-semibold leading-none line-clamp-1">
                  {t.title}
                </h6>
                <p className="mt-1 text-sm text-neutral-500 line-clamp-1">
                  {t.description}
                </p>
                {progress !== 'DONE' && (
                  <Progress
                    condition={progress === 'REVIEW'}
                    percentage={percentage}
                  />
                )}
              </div>
            )
          }

          return null
        })}
        <div className="absolute left-0 right-0 bottom-0 p-2 px-4 border-t border-zinc-300 bg-neutral-100 rounded-b-md">
          {tasks.length > 2
            ? (
              <Link
                href={{
                  pathname: url,
                  query: { filtered: filter },
                }}
              >
                <small className="hover:text-primary inline-flex gap-2 items-center font-semibold text-neutral-600">
                  Hay {tasks.length - 2} tarea{s} más por mostrar
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </small>
              </Link>
              )
            : (
              <Link
                href={{
                  pathname: url,
                  query: { filtered: filter },
                }}
              >
                <small className="hover:text-primary inline-flex gap-2 items-center font-semibold text-neutral-600">
                  Ver tareas
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </small>
              </Link>
              )}
        </div>
      </div>
      )
    : null
}
