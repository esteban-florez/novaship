import InfoUser from '@/components/offers-details/InfoUser'
import { getTeam } from '@/lib/data-fetching/teams'
import { getMember } from '@/lib/utils/tables'
import { type Company, type Person, type Location } from '@prisma/client'
import clsx from 'clsx'
import EmptyContent from '@/components/EmptyContent'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import prisma from '@/prisma/client'
import ThreeGrid from '@/components/ThreeGrid'
import { auth } from '@/lib/auth/pages'
import PageTitle from '@/components/PageTitle'
import { getInvitations } from '@/lib/data-fetching/invitation'
import InvitationsTable from './InvitationsTable'
import { tooltip } from '@/lib/tooltip'

export const metadata: Metadata = {
  title: 'Miembros del equipo',
}

export default async function TeamMembershipsPage({
  params: { id },
}: PageContext) {
  const { id: userId } = await auth.user()
  const team = await getTeam(id)
  const { memberships } = team
  const leader = team.leader.company ?? team.leader.person
  const invitations = await getInvitations({
    where: {
      teamId: id,
      status: 'PENDING',
    },
  })

  if (leader === null) {
    notFound()
  }

  const location = await prisma.location.findUnique({
    where: { id: leader.locationId },
  })

  if (location === null) {
    notFound()
  }

  return (
    <>
      <PageTitle
        title="Miembros del equipo"
        subtitle={tooltip.team_id_members}
        breadcrumbs={team.name}
      />
      {leader.id === userId && invitations.length > 0 && (
        <div className="sm:m-8 overflow-x-auto rounded-lg bg-white p-2 border border-zinc-300">
          <h2 className="mb-2 text-center text-xl font-semibold">
            Solicitudes
          </h2>
          <InvitationsTable invitations={invitations} />
        </div>
      )}
      <ThreeGrid>
        {memberships.length > 0
          ? (
            <>
              {leader.id === userId && (
                <h6 className="col-span-full text-xl font-semibold text-neutral-600">
                  Plantilla
                </h6>
              )}
              <div
                key={leader.id}
                className={clsx('card card-body bg-white shadow')}
              >
                <div className="absolute right-0 top-0 flex w-full justify-center rounded-t-lg bg-primary">
                  <p className="text-center font-semibold uppercase text-white">
                    Líder de equipo
                  </p>
                </div>
                <InfoUser
                  image={leader.image}
                  verification={false}
                  owner={userId === leader.id ? 'Tú' : leader.name}
                  description={leader.description}
                  location={location.title}
                />
              </div>
              {memberships.map((membership) => {
                const member = getMember(membership) as (Person | Company) & {
                  location: Location
                }

                return (
                  <div
                    key={membership.id}
                    className={clsx('card card-body bg-white shadow')}
                  >
                    <InfoUser
                      image={member.image}
                      verification={false}
                      owner={userId === member.id ? 'Tú' : member.name}
                      description={member.description}
                      location={member.location.title}
                    />
                  </div>
                )
              })}
            </>
            )
          : (
            <div className="col-span-full">
              <EmptyContent title="¡Nada que mostrar!">
                Este equipo aún no tiene miembros.
              </EmptyContent>
            </div>
            )}
      </ThreeGrid>
    </>
  )
}
