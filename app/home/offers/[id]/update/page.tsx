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
    where: {
      id,
      deletedAt: null,
    },
    include: {
      skills: true,
      fields: true,
      company: true,
    },
  })

  const skills = await prisma.skill.findMany({
    where: {
      deletedAt: null,
    },
    orderBy: {
      title: 'asc',
    },
  })

  const fields = await prisma.field.findMany({
    where: {
      deletedAt: null,
    },
    orderBy: {
      title: 'asc',
    },
  })

  const locations = await prisma.location.findMany({
    where: {
      deletedAt: null,
    },
    orderBy: {
      title: 'asc',
    },
  })

  if (offer === null || offer.companyId !== activeUser.id) redirect('/home/offers')

  return (
    <OfferForm
      action={`/api/offers/${id}`}
      method="PUT"
      fields={fields}
      skills={skills}
      locations={locations}
      offer={offer}
    />
  )
}
