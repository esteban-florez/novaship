import PageTitle from '@/components/PageTitle'
import FormLayout from '@/components/forms/FormLayout'
import VacantForm from '@/components/vacants/VacantForm'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/pages'
import { notFound } from 'next/navigation'
import { tooltip } from '@/lib/tooltip'

export const metadata = {
  title: 'Publicar cupos',
}

export default async function CreateVacantPage() {
  const { type } = await auth.user()

  if (type !== 'COMPANY') {
    notFound()
  }

  const categories = await prisma.category.findMany()
  const locations = await prisma.location.findMany()
  const skills = await prisma.skill.findMany()
  const grades = await prisma.grade.findMany()
  const jobs = await prisma.job.findMany()

  return (
    <>
      <PageTitle
        title="Publicar cupos"
        subtitle={tooltip.internship_vacant_create}
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
          jobs={jobs}
          url="/home/internships/vacants"
        />
      </FormLayout>
    </>
  )
}
