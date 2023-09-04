import OfferForm from '@/components/offers-create/OfferForm'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar oferta',
}

export default async function CreateOfferPage() {
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
  })

  return (
    <OfferForm
      fields={fields}
      skills={skills}
      locations={locations}
      method="POST"
      action="/api/offers"
    />
  )
}
