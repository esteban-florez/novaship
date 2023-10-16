import InfoUser from '@/components/offers-details/InfoUser'
import { getTeam } from '@/lib/data-fetching/teams'
import { getMember } from '@/lib/utils/tables'
import { type Company, type Person, type Location } from '@prisma/client'
import TeamsTitle from '@/components/teams/TeamsTitle'
import clsx from 'clsx'
import EmptyContent from '@/components/EmptyContent'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import prisma from '@/prisma/client'

export const metadata: Metadata = {
  title: 'Miembros del equipo',
}

export default async function TeamMembershipsPage({ params: { id } }: PageContext) {
  const team = await getTeam(id)
  const { memberships } = team
  const leader = team.leader.company ?? team.leader.person

  if (leader === null) {
    notFound()
  }

  const location = await prisma.location.findUnique({ where: { id: leader.locationId } })

  if (location === null) {
    notFound()
  }

  return (
    <>
      <TeamsTitle
        title="Miembros del equipo"
        team={team}
      />
      <section className="grid grid-cols-1 gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
        {memberships.length > 0
          ? (
            <>
              <div key={leader.id} className={clsx('card card-body bg-white shadow')}>
                <div className="absolute right-0 top-0 flex w-full justify-center rounded-t-lg bg-primary">
                  <p className="text-center font-semibold uppercase text-white">
                    Líder de equipo
                  </p>
                </div>
                <InfoUser
                  verification={false}
                  owner={leader.name}
                  description={leader.description}
                  location={location.title}
                />
              </div>
              {
                  memberships.map(membership => {
                    const member = getMember(membership) as (Person | Company) & {
                      location: Location
                    }

                    return (
                      <div key={membership.id} className={clsx('card card-body bg-white shadow')}>
                        <InfoUser
                          verification={false}
                          owner={member.name}
                          description={member.description}
                          location={member.location.title}
                        />
                      </div>
                    )
                  })
                }
            </>
            )
          : (
            <EmptyContent title="¡Nada que mostrar!">
              Este equipo no ha creado ningún proyecto aún.
            </EmptyContent>
            )}
      </section>
    </>
  )
}
