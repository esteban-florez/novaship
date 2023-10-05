import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import PageContent from '@/components/projects-details/PageContent'
import { getProject } from '@/lib/data-fetching/project'
import { getProjectLeader } from '@/lib/utils/tables'

export const metadata: Metadata = {
  title: 'Detalles de proyecto',
}

// TODO -> pasar la query a data-fetching
export default async function ProjectPage({ params: { id } }: PageContext) {
  const { id: userId } = await auth.user()

  if (id === null) {
    notFound()
  }

  const project = await getProject({ id })

  if (project === null) {
    notFound()
  }

  const isLeader = (project.personId ?? project.team?.leader.companyId ?? project.team?.leader.personId) === userId
  const isMember = (project.personId ?? project.team?.memberships.find(member => member.personId === userId)) === userId

  return (
    <PageContent
      isOwner={isLeader}
      isMember={isMember}
      project={project}
    />
  )
}
