import PageTitle from '@/components/PageTitle'
import InternshipFormLayout from '@/components/internships/form-pages/InternshipFormLayout'
import PersonCard from '@/components/internships/form-pages/PersonCard'
import { auth } from '@/lib/auth/pages'
import { getInternship } from '@/lib/data-fetching/internships'
import { notFound } from 'next/navigation'
import InternshipForm from '../../../../../components/internships/form-pages/InternshipForm'
import prisma from '@/prisma/client'

export async function generateMetadata({ params: { id } }: PageContext) {
  const internship = await getInternship(id)

  if (internship === null) {
    notFound()
  }

  const { person, grade } = internship

  return {
    title: `${person.name} - ${grade.title}`,
  }
}

export default async function UpdateInternshipPage({ params: { id } }: PageContext) {
  const { id: userId } = await auth.user()
  const internship = await getInternship(id)
  if (internship === null ||
    internship.instituteId !== userId ||
    internship.status !== 'PENDING') {
    notFound()
  }

  const categories = await prisma.category.findMany()
  const grades = await prisma.grade.findMany()
  const { grade, person } = internship

  return (
    <>
      <PageTitle
        title="Actualizar pasantía"
        subtitle="Actualiza los datos de la pasantía antes de que sea aceptada por el estudiante."
        breadcrumbs={`${person.name} - ${grade.title}`}
      />
      <section className="flex flex-col gap-2 p-4 lg:flex-row lg:items-start">
        <InternshipFormLayout>
          <InternshipForm
            grades={grades}
            categories={categories}
            internship={internship}
          />
        </InternshipFormLayout>
        <PersonCard person={person} page="update" />
      </section>
    </>
  )
}
