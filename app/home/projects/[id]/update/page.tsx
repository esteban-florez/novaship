import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import ProjectForm from '@/components/projects/ProjectForm'

export const metadata: Metadata = {
  title: 'Actualizar Proyecto',
}

interface Context {
  params: {
    id: string
  }
}

// TODO -> redirect if not owner.
export default async function UpdateProjectPage({ params: { id } }: Context) {
  const activeUser = await auth.user()

  if (id === null) redirect('/home/projects')

  // DRY 5
  const project = await prisma.project.findFirst({
    where: { id },
    include: {
      categories: {
        select: {
          id: true,
          title: true,
        },
      },
      team: {
        include: {
          memberships: {
            include: {
              person: {
                select: {
                  id: true,
                  name: true,
                },
              },
              company: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  })

  // DRY project validation
  if (project === null) {
    redirect('/home/projects')
  }
  const isOwner = project.team.memberships.some(member => (member.companyId ?? member.personId) === activeUser.id && member.isLeader)

  if (!isOwner) {
    redirect('/home/projects')
  }

  const categories = await prisma.category.findMany({
    orderBy: {
      title: 'asc',
    },
  })

  const teams = await prisma.team.findMany({
    where: {
      memberships: {
        some: {
          OR: [
            { companyId: activeUser.id },
            { personId: activeUser.id },
          ],
        },
      },
    },
    include: {
      memberships: true,
    },
  })

  return (
    <ProjectForm
      method="PUT"
      action={`/api/projects/${id}`}
      categories={categories}
      teams={teams}
      project={project}
      cancelRedirect={`/home/projects/${id}`}
    />
  )
}
