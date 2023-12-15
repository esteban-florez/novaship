import PageTitle from '@/components/PageTitle'
import OfferForm from '@/components/offers/OfferForm'
import { tooltip } from '@/lib/tooltip'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar oferta',
}

export default async function CreateOfferPage() {
  const skills = await prisma.skill.findMany({ orderBy: { title: 'asc' } })
  const categories = await prisma.category.findMany({
    orderBy: { title: 'asc' },
  })
  const jobs = await prisma.job.findMany({ orderBy: { title: 'asc' } })
  const locations = await prisma.location.findMany()

  return (
    <>
      <PageTitle
        title="Registrar nueva oferta"
        subtitle={tooltip.offer_create}
      />
      <OfferForm
        categories={categories}
        skills={skills}
        locations={locations}
        jobs={jobs}
        method="POST"
        action="/api/offers"
      />
    </>
  )
}
