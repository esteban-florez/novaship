import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import PageContent from '@/components/projects-details/PageContent'

export const metadata: Metadata = {
  title: 'Detalles de Proyecto',
}

interface Context {
  params: { id: string }
}

export default async function ProjectPage({ params: { id } }: Context) {
  const activeUser = await auth.person()

  if (id === null) {
    redirect('/home/projects')
  }

  const project = await prisma.project.findFirst({
    where: {
      id,
      deletedAt: null,
    },
    include: {
      person: true,
      memberships: {
        include: {
          person: true,
        },
      },
      fields: true,
      tasks: {
        include: {
          subtasks: true,
          participations: true,
        },
      },
    },
  })

  if (project === null || project.person === null) {
    redirect('/home/projects')
  }

  // DRY
  const persons = await prisma.person.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
    where: {
      id: {
        notIn: project.memberships.map(member => member.person.id),
      },
    },
    orderBy: {
      name: 'asc',
    },
  })

  return <PageContent owner={activeUser} isOwner={activeUser.id === project.personId} project={project} persons={persons} />
}
