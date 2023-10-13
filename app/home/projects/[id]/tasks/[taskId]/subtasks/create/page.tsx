import SubtaskForm from '@/components/subtasks/SubtaskForm'
import { auth } from '@/lib/auth/pages'
import { getMyTask } from '@/lib/data-fetching/task'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Registrar subtarea',
}

interface Context {
  params: {
    id: string
    taskId: string
  }
}

// TODO -> volver un modal
export default async function CreateSubtaskPage({ params: { id, taskId } }: Context) {
  const { id: userId } = await auth.user()
  const project = await prisma.project.findFirst({
    where: { id },
  })

  if (project === null) redirect('/home/projects')

  const task = await getMyTask({ id: taskId, userId })
  if (task === null) {
    notFound()
  }

  return (
    <SubtaskForm
      action="/api/subtasks"
      method="POST"
      taskId={task.id}
      projectId={id}
    />
  )
}
