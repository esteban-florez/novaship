import SubtaskItem from '@/components/projects/SubtaskItem'
import {
  type Membership,
  type Person,
  type Revision,
  type Subparticipation,
  type Subtask,
} from '@prisma/client'
import clsx from 'clsx'

interface Props {
  taskId: string
  subtasks: Array<
  Subtask & {
    subparticipations: Array<
    Subparticipation & {
      person: Person
    }
    >
    revisions: Revision[]
  }
  >
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

export default function Subtasks({
  taskId,
  subtasks,
  person,
  memberships,
}: Props) {
  const hasSubtasks = subtasks.length > 0
  return (
    <>
      <h6 className={clsx('font-semibold', !hasSubtasks && '-mb-2')}>
        Subtareas
      </h6>
      {!hasSubtasks && (
        <small className="text-neutral-600 font-semibold">
          No hay subtareas registradas.
        </small>
      )}
      {hasSubtasks &&
        subtasks.map((subtask) => {
          return (
            <SubtaskItem
              key={subtask.id}
              taskId={taskId}
              subtask={subtask}
              memberships={memberships}
              person={person}
            />
          )
        })}
    </>
  )
}
