import Details from '@/components/offers-details/Details'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Ver oferta',
}

interface Context {
  params: { id: string }
}

export default async function OfferPage({ params: { id } }: Context) {
  const offer = await prisma.offer.findUnique({
    where: {
      id,
    },
    include: {
      company: true,
    },
  })

  if (offer === null) {
    redirect('/home/offers')
  }

  return (
    <>
      <section className="grid grid-cols-7 gap-4 p-4">
        <Details offer={offer} />
      </section>
    </>
  )
}
