import TaskItem from './TaskItem'
import { type TasksProps } from '@/lib/types'

export default function Tasks({ projectId, tasks }: TasksProps) {
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
