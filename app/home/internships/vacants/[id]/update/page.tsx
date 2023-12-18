import PageTitle from '@/components/PageTitle'
import FormLayout from '@/components/forms/FormLayout'
import VacantForm from '@/components/vacants/VacantForm'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/pages'
import { getVacant } from '@/lib/data-fetching/vacants'
import { notFound } from 'next/navigation'
import { tooltip } from '@/lib/tooltip'

export const metadata = {
  title: 'Editar cupo',
}

export default async function UpdateVacantPage({
  params: { id },
}: PageContext) {
  const { id: userId } = await auth.user()
  const vacant = await getVacant(id)

  if (vacant === null || vacant.company.id !== userId) {
    notFound()
  }

  const categories = await prisma.category.findMany()
  const locations = await prisma.location.findMany()
  const skills = await prisma.skill.findMany()
  const grades = await prisma.grade.findMany()

  return (
    <>
      <PageTitle
        title="Publicar cupos"
        subtitle={tooltip.internship_vacant_update}
      />
      <FormLayout
        title="Registrar nuevo cupo"
        all
      >
        <VacantForm
          categories={categories}
          locations={locations}
          grades={grades}
          skills={skills}
          vacant={vacant}
          url={`/home/internships/vacants/${id}`}
        />
      </FormLayout>
    </>
  )
}
