import SubtaskForm from '@/components/subtasks/SubtaskForm'
import { auth } from '@/lib/auth/pages'
import { getMySubtask } from '@/lib/data-fetching/subtask'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

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

// TODO -> volver un modal
export default async function UpdateSubtaskPage({ params: { id, subtaskId } }: Context) {
  const { id: userId } = await auth.user()
  const subtask = await getMySubtask({ id: subtaskId, userId })

  if (subtask === null) {
    notFound()
  }

  return (
    <SubtaskForm
      action={`/api/subtasks/${subtask.id}`}
      method="PUT"
      taskId={subtask.task.id}
      projectId={id}
      subtask={subtask}
    />
  )
}
