import OfferForm from '@/components/offers-create/OfferForm'
import { auth } from '@/lib/auth/pages'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Actualizar oferta',
}

interface Context {
  params: {
    id: string
  }
}

export default async function UpdateOfferPage({ params: { id } }: Context) {
  const activeUser = await auth.user()

  const offer = await prisma.offer.findFirst({
    where: { id },
    include: {
      skills: true,
      categories: true,
      company: true,
    },
  })

  const locations = await prisma.location.findMany()
  const skills = await prisma.skill.findMany({ orderBy: { title: 'asc' } })
  const categories = await prisma.category.findMany({ orderBy: { title: 'asc' } })
  const jobs = await prisma.job.findMany({ orderBy: { title: 'asc' } })

  if (offer === null || offer.companyId !== activeUser.id) {
    redirect('/home/offers')
  }

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
