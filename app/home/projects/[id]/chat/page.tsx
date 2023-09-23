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
      tasks: true,
      team: {
        include: {
          memberships: {
            include: {
              company: true,
              person: true,
              messages: true,
            },
          },
        },
      },
    },
  })

  if (project === null) {
    redirect('/home/projects')
  }
  const isMember = project.team.memberships.some(member => (member.companyId ?? member.personId) === activeUser.id)

  if (!isMember) {
    redirect('/home/projects')
  }

  // TODO -> re-estilar el chat
  return (
    <section className="chat-height flex w-full px-6 py-4">
      <ChatsBar
        project={project}
        activeUser={activeUser}
        isMember={isMember}
      />

      <CurrentChat project={project} />
    </section>
  )
}
