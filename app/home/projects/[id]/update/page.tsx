import prisma from '@/prisma/client'
import { type GetServerSidePropsContext } from 'next'
import { redirect } from 'next/navigation'
// import { auth } from '@/lib/auth/pages'

export default async function UpdateProjectPage({ params }: GetServerSidePropsContext) {
  // const activeUser = await auth.person()
  const id = params?.id as string

  if (id === null) {
    redirect('/home/projects')
  }

  const project = await prisma.project.findUnique({
    where: {
      id,
    },
    include: {
      person: true,
      memberships: {
        include: {
          person: true,
        },
      },
    },
  })

  if (project === null) {
    redirect('/home/projects')
  }

  return <h2>{project.person?.name}</h2>
}
