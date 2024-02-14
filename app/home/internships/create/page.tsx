import PageTitle from '@/components/PageTitle'
import { auth } from '@/lib/auth/pages'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { param } from '@/lib/utils/search-params'
import InternshipForm from '@/components/internships/form-pages/InternshipForm'
import PersonCard from '@/components/internships/form-pages/PersonCard'
import InternshipFormLayout from '@/components/internships/form-pages/InternshipFormLayout'
import { tooltip } from '@/lib/tooltip'

export const metadata = {
  title: 'Inscribir pasante',
}

export default async function CreateInternshipPage({
  searchParams,
}: SearchParamsProps) {
  const { type } = await auth.user()
  if (type !== 'INSTITUTE') {
    notFound()
  }

  const personId = param(searchParams.person) ?? ''
  const person = await prisma.person.findUnique({
    where: { id: personId },
    include: {
      location: true,
    },
  })

  if (person === null) {
    notFound()
  }

  const grades = await prisma.grade.findMany()
  const categories = await prisma.category.findMany()

  return (
    <>
      <PageTitle
        title="Inscribir pasante"
        subtitle={tooltip.internship_create}
      />
      <section className="flex flex-col gap-2 p-4 lg:flex-row lg:items-start">
        <InternshipFormLayout>
          <InternshipForm
            categories={categories}
            grades={grades}
            personId={person.id}
            url="/home/internships"
          />
        </InternshipFormLayout>
        <PersonCard
          person={person}
          page="create"
        />
      </section>
    </>
  )
}
