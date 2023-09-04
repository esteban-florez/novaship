import OfferForm from '@/components/offers-create/OfferForm'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar oferta',
}

export default async function CreateOfferPage() {
  const skills = await prisma.skill.findMany({
    orderBy: {
      title: 'asc',
    },
  })

  const fields = await prisma.field.findMany({
    orderBy: {
      title: 'asc',
    },
  })

  const locations = await prisma.location.findMany()

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
