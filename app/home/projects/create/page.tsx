import ProjectForm from '@/components/projects/ProjectForm'
import { auth } from '@/lib/auth/pages'
import { getMyTeams } from '@/lib/data-fetching/teams'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar proyecto',
}

export default async function CreateProjectPage() {
  const { id: userId, type } = await auth.user()

  const categories = await prisma.category.findMany({ select: { id: true, title: true } })
  const teams = await getMyTeams({ userId })

  return (
    <ProjectForm
      action="/api/projects"
      method="POST"
      categories={categories}
      teams={teams}
      userType={type}
    />
  )
}
