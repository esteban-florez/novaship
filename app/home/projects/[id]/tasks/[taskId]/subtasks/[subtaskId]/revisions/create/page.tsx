import RevisionForm from '@/components/projects-details/revisions/RevisionForm'
import { auth } from '@/lib/auth/pages'
import { getMySubtask } from '@/lib/data-fetching/subtask'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Registrar revisión de subtarea',
}

interface Params {
  params: {
    id: string
    subtaskId: string
  }
}

// TODO -> volver un modal
export default async function CreateSubtaskRevisionPage({ params: { subtaskId } }: Params) {
  const { id: userId } = await auth.user()

  const task = await getMySubtask({ id: subtaskId, userId })
  if (task == null) {
    notFound()
  }

  return (
    <RevisionForm
      method="POST"
      action="/api/revision"
      subtaskId={subtaskId}
    />
  )
}
