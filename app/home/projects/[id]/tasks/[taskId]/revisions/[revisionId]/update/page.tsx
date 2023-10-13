import RevisionForm from '@/components/projects-details/revisions/RevisionForm'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Actualizar revisión de tarea',
}

interface Params {
  params: {
    id: string
    taskId: string
    revisionId: string
  }
}

// TODO -> volver un modal
export default async function UpdateTaskRevisionPage({ params: { taskId, revisionId } }: Params) {
  const revision = await prisma.revision.findFirst({
    where: {
      id: revisionId,
      taskId,
    },
  })
  if (revision == null) {
    notFound()
  }

  return (
    <RevisionForm
      method="PUT"
      action={`/api/revision/${revisionId}`}
      taskId={taskId}
      revision={revision}
    />
  )
}
