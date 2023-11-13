import ProjectForm from '@/components/projects/ProjectForm'
import { auth } from '@/lib/auth/pages'
import { getMyTeams } from '@/lib/data-fetching/teams'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Registrar proyecto',
}

export default async function CreateProjectPage() {
  const { id: userId, type } = await auth.user()

  const categories = await prisma.category.findMany({
    select: { id: true, title: true },
  })
  const teams = await getMyTeams({ userId })

  if (type === 'COMPANY' && teams.length === 0) {
    redirect('/home/projects?alert=project_team_required')
  }

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
