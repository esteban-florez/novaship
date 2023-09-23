import ProjectForm from '@/components/projects/ProjectForm'
import { auth } from '@/lib/auth/pages'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar proyecto',
}

export default async function CreateProjectPage() {
  const { id } = await auth.user()

  const categories = await prisma.category.findMany()
  const teams = await prisma.team.findMany({
    where: {
      memberships: {
        some: {
          isLeader: true,
          OR: [
            { companyId: id },
            { personId: id },
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
      action="/api/projects"
      method="POST"
      categories={categories}
      teams={teams}
      cancelRedirect="/home/projects"
    />
  )
}
