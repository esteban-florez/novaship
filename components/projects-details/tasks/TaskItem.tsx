import { taskStatuses } from '@/lib/translations'
import { type TaskStatus } from '@prisma/client'

interface Props {
  title: string
  description: string
  status: TaskStatus
}

export default function TaskItem({ title, description, status }: Props) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="border-b font-semibold text-neutral-600">{title}</h2>
        <h6>Responsable: {}</h6>
      </div>
      <p className="px-2">{description}</p>
      <p>{taskStatuses[status]}</p>
    </div>
  )
}
