import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import InfoUser from '@/components/offers-details/InfoUser'
import AvatarIcon from '@/components/AvatarIcon'
import { getTeamLeader, getMember } from '@/lib/utils/tables'
import Link from 'next/link'
import { type Grade, type Person } from '@prisma/client'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { getTeam } from '@/lib/data-fetching/teams'
import InlineList from '@/components/InlineList'

export const metadata: Metadata = {
  title: 'Equipos de trabajo',
}

export default async function TeamPage({ params: { id } }: PageContext) {
  const team = await getTeam(id)

  const { categories, memberships, projects } = team
  const leaderMembership = getTeamLeader(team)
  const leader = getMember(leaderMembership)
  // TODO -> algoritmo de proyecto destacado
  const publicProjects = projects.filter(project => project.visibility === 'PUBLIC')
  const featuredProject = publicProjects[0]

  const location = await prisma.location.findUniqueOrThrow({
    where: { id: leader.locationId },
  })

  return (
    <section className="flex flex-wrap items-start gap-4 p-4 lg:flex-nowrap">
      <div className="rounded-md bg-white p-4 shadow lg:w-2/3">
        <h1 className="mb-0 text-2xl font-bold">{team.name}</h1>
        <InlineList items={categories.map(({ title }) => title)} />
        <p className="mt-3 line-clamp-2">{team.description}</p>
        <div className="mt-4 flex flex-col gap-2 md:flex-row">
          <Link href="/home/teams" className="btn-neutral btn">
            <ArrowLeftIcon className="h-5 w-5" />
            Volver al listado
          </Link>
          <button className="btn-primary btn">
            <BriefcaseIcon className="h-5 w-5" />
            Contratar equipo
          </button>
        </div>
        <div className="divider divider-vertical my-2" />
        <div className="flex flex-col lg:grid lg:grid-cols-[15rem_3rem_1fr]">
          <div>
            <div className="flex items-center justify-between pb-2">
              <h2 className="pl-2 text-lg font-semibold">
                Miembros ({memberships.length - 1})
              </h2>
              <Link href={`/home/teams/${team.id}/memberships`} className="text-sm font-semibold text-primary underline transition-all">
                Ver todos
              </Link>
            </div>
            <ul className="flex flex-col gap-2">
              {memberships.slice(0, 4).map(membership => {
                if (membership.isLeader) return undefined

                const member = getMember(membership) as Person & {
                  grades: Grade[]
                }

                return (
                  <Link href={`/home/users/${member.id}`} className="group flex items-center gap-1 rounded-lg border-2 border-neutral-300 p-2 transition-colors hover:border-primary" key={member.id}>
                    <AvatarIcon username={member.name} image={member.image} />
                    <div className="flex flex-col">
                      <p className="font-semibold transition-colors group-hover:text-primary">{member.name}</p>
                      {member.grades.length > 0 && <span className="-mt-1 text-sm">{member.grades[0].title}</span>}
                    </div>
                  </Link>
                )
              })}
            </ul>
          </div>
          <div className="divider divider-vertical my-2 lg:divider-horizontal" />
          <div>
            <div className="flex items-center justify-between pb-2">
              <h2 className="pl-2 text-lg font-semibold">
                Proyectos ({publicProjects.length})
              </h2>
              {projects.length > 0 && (
                <Link href={`/home/teams/${team.id}/projects`} className="text-sm font-semibold text-primary underline transition-all">
                  Ver todos
                </Link>
              )}
            </div>
            <ul className="flex flex-col gap-2">
              {featuredProject !== undefined
                ? (
                  <div className="rounded-lg border border-l-4 border-neutral-300 border-l-primary p-3 shadow-md">
                    <h3 className="text-lg font-semibold">{featuredProject.title}</h3>
                    <p className="line-clamp-2 text-sm">{featuredProject.description}</p>
                    <Link className="btn-primary btn-sm btn mt-2" href={`/home/projects/${featuredProject.id}`}>
                      Ver detalles
                    </Link>
                  </div>
                  )
                : (
                  <div className="flex h-full flex-col items-center justify-center pt-5">
                    <img className="w-44" src="/empty.webp" alt="Ilustración, dos personas sostienen una caja vacía." />
                    <p className="mt-4">¡Nada que mostrar!</p>
                  </div>
                  )}
            </ul>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-white p-4 shadow lg:w-1/3">
        <p className="mb-2 text-center font-bold uppercase text-primary">Lider del equipo</p>
        <InfoUser
          avatarInfo
          verification={false}
          owner={leader.name}
          description={leader.description}
          location={location.title}
        />
      </div>
    </section>
  )
}
