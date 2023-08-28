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
    <div className="flex flex-col space-y-4 rounded-lg rounded-tl-none">
      {tasks.map(task => {
        return (
          <TaskItem key={task.id} task={task} projectId={projectId} />
        )
      })}
    </div>
  )
}
