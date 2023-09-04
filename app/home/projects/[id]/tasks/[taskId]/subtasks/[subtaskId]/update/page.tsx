import SubtaskForm from '@/components/subtasks/SubtaskForm'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Actualizar subtarea',
}

interface Context {
  params: {
    id: string
    taskId: string
    subtaskId: string
  }
}

export default async function UpdateSubtaskPage({ params: { id, taskId, subtaskId } }: Context) {
  const project = await prisma.project.findFirst({
    where: {
      id,
      deletedAt: null,
    },
  })

  if (project === null) redirect('/home/projects')

  const task = await prisma.task.findFirst({
    where: {
      id: taskId,
      deletedAt: null,
    },
  })

  if (task === null) redirect(`/home/projects/${id}/tasks`)

  const subtask = await prisma.subtask.findFirst({
    where: {
      id: subtaskId,
      deletedAt: null,
    },
  })

  if (subtask === null) redirect(`/home/projects/${id}/tasks/${taskId}`)

  return (
    <SubtaskForm
      action={`/api/subtasks/${subtask.id}`}
      method="PUT"
      taskId={task.id}
      projectId={id}
      subtask={subtask}
      cancelUrl={`/home/projects/${id}/tasks/${taskId}`}
    />
  )
}
