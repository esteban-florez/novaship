import ChatsBar from '@/components/chats/ChatsBar'
import CurrentChat from '@/components/chats/CurrentChat'
import { auth } from '@/lib/auth/pages'
import prisma from '@/prisma/client'
import { redirect } from 'next/navigation'

export default async function ChatsPage({ params: { id } }: PageContext) {
  const activeUser = await auth.user()

  if (id === null) {
    redirect('/home/projects?alert=project_not_found')
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
    redirect('/home/projects?alert=project_not_found')
  }
  const isMember = project.team.memberships.some(member => (member.companyId ?? member.personId) === activeUser.id)

  if (!isMember) {
    redirect('/home/projects?alert=project_not_member')
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
