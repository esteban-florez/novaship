import ChatsBar from '@/components/chats/ChatsBar'
import CurrentChat from '@/components/chats/CurrentChat'
import { auth } from '@/lib/auth/pages'
import prisma from '@/prisma/client'
import { redirect } from 'next/navigation'

interface Context {
  params: { id: string }
}

export default async function ChatsPage({ params: { id } }: Context) {
  const activeUser = await auth.user()

  if (id === null) {
    redirect('/home/projects')
  }

  const project = await prisma.project.findFirst({
    where: { id },
    include: {
      person: true,
      company: true,
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

  const isOwner = activeUser.id === project.personId || activeUser.id === project.companyId

  return (
    <section className="chat-height flex w-full px-8 pb-8 pt-6">
      <CurrentChat />
      <ChatsBar isOwner={isOwner} project={project} />
    </section>
  )
}
