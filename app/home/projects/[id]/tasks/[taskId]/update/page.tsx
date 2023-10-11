import TaskForm from '@/components/tasks/TaskForm'
import { auth } from '@/lib/auth/pages'
import { getMyProject } from '@/lib/data-fetching/project'
import { getMyTask } from '@/lib/data-fetching/task'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Actualizar tarea',
}

interface Context {
  params: { id: string, taskId: string }
}

// TODO -> data refresh
export default async function UpdateTaskPage({ params: { id, taskId } }: Context) {
  const { id: userId, name, type } = await auth.user()

  const project = await getMyProject({ id, userId })
  if (project == null) {
    notFound()
  }

  const task = await getMyTask({ id: taskId, userId })
  if (task == null) {
    notFound()
  }

  const person = { id: userId, name }

  return (
    <TaskForm
      action={`/api/tasks/${taskId}`}
      method="PUT"
      task={task}
      projectId={id}
      person={type === 'PERSON' ? person : undefined}
      memberships={project.team?.memberships}
    />
  )
}
