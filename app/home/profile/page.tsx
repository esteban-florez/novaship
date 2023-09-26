import { auth } from '@/lib/auth/pages'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import PersonProfile from '@/components/profile/PersonProfile'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Mi perfil',
}

export default async function ProfilePage() {
  const { id, type } = await auth.user()

  if (type === 'PERSON') {
    const person = await prisma.person.findFirst({
      where: { id },
      include: {
        categories: {
          select: {
            id: true,
            title: true,
          },
        },
        experiences: {
          select: {
            id: true,
            name: true,
          },
        },
        grades: {
          select: {
            id: true,
            title: true,
          },
        },
        jobs: {
          select: {
            id: true,
            title: true,
          },
        },
        location: {
          select: {
            id: true,
            title: true,
          },
        },
        reviews: true,
        skills: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    })
    return <PersonProfile person={person} />
  }

  redirect('/home')
}
