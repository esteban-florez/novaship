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
  const activeUser = await auth.user()

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
      company: true,
      memberships: {
        where: {
          deletedAt: null,
        },
        include: {
          person: true,
        },
      },
      fields: true,
      tasks: {
        where: {
          deletedAt: null,
        },
        include: {
          subtasks: {
            where: {
              deletedAt: null,
            },
          },
          participations: {
            where: {
              deletedAt: null,
            },
          },
        },
      },
    },
  })

  if (project === null) {
    redirect('/home/projects')
  }

  const isOwner = activeUser.id === project.personId || activeUser.id === project.companyId

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

  return <PageContent isOwner={isOwner} project={project} persons={persons} />
}
