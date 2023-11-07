import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import InfoUser from '@/components/offers-details/InfoUser'
import AvatarIcon from '@/components/AvatarIcon'
import { getMember } from '@/lib/utils/tables'
import Link from 'next/link'
import { type Grade, type Person } from '@prisma/client'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { getTeam } from '@/lib/data-fetching/teams'
import InlineList from '@/components/InlineList'
import Collapse from '@/components/Collapse'
import AvatarInfo from '@/components/offers-details/AvatarInfo'
import PageTitle from '@/components/PageTitle'
import { notFound } from 'next/navigation'
import GoBackBtn from '@/components/GoBackBtn'

export const metadata: Metadata = {
  title: 'Equipo de trabajo',
}

export default async function TeamPage({ params: { id } }: PageContext) {
  const team = await getTeam(id)

  const { categories, memberships, projects } = team
  // TODO -> algoritmo de proyecto destacado
  const publicProjects = projects.filter(
    (project) => project.visibility === 'PUBLIC'
  )
  const featuredProject = publicProjects[0]

  // TODO -> getTeamLeader function update
  const leaderMembership = team.leader.company ?? team.leader.person

  if (leaderMembership === null) {
    notFound()
  }

  const location = await prisma.location.findUniqueOrThrow({
    where: { id: leaderMembership.locationId },
  })

  return (
    <>
      <PageTitle
        title="Equipo de trabajo"
        breadcrumbs={team.name}
      />
      <section className="flex flex-wrap items-start gap-4 p-4 lg:flex-nowrap">
        <div className="flex w-full flex-col gap-3 lg:w-2/3">
          <div className="w-full rounded-md bg-white p-4 shadow-md">
            <h1 className="mb-0 text-2xl font-bold">{team.name}</h1>
            <InlineList items={categories.map(({ title }) => title)} />
            <p className="mt-3 line-clamp-2">{team.description}</p>
            <div className="mt-4 flex flex-col justify-between gap-2 md:flex-row">
              <GoBackBtn label="Volver al listado" />
              <button className="btn-primary btn">
                <BriefcaseIcon className="h-5 w-5" />
                Contratar equipo
              </button>
            </div>
          </div>
          <div className="block lg:hidden">
            <Collapse
              title={
                <AvatarInfo
                  owner={leaderMembership.name}
                  location={location.title}
                />
              }
            >
              <InfoUser
                verification={false}
                owner={leaderMembership.name}
                description={leaderMembership.description}
                location={location.title}
              />
            </Collapse>
          </div>
          <div className="rounded-md bg-white p-4 shadow-md">
            <div className="flex items-center justify-between pb-2">
              <h2 className="pl-2 text-lg font-semibold">
                Proyectos ({publicProjects.length})
              </h2>
              {projects.length > 0 && (
                <Link
                  href={`/home/teams/${team.id}/projects`}
                  className="text-sm font-semibold text-primary underline transition-all"
                >
                  Ver todos
                </Link>
              )}
            </div>
            {featuredProject !== undefined
              ? (
                <div className="rounded-lg border border-l-4 border-neutral-300 border-l-primary p-3 shadow-md">
                  <h3 className="text-lg font-semibold">
                    {featuredProject.title}
                  </h3>
                  <p className="line-clamp-2 text-sm">
                    {featuredProject.description}
                  </p>
                  <Link
                    className="btn-primary btn-sm btn mt-2"
                    href={`/home/projects/${featuredProject.id}`}
                  >
                    Ver detalles
                  </Link>
                </div>
                )
              : (
                <div className="flex h-full flex-col items-center justify-center pt-4">
                  <img
                    className="w-48"
                    src="/empty.webp"
                    alt="Ilustración, dos personas sostienen una caja vacía."
                  />
                  <p className="mt-4 text-xl font-semibold text-neutral-500">
                    ¡Nada que mostrar!
                  </p>
                </div>
                )}
          </div>
        </div>
        <div className="flex w-full flex-col gap-3 lg:w-1/3">
          <div className="hidden rounded-md bg-white p-4 shadow-md lg:block">
            <p className="mb-3 border-0 border-b-2 border-secondary text-center text-xl font-bold uppercase text-secondary">
              Lider del equipo
            </p>
            <InfoUser
              verification={false}
              owner={leaderMembership.name}
              description={leaderMembership.description}
              location={location.title}
            />
          </div>
          <div className="flex flex-col rounded-md bg-white p-4 shadow-md first-letter:w-full">
            <div className="flex items-center justify-between pb-2">
              <h2 className="pl-2 text-lg font-semibold">
                Miembros ({memberships.length})
              </h2>
              <Link
                href={`/home/teams/${team.id}/memberships`}
                className="text-sm font-semibold text-primary underline transition-all"
              >
                Ver todos
              </Link>
            </div>
            <ul className="flex flex-col gap-2">
              {memberships.slice(0, 4).map((membership) => {
                const member = getMember(membership) as Person & {
                  grades: Grade[]
                }

                return (
                  <Link
                    href={`/home/users/${member.id}`}
                    className="group flex items-center gap-1 rounded-lg border-2 border-neutral-300 p-2 transition-colors hover:border-primary"
                    key={member.id}
                  >
                    <AvatarIcon image={member.image} />
                    <div className="flex flex-col">
                      <p className="font-semibold transition-colors group-hover:text-primary">
                        {member.name}
                      </p>
                      {member.grades.length > 0 && (
                        <span className="-mt-1 text-sm">
                          {member.grades[0].title}
                        </span>
                      )}
                    </div>
                  </Link>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
