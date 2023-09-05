import ProjectForm from '@/components/projects/ProjectForm'
import { auth } from '@/lib/auth/pages'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Registrar proyecto',
}

export default async function CreateProjectPage() {
  const activeUser = await auth.user()

  const categories = await prisma.category.findMany()
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

  const myTeams = teams.filter(team => {
    return team.memberships.find(member => (member.companyId ?? member.personId) === activeUser.id && member.isLeader)
  })

  if (myTeams.length <= 0) {
    redirect('/home/projects')
  }

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
