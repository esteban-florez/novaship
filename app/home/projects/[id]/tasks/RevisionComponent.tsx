import DeleteModal from '@/components/projects/DeleteModal'
import { getRevision } from '@/lib/data-fetching/revision'
import { format } from '@/lib/utils/date'
import { PencilIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface Props {
  id: string
  pathname: string
  filter: string
  leader: boolean
}

export default async function RevisionComponent({
  id,
  pathname,
  filter,
  leader,
}: Props) {
  const revision = await getRevision({ where: { id } })
  if (revision == null) return null

  const responsable =
    revision.subtask?.task.person.name ?? revision.task?.person.name
  const title = revision.subtask?.title ?? revision.task?.title
  const taskId = revision.taskId
  const subtaskId = revision.subtaskId
  let query: Record<string, string> | null = null
  if (filter === '') query = null
  if (subtaskId != null && taskId != null) {
    query = { id: taskId, subtask: subtaskId, filtered: filter }
  }
  if (taskId != null) query = { id: taskId, filtered: filter }

  return (
    <div className="scrollbar h-full p-4 bg-white rounded-md border border-zinc-300">
      <div className="mb-2 flex flex-col sm:flex-row items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <h6 className="text-xl font-bold line-clamp-1">{responsable}</h6>
          <span className="font-semibold text-neutral-600">(Responsable)</span>
        </div>
        {leader
          ? (
            <div className="flex flex-wrap">
              <div
                className="z-[9999px] tooltip tooltip-right sm:tooltip-bottom"
                data-tip="Editar revisión"
              >
                <DeleteModal
                  action={`/api/revisions/${id}`}
                  title={revision.content}
                  className="btn btn-circle btn-ghost"
                />
              </div>
              <div
                className="z-[9999px] tooltip tooltip-bottom"
                data-tip="Editar revisión"
              >
                {subtaskId != null
                  ? (
                    <Link
                      href={{
                        pathname,
                        query: {
                          subtaskId,
                          revisionId: revision.id,
                          action: 'update',
                          filtered: filter,
                        },
                      }}
                    >
                      <button className="btn btn-circle btn-ghost">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                    </Link>
                    )
                  : (
                    <Link
                      href={{
                        pathname,
                        query: {
                          id: taskId,
                          revisionId: revision.id,
                          action: 'update',
                          filtered: filter,
                        },
                      }}
                    >
                      <button className="btn btn-circle btn-ghost">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                    </Link>
                    )}
              </div>
              <div
                className="z-[9999px] tooltip tooltip-left"
                data-tip="Quitar revisión"
              >
                <Link
                  href={{
                    pathname,
                    query,
                  }}
                >
                  <button className="btn btn-circle btn-ghost">
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
            )
          : (
            <div
              className="z-[9999px] tooltip tooltip-left"
              data-tip="Quitar revisión"
            >
              <Link
                href={{
                  pathname,
                  query,
                }}
              >
                <button className="btn btn-circle btn-ghost">
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </Link>
            </div>
            )}
      </div>
      <h3 className="text-4xl font-bold text-primary">{title}</h3>
      <h6 className="mt-2 text-lg text-neutral-600 font-semibold text-center">
        Estás viendo una revisión de {taskId != null ? 'tarea' : 'subtarea'}
      </h6>
      <p className="mt-1 text-neutral-600 leading-normal">{revision.content}</p>
      <small className="font-semibold text-neutral-600">
        {format({ date: revision.createdAt })}
      </small>
    </div>
  )
}
