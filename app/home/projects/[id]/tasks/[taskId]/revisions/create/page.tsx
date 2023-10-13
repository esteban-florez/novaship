import RevisionForm from '@/components/projects-details/revisions/RevisionForm'
import { auth } from '@/lib/auth/pages'
import { getMyTask } from '@/lib/data-fetching/task'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Registrar revisión de tarea',
}

interface Params {
  params: {
    id: string
    taskId: string
  }
}

// TODO -> volver un modal
export default async function CreateTaskRevisionPage({ params: { taskId } }: Params) {
  const { id: userId } = await auth.user()

  const task = await getMyTask({ id: taskId, userId })
  if (task == null) {
    notFound()
  }

  return (
    <RevisionForm
      method="POST"
      action="/api/revision"
      taskId={taskId}
    />
  )
}
