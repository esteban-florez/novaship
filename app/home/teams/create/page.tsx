import PageTitle from '@/components/PageTitle'
import FormLayout from '@/components/forms/FormLayout'
import CreateTeamForm from '@/components/teams-create/CreateTeamForm'
import { auth } from '@/lib/auth/pages'
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
        subtitle="Rellena los datos para crear un nuevo equipo, e invita a los demás usuarios a formar parte de él."
      />
      <FormLayout title="Información del equipo">
        <CreateTeamForm
          persons={persons}
          categories={categories}
        />
      </FormLayout>
    </>
  )
}
