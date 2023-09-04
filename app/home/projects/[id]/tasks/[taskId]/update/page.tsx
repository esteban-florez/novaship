import TaskForm from '@/components/tasks/TaskForm'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Actualizar tarea',
}

interface Context {
  params: { id: string, taskId: string }
}

export default async function UpdateTaskPage({ params: { id, taskId } }: Context) {
  const project = await prisma.project.findFirst({
    where: { id },
    include: {
      memberships: {
        include: {
          person: true,
        },
      },
    },
  })

  if (project === null) redirect('/home/projects')

  const task = await prisma.task.findFirst({
    where: { id: taskId },
    include: {
      subtasks: true,
      participations: true,
    },
  })

  if (task === null) redirect(`/home/projects/${id}`)

  const members = project.memberships.map(member => {
    return {
      id: member.id,
      name: member.person.name,
    }
  })

  return (
    <TaskForm
      action={`/api/tasks/${taskId}`}
      method="PUT"
      task={task}
      projectId={id}
      memberships={members}
    />
  )
}
