import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import ProjectForm from '@/components/projects/ProjectForm'
import { getMyProject } from '@/lib/data-fetching/project'
import { getMyTeams } from '@/lib/data-fetching/teams'

export const metadata: Metadata = {
  title: 'Actualizar proyecto',
}

export default async function UpdateProjectPage({
  params: { id },
}: PageContext) {
  const { id: userId, type } = await auth.user()

  if (id === null) {
    notFound()
  }

  const project = await getMyProject({ id, userId })
  if (project === null) {
    notFound()
  }

  const categories = await prisma.category.findMany({
    select: { id: true, title: true },
    orderBy: { title: 'asc' },
  })
  const teams = await getMyTeams({ userId })

  return (
    <ProjectForm
      method="PUT"
      action={`/api/projects/${id}`}
      categories={categories}
      teams={teams}
      project={project}
      userType={type}
    />
  )
}
