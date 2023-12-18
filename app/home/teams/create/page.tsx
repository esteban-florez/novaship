import PageTitle from '@/components/PageTitle'
import FormLayout from '@/components/forms/FormLayout'
import TeamForm from '@/components/teams/TeamForm'
import { auth } from '@/lib/auth/pages'
import { tooltip } from '@/lib/tooltip'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar equipo',
}

export default async function CreateTeamPage() {
  const { id: userId } = await auth.user()

  const persons = await prisma.person.findMany({
    where: {
      id: {
        not: userId,
      },
    },
  })

  const categories = await prisma.category.findMany({
    select: { id: true, title: true },
  })

  return (
    <>
      <PageTitle
        title="Registrar nuevo equipo"
        subtitle={tooltip.team_create}
      />
      <FormLayout title="Información del equipo">
        <TeamForm
          action="/api/teams"
          method="POST"
          persons={persons}
          categories={categories}
        />
      </FormLayout>
    </>
  )
}
