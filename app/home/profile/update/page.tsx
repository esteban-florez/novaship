import CompanyForm from '@/components/profile/forms/CompanyForm'
import PersonForm from '@/components/profile/forms/PersonForm'
import { auth } from '@/lib/auth/pages'
import { getUserProfileDataUpdate } from '@/lib/data-fetching/profile'
import prisma from '@/prisma/client'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

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

  if (type === 'PERSON') {
    const person = await getUserProfileDataUpdate({ id })

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

  if (type === 'COMPANY') {
    const company = await prisma.company.findUniqueOrThrow({
      where: { id },
    })

    return (
      <CompanyForm
        company={company}
        locations={locations}
      />
    )
  }

  redirect('/home')
}
