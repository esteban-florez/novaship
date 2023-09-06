import { type Metadata } from 'next'
import PageContent from '@/components/teams/PageContent'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/pages'

export const metadata: Metadata = {
  title: 'Equipos de trabajo',
}

export default async function TeamsPage() {
  const activeUser = await auth.user()

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
      memberships: {
        include: {
          person: true,
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  })

  return <PageContent teams={teams} />
}
