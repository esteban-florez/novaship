import {
  type Membership,
  type Participation,
  type Person,
  type Revision,
  type Subtask,
  type Task,
} from '@prisma/client'
import TaskItem from './TaskItem'

interface Props {
  projectId: string
  tasks: Array<
  Task & {
    subtasks: Array<
    Subtask & {
      revisions: Revision[]
    }
    >
    participations: Participation[]
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

export default function Tasks({
  projectId,
  tasks,
  memberships,
  person,
}: Props) {
  return (
    <div className="flex w-full flex-col gap-3">
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            projectId={projectId}
            memberships={memberships}
            person={person}
          />
        )
      })}
    </div>
  )
}
