import OfferForm from '@/components/offers/OfferForm'
import { auth } from '@/lib/auth/pages'
import { getMyOffer } from '@/lib/data-fetching/offer'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Actualizar oferta',
}

export default async function UpdateOfferPage({ params: { id } }: PageContext) {
  const { id: userId, type } = await auth.user()
  if (type !== 'COMPANY') {
    notFound()
  }

  const offer = await getMyOffer({ id, userId })

  if (offer === null) {
    notFound()
  }

  const locations = await prisma.location.findMany()
  const skills = await prisma.skill.findMany({ orderBy: { title: 'asc' } })
  const categories = await prisma.category.findMany({
    orderBy: { title: 'asc' },
  })
  const jobs = await prisma.job.findMany({ orderBy: { title: 'asc' } })

  return (
    <OfferForm
      method="PUT"
      action={`/api/offers/${id}`}
      jobs={jobs}
      categories={categories}
      skills={skills}
      locations={locations}
      offer={offer}
    />
  )
}
