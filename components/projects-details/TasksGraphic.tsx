import collect from '@/lib/utils/collection'
import { structureDataForGraphic } from '@/lib/utils/date'
import { type Task, TaskStatus } from '@prisma/client'
import BarGraphic from '../graphics/BarGraphic'

interface Props {
  tasks: Task[]
}

export default function TasksGraphic({ tasks }: Props) {
  const tasksGrouped = collect(tasks).groupBy('status')

  const pendingData = structureDataForGraphic({
    arr: tasksGrouped[TaskStatus.PENDING] ?? [],
    param: 'createdAt',
  })
  const progressData = structureDataForGraphic({
    arr: tasksGrouped[TaskStatus.PROGRESS] ?? [],
    param: 'createdAt',
  })
  const reviewData = structureDataForGraphic({
    arr: tasksGrouped[TaskStatus.REVIEW] ?? [],
    param: 'createdAt',
  })
  const completedData = structureDataForGraphic({
    arr: tasksGrouped[TaskStatus.DONE] ?? [],
    param: 'createdAt',
  })

  const data = {
    labels: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    datasets: [
      {
        label: 'Tareas pendientes',
        borderRadius: 30,
        data: pendingData,
        barThickness: 10,
      },
      {
        label: 'Tareas completadas',
        borderRadius: 30,
        data: completedData,
        barThickness: 10,
      },
      {
        label: 'Tareas en progreso',
        borderRadius: 30,
        data: progressData,
        barThickness: 10,
      },
      {
        label: 'Tareas en revisión',
        borderRadius: 30,
        data: reviewData,
        barThickness: 10,
      },
    ],
  }

  return (
    <BarGraphic
      title="Tareas"
      data={data}
    />
  )
}
