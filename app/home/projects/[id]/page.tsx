import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import PageContent from '@/components/projects-details/PageContent'

export const metadata: Metadata = {
  title: 'Detalles de proyecto',
}

// TODO -> pasar la query a data-fetching
export default async function ProjectPage({ params: { id } }: PageContext) {
  const activeUser = await auth.user()

  if (id === null) {
    notFound()
  }

  const project = await prisma.project.findFirst({
    where: { id },
    include: {
      team: {
        include: {
          memberships: {
            include: {
              person: true,
            },
          },
        },
      },
      categories: true,
      files: {
        include: {
          membership: {
            include: {
              participations: true,
            },
          },
        },
      },
      tasks: {
        include: {
          subtasks: true,
          participations: true,
        },
      },
    },
  })

  if (project === null) {
    notFound()
  }

  const isOwner = project.team.memberships.some(member => (member.companyId ?? member.personId) === activeUser.id && member.isLeader)
  const isMember = project.team.memberships.some(member => (member.companyId ?? member.personId) === activeUser.id)

  return <PageContent isOwner={isOwner} isMember={isMember} project={project} />
}
