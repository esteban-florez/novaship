import PersonForm from '@/components/profile/forms/PersonForm'
import { auth } from '@/lib/auth/pages'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Actualizar perfil',
}

export default async function UpdateProfilePage() {
  const { id, type } = await auth.user()

  const locations = await prisma.location.findMany({
    select: {
      id: true,
      title: true,
    },
  })

  const categories = await prisma.category.findMany({
    select: {
      id: true,
      title: true,
    },
  })

  const skills = await prisma.skill.findMany({
    select: {
      id: true,
      title: true,
    },
  })

  const grades = await prisma.grade.findMany({
    select: {
      id: true,
      title: true,
    },
  })

  if (type === 'PERSON') {
    const person = await prisma.person.findUniqueOrThrow({
      where: { id },
      include: {
        categories: {
          select: {
            id: true,
          },
        },
        grades: {
          select: {
            id: true,
          },
        },
        skills: {
          select: {
            id: true,
          },
        },
        experiences: {
          select: {
            id: true,
            name: true,
            description: true,
            from: true,
            to: true,
            job: {
              select: {
                title: true,
              },
            },
          },
        },
      },
    })

    return (
      <PersonForm
        person={person}
        locations={locations}
        skills={skills}
        categories={categories}
        grades={grades}
      />
    )
  }
}
