import RevisionForm from '@/components/projects-details/revisions/RevisionForm'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Actualizar revisión de subtarea',
}

interface Params {
  params: {
    id: string
    subtaskId: string
    revisionId: string
  }
}

// TODO -> volver un modal
export default async function UpdateSubtaskRevisionPage({ params: { subtaskId, revisionId } }: Params) {
  const revision = await prisma.revision.findFirst({
    where: {
      id: revisionId,
      subtaskId,
    },
  })
  if (revision == null) {
    notFound()
  }

  return (
    <RevisionForm
      method="PUT"
      action={`/api/revision/${revisionId}`}
      subtaskId={subtaskId}
      revision={revision}
    />
  )
}
