import PageContent from '@/components/offers-details/PageContent'
import { auth } from '@/lib/auth/pages'
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
  const activeUser = await auth.user()

  const offer = await prisma.offer.findFirst({
    where: { id },
    include: {
      company: {
        select: {
          description: true,
          name: true,
        },
      },
      categories: {
        select: {
          title: true,
        },
      },
      skills: {
        select: {
          id: true,
          title: true,
        },
      },
      location: {
        select: {
          title: true,
        },
      },
      hiring: {
        select: {
          id: true,
          personId: true,
          status: true,
          person: {
            select: {
              name: true,
            },
          },
          interviews: true,
        },
      },
    },
  })

  console.log(offer?.hiring.map(hiring => hiring.interviews))

  if (offer === null) {
    redirect('/home/offers')
  }

  return (
    <PageContent
      offer={offer}
      userId={activeUser.id}
    />
  )
}
