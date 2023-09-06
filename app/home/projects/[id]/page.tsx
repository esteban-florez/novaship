import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import PageContent from '@/components/projects-details/PageContent'

export const metadata: Metadata = {
  title: 'Detalles de proyecto',
}

interface Context {
  params: { id: string }
}

export default async function ProjectPage({ params: { id } }: Context) {
  const activeUser = await auth.user()

  if (id === null) {
    redirect('/home/projects')
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
      tasks: {
        include: {
          subtasks: true,
          participations: true,
        },
      },
    },
  })

  if (project === null) {
    redirect('/home/projects')
  }

  const isOwner = project.team.memberships.some(member => (member.companyId ?? member.personId) === activeUser.id && member.isLeader)
  const isMember = project.team.memberships.some(member => (member.companyId ?? member.personId) === activeUser.id)

  return <PageContent isOwner={isOwner} isMember={isMember} project={project} />
}
