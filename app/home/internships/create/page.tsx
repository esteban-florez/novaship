import PageTitle from '@/components/PageTitle'
import InfoUser from '@/components/offers-details/InfoUser'
import { auth } from '@/lib/auth/pages'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { param } from '@/lib/utils/search-params'
import InternshipForm from './InternshipForm'
import FormSection from '@/components/forms/FormSection'
import Link from 'next/link'

export default async function CreateInternshipPage({ searchParams }: SearchParamsProps) {
  const { type } = await auth.user()
  if (type !== 'INSTITUTE') {
    notFound()
  }

  const personId = param(searchParams.person)
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
        subtitle="Inscribe un nuevo estudiante como pasante de tu institución."
      />
      <section className="flex flex-col gap-2 p-4 lg:flex-row lg:items-start">
        <div className="rounded-lg bg-white p-4 shadow-md lg:w-2/3">
          <FormSection title="Datos de la pasantía" description="Ingresa la duración de la pasantía en horas, la carrera y las categorías a las que pertenece.">
            <InternshipForm
              categories={categories}
              grades={grades}
              personId={person.id}
            />
          </FormSection>
        </div>
        <div className="flex flex-col rounded-lg bg-white p-3 shadow-md lg:w-1/3">
          <h3 className="mb-4 rounded-lg text-center text-xl font-bold tracking-tight text-primary">
            Estudiante a inscribir:
          </h3>
          <InfoUser
            owner={person.name}
            description={person.description}
            location={person.location.title}
            verification={false}
          />
          <Link className="btn btn-secondary" href={`/home/persons/${person.id}`}>
            Ver perfil
          </Link>
        </div>
      </section>
    </>
  )
}
