import PageTitle from '@/components/PageTitle'
import FormLayout from '@/components/forms/FormLayout'
import VacantForm from './VacantForm'
import prisma from '@/prisma/client'

export const metadata = {
  title: 'Publicar cupos',
}

export default async function CreateVacantPage() {
  const categories = await prisma.category.findMany()
  const locations = await prisma.location.findMany()
  const skills = await prisma.skill.findMany()
  const grades = await prisma.grade.findMany()
  const jobs = await prisma.job.findMany()

  return (
    <>
      <PageTitle
        title="Publicar cupos"
        subtitle="Registra un nuevo cupo para pasantes en tu empresa."
      />
      <FormLayout title="Registrar nuevo cupo" require>
        <VacantForm
          categories={categories}
          locations={locations}
          grades={grades}
          skills={skills}
          jobs={jobs}
        />
      </FormLayout>
    </>
  )
}
