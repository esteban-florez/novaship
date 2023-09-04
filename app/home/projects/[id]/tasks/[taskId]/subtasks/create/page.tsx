import SubtaskForm from '@/components/subtasks/SubtaskForm'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Registrar subtarea',
}

interface Context {
  params: {
    id: string
    taskId: string
  }
}

// TODO -> cambiar la page por un modal
export default async function CreateSubtaskPage({ params: { id, taskId } }: Context) {
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

  return (
    <SubtaskForm
      action="/api/subtasks"
      method="POST"
      taskId={task.id}
      projectId={id}
      cancelUrl={`/home/projects/${id}/tasks/${taskId}`}
    />
  )
}
