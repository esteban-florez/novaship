import PageTitle from '@/components/PageTitle'
import FormLayout from '@/components/forms/FormLayout'
import TeamForm from '@/components/teams/TeamForm'
import { auth } from '@/lib/auth/pages'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Actualizar equipo',
}

export default async function UpdateTeamPage({ params: { id } }: PageContext) {
  const { id: userId } = await auth.user()
  const team = await prisma.team.findFirst({
    where: {
      id,
      leader: {
        OR: [{ companyId: userId }, { personId: userId }],
      },
    },
    include: {
      categories: true,
      memberships: {
        include: {
          person: true,
        },
      },
    },
  })

  if (team == null) {
    notFound()
  }

  const categories = await prisma.category.findMany()
  const persons = await prisma.person.findMany({
    where: {
      AND: [
        {
          id: {
            not: userId,
          },
        },
        {
          memberships: {
            some: {
              teamId: {
                not: team.id,
              },
            },
          },
        },
        {
          invitations: {
            none: {
              id: undefined,
              teamId: team.id,
            },
          },
        },
      ],
    },
  })

  return (
    <>
      <PageTitle
        title="Actualizar equipo"
        subtitle="Modifique la información que haya cambiado o desee complementar."
        breadcrumbs={team.name}
      />
      <FormLayout
        title="Información del equipo"
        all
      >
        <TeamForm
          action={`/api/teams/${id}`}
          method="PUT"
          categories={categories}
          persons={persons}
          team={team}
        />
      </FormLayout>
    </>
  )
}
