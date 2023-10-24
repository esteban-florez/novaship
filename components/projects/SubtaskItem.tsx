import {
  type Subparticipation,
  type Revision,
  type Subtask,
  type Membership,
  type Person,
} from '@prisma/client'
import DeleteModal from './DeleteModal'
import { PencilIcon } from '@heroicons/react/24/outline'
import { format } from '@/lib/utils/date'
import SubtaskModal from '../projects-details/subtasks/SubtaskModal'
import RevisionModal from '../projects-details/revisions/RevisionModal'
import Participations from '../projects-details/tasks/Participations'

type Props = React.PropsWithChildren<{
  subtask: Subtask & {
    subparticipations: Array<
    Subparticipation & {
      person: Person
    }
    >
    revisions: Revision[]
  }
  taskId: string
  person?: {
    id: string
    name: string
  }
  memberships?: Array<
  Membership & {
    person: Person
  }
  >
}>

export default function SubtaskItem({
  taskId,
  subtask,
  person,
  memberships,
}: Props) {
  console.log(subtask.subparticipations)
  const participations = subtask.subparticipations.map((subparticipation) => {
    return {
      id: subparticipation.id,
      name: subparticipation.person.name,
      image: subparticipation.person.image,
    }
  })

  return (
    <section className="flex w-full flex-col rounded-sm border px-4 py-2 text-neutral-600 transition-colors delay-150 duration-150 hover:bg-neutral-200">
      <div className="flex-col">
        <h5 className="font-semibold">{subtask.title}</h5>
        <Participations participations={participations} />
        <p>{subtask.description}</p>
        <div className="join my-2">
          <div
            className="tooltip"
            data-tip="Editar subtarea"
          >
            <SubtaskModal
              action={`/api/subtasks/${subtask.id}`}
              method="PUT"
              taskId={taskId}
              subtask={subtask}
              icon={<PencilIcon className="w-4 h-4" />}
              memberships={memberships}
              person={person}
            />
          </div>
          <div
            className="tooltip"
            data-tip="Borrar subtarea"
          >
            <DeleteModal
              title={subtask.title}
              action={`/api/subtasks/${subtask.id}`}
            />
          </div>
          <div
            className="tooltip"
            data-tip="Añadir revisión"
          >
            <RevisionModal
              action="/api/revision"
              method="POST"
              subtaskId={subtask.id}
            />
          </div>
        </div>
        <ul className="mt-2 w-full">
          {subtask.revisions.map((revision) => {
            return (
              <li
                key={revision.id}
                className="flex w-full justify-between rounded-md border px-4 py-2 transition-all delay-75 duration-75 hover:bg-neutral-300"
              >
                <div className="w-full">
                  <p className="-mb-2">{revision.content}</p>
                  <small className="font-semibold text-neutral-600">
                    {format(revision.createdAt)}
                  </small>
                </div>
                <div className="join">
                  <div
                    className="tooltip"
                    data-tip="Editar revisión"
                  >
                    <RevisionModal
                      action={`/api/revision/${revision.id}`}
                      method="PUT"
                      revision={revision}
                      subtaskId={subtask.id}
                      icon={<PencilIcon className="w-4 h-4" />}
                    />
                  </div>
                  <div
                    className="tooltip"
                    data-tip="Borrar revisión"
                  >
                    <DeleteModal
                      title={revision.content}
                      action={`/api/revision/${revision.id}`}
                    />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
