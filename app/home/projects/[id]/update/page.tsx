import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import ProjectForm from '@/components/projects/ProjectForm'
import { getProject } from '@/lib/data-fetching/project'
import { getMyTeams } from '@/lib/data-fetching/teams'

export const metadata: Metadata = {
  title: 'Actualizar Proyecto',
}

export default async function UpdateProjectPage({ params: { id } }: PageContext) {
  const { id: userId } = await auth.user()

  if (id === null) {
    redirect('/home/projects')
  }

  const project = await getProject({
    id,
    where: {
      team: {
        memberships: {
          some: {
            isLeader: true,
            OR: [
              { companyId: userId },
              { personId: userId },
            ],
          },
        },
      },
    },
  })

  // DRY project validation
  if (project === null) {
    redirect('/home/projects')
  }

  const categories = await prisma.category.findMany({
    select: { id: true, title: true }, orderBy: { title: 'asc' },
  })
  const teams = await getMyTeams({ userId })

  return (
    <ProjectForm
      method="PUT"
      action={`/api/projects/${id}`}
      categories={categories}
      teams={teams}
      project={project}
      backUrl={`/home/projects/${id}`}
    />
  )
}
