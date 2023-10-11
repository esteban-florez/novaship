import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import TaskForm from '@/components/tasks/TaskForm'
import { auth } from '@/lib/auth/pages'
import { getMyProject } from '@/lib/data-fetching/project'

export const metadata: Metadata = {
  title: 'Registrar tarea',
}

export default async function CreateTaskPage({ params: { id } }: PageContext) {
  const { id: userId, name, type } = await auth.user()

  const project = await getMyProject({ id, userId })
  if (project == null) {
    notFound()
  }

  const person = { id: userId, name }

  return (
    <TaskForm
      action="/api/tasks"
      method="POST"
      projectId={id}
      person={type === 'PERSON' ? person : undefined}
      memberships={project.team?.memberships}
    />
  )
}
