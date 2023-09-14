import InfoUser from '@/components/offers-details/InfoUser'
import { getTeam } from '@/lib/data-fetching/teams'
import { getMember } from '@/lib/utils/tables'
import { type Company, type Person, type Location, type Membership } from '@prisma/client'
import TeamsTitle from '@/components/teams/TeamsTitle'
import clsx from 'clsx'
import EmptyContent from '@/components/EmptyContent'

export default async function TeamMembershipsPage({ params: { id } }: PageContext) {
  const team = await getTeam(id)
  const { memberships } = team

  function leaderFirst(a: Membership, b: Membership) {
    if (a.isLeader) return -1
    if (b.isLeader) return 1
    return 0
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
              memberships.sort(leaderFirst).map(membership => {
                const member = getMember(membership) as (Person | Company) & {
                  location: Location
                }
                const { isLeader } = membership

                return (
                  <div key={membership.id} className={clsx('card card-body bg-white shadow')}>
                    {isLeader && (
                      <div className="absolute right-0 top-0 flex w-full justify-center rounded-t-lg bg-primary">
                        <p className="text-center font-semibold uppercase text-white">
                          Líder de equipo
                        </p>
                      </div>
                    )}
                    <InfoUser
                      avatarInfo
                      verification={false}
                      owner={member.name}
                      description={member.description}
                      location={member.location.title}
                    />
                  </div>
                )
              })
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
