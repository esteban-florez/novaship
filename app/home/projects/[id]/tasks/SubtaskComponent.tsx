import { format } from '@/lib/utils/date'
import Collapse from './Collapse'
import Link from 'next/link'
import AvatarIcon from '@/components/AvatarIcon'
import { getSubtask } from '@/lib/data-fetching/subtask'
import SubtaskActions from './SubtaskActions'
import { type Permissions } from '@/lib/types'

interface Props {
  id: string
  pathname: string
  permissions: Omit<Permissions, 'create'>
  userId: string
  leaderId: string
  filter: string
}

export default async function SubtaskComponent({
  id,
  pathname,
  permissions,
  userId,
  filter,
}: Props) {
  const subtask = await getSubtask({ id })
  if (subtask == null) return null

  permissions.delete = permissions.delete || subtask.task.personId === userId
  permissions.edit = permissions.edit || subtask.task.personId === userId

  return (
    <div className="scrollbar h-full p-4 bg-white rounded-md border border-zinc-300">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <h6 className="text-xl font-bold line-clamp-1">
            {subtask.task.personId === userId ? 'Tú' : subtask.task.person.name}
          </h6>
          <span className="font-semibold text-neutral-600">
            (Responsable de la subtarea)
          </span>
        </div>
        <SubtaskActions
          id={id}
          title={subtask.title}
          permissions={permissions}
          filter={filter}
        />
      </div>
      {subtask.subparticipations.length > 0 && (
        <div className="mb-2 flex flex-col gap-2">
          <h6 className="text-neutral-600 font-semibold">Participantes</h6>
          <div className="flex">
            {subtask.subparticipations.map((sp) => {
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
            })}
          </div>
        </div>
      )}
      <h3 className="text-4xl font-bold text-primary">{subtask.title}</h3>
      <small className="font-semibold text-neutral-600">
        {format(subtask.createdAt)}
      </small>
      <p className="mt-2 text-neutral-600 leading-normal">
        {subtask.description}
      </p>
      {subtask.revisions.length > 0 && (
        <>
          <div className="-mb-1 divider" />
          <Collapse title="Revisiones">
            {subtask.revisions.map((r) => {
              return (
                <Link
                  key={r.id}
                  href={{
                    pathname,
                    query: {
                      id: subtask.task.id,
                      subtaskId: subtask.id,
                      revisionId: r.id,
                    },
                  }}
                >
                  <p className="flex items-center hover:text-primary text-neutral-600">
                    {r.content}
                    <span className="mx-2">•</span>
                    <small className="font-semibold">
                      {format(r.updatedAt)}
                    </small>
                  </p>
                </Link>
              )
            })}
          </Collapse>
        </>
      )}
    </div>
  )
}
