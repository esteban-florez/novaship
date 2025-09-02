import ProjectForm from '@/components/projects/ProjectForm'
import { auth } from '@/lib/auth/pages'
import { getMyTeams } from '@/lib/data-fetching/teams'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { url } from '@/lib/utils/url'

export const metadata: Metadata = {
  title: 'Registrar proyecto',
}

export default async function CreateProjectPage() {
  const { id: userId, type } = await auth.user()
  if (type === 'ADMIN' || type === 'INSTITUTE') {
    notFound()
  }

  const categories = await prisma.category.findMany({
    select: { id: true, title: true },
  })
  const teams = await getMyTeams({ userId })

  if (type === 'COMPANY' && teams.length === 0) {
    redirect(url('/home/projects?alert=project_team_required').pathname)
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
