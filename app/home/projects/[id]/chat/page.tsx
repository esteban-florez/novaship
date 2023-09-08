// import ChatsBar from '@/components/chats/ChatsBar'
import AvatarIcon from '@/components/AvatarIcon'
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
      team: {
        include: {
          memberships: {
            include: {
              company: {
                select: {
                  id: true,
                  name: true,
                },
              },
              person: {
                select: {
                  id: true,
                  name: true,
                },
              },
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
      {/* esto es para guiarme */}

      {/* guia de canales como discord? */}
      <div className="w-full bg-white p-2 shadow-lg sm:w-2/6 sm:max-w-xs xl:max-w-xl">
        <div className="flex items-center justify-start gap-2">
          <AvatarIcon username="Joseph Monter" className="h-10 w-10 bg-neutral text-white" />
          <h3 className="text-base font-semibold sm:text-xl">
            {project.title}
          </h3>
        </div>
        <div className="divider my-1" />
        <div className="flex flex-col gap-3 px-2">
          <span>Canal 1</span>
          <span>Canal 2</span>
          <span>Canal 3</span>
        </div>
      </div>

      {/* chat */}
      <CurrentChat project={project} />

      {/* miembros, no se si poner solo los iconos de los miembros o directamente quitarlo */}
      {/* <ChatsBar isOwner={isOwner} project={project} /> */}
    </section>
  )
}
