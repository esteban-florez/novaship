import PageTitle from '@/components/PageTitle'
import OfferForm from '@/components/offers-create/OfferForm'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar oferta',
}

export default async function CreateOfferPage() {
  const skills = await prisma.skill.findMany({ orderBy: { title: 'asc' } })
  const categories = await prisma.category.findMany({ orderBy: { title: 'asc' } })
  const jobs = await prisma.job.findMany({ orderBy: { title: 'asc' } })
  const locations = await prisma.location.findMany()

  return (
    <>
      <PageTitle title="Registrar nueva oferta" subtitle="Rellena los datos para crear o actualizar una nueva oferta e indica su alcance y habilidades requeridas." />
      <OfferForm
        categories={categories}
        skills={skills}
        locations={locations}
        jobs={jobs}
        method="POST"
        action="/api/offers"
        backUrl="/home/offers"
      />
    </>
  )
}
