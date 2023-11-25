import TaskActions from './TaskActions'
import { format } from '@/lib/utils/date'
import Collapse from './Collapse'
import Link from 'next/link'
import AvatarIcon from '@/components/AvatarIcon'
import { getTask } from '@/lib/data-fetching/task'
import { taskStatuses } from '@/lib/translations'
import { getTaskStatus } from '@/lib/utils/tables'
import { type TaskStatus } from '@prisma/client'
import clsx from 'clsx'
import { STAGE_STATUS } from '@/lib/shared/stage-colors'
import { type Permissions } from '@/lib/types'

interface Props {
  id: string
  pathname: string
  permissions: Permissions
}

export default async function TaskComponent({
  id,
  pathname,
  permissions,
}: Props) {
  const task = await getTask({ id })
  if (task == null) return null

  const status = getTaskStatus(task) as TaskStatus

  return (
    <div className="scrollbar h-full p-2 sm:p-4 bg-white rounded-md border border-zinc-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <h6 className="text-xl font-bold line-clamp-1">{task.person.name}</h6>
          <span className="font-semibold text-neutral-600">
            (Responsable de la tarea)
          </span>
        </div>
        <TaskActions
          id={task.id}
          title={task.title}
          permissions={permissions}
        />
      </div>
      <div className="mb-2 flex flex-col gap-2">
        <h6 className="text-neutral-600 font-semibold">Participantes</h6>
        <div className="flex">
          {task.participations.map((p) => {
            return (
              <div
                key={p.id}
                className="z-[9999px] tooltip first:tooltip-right tooltip-bottom"
                data-tip={p.person.name}
              >
                <AvatarIcon
                  key={p.id}
                  image={p.person.image}
                  className="w-8 h-8"
                />
              </div>
            )
          })}
        </div>
      </div>
      <h3 className="text-4xl font-bold text-primary">{task.title}</h3>
      <div className="flex font-semibold text-neutral-600 gap-4">
        <p className={clsx('font-bold', STAGE_STATUS[status])}>
          ({taskStatuses[status]})
        </p>
        <p>{format(task.createdAt)}</p>
      </div>
      <p className="mt-2 text-neutral-600 leading-normal">
        {task?.description}
      </p>
      {task.revisions.length > 0 && (
        <>
          <div className="-mb-1 divider" />
          <Collapse title="Revisiones">
            {task.revisions.map((r) => {
              return (
                <Link
                  key={r.id}
                  href={{
                    pathname,
                    query: { id: task.id, revisionId: r.id },
                  }}
                >
                  <div className="group mt-4 sm:mt-1 flex flex-col sm:flex-row sm:items-center hover:text-primary text-neutral-600">
                    <p className="group-hover:font-bold break-all text-sm">
                      {r.content}
                    </p>
                    <span className="hidden sm:block mx-2">•</span>
                    <small className="font-semibold">
                      {format(r.updatedAt)}
                    </small>
                  </div>
                </Link>
              )
            })}
          </Collapse>
        </>
      )}
      {task.subtasks.length > 0 && (
        <>
          <div className="-mb-1 divider" />
          <Collapse title="Subtareas">
            {task.subtasks.map((s) => {
              return (
                <Link
                  key={s.id}
                  href={{
                    pathname,
                    query: { id: task.id, subtaskId: s.id },
                  }}
                >
                  <div className="group mt-4 sm:mt-0 sm:p-2 flex flex-col text-neutral-600 rounded-md hover:bg-neutral-200">
                    <p className="leading-tight group-hover:text-primary group-hover:font-bold">
                      {s.title}
                    </p>
                    <small
                      className={clsx('font-bold', STAGE_STATUS[s.status])}
                    >
                      ({taskStatuses[s.status]})
                    </small>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 font-semibold">
                      <div className="mt-1 -mb-4 sm:mb-0 text-sm inline-flex items-center gap-1">
                        {s.subparticipations.length > 1
                          ? (
                              s.subparticipations.map((sp) => {
                                return (
                                  <div
                                    key={sp.id}
                                    className="z-[9999px] tooltip first:tooltip-right tooltip-bottom"
                                    data-tip={sp.person.name}
                                  >
                                    <AvatarIcon
                                      key={sp.id}
                                      image={sp.person.image}
                                      className="w-8 h-8"
                                    />
                                  </div>
                                )
                              })
                            )
                          : (
                            <span className="font-semibold">
                              No hay miembros asignados
                            </span>
                            )}
                      </div>
                      <small className="font-semibold">
                        {format(s.updatedAt)}
                      </small>
                    </div>
                  </div>
                </Link>
              )
            })}
          </Collapse>
        </>
      )}
    </div>
  )
}
