import { type Participation, type Subtask, type Task } from '@prisma/client'
import TaskItem from './TaskItem'

interface Props {
  projectId: string
  tasks: Array<Task & {
    subtasks: Subtask[]
    participations: Participation[]
  }>
}

export default function Tasks({ projectId, tasks }: Props) {
  return (
    <div className="flex w-full flex-col gap-3">
      {tasks.map(task => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            projectId={projectId}
          />
        )
      })}
    </div>
  )
}
