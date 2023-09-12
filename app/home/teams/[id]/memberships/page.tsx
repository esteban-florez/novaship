import PageTitle from '@/components/PageTitle'
import { getTeam } from '@/lib/data-fetching/teams'

export default async function TeamMembershipsPage({ params: { id } }: PageContext) {
  const team = await getTeam(id)

  return (
    <>
      <PageTitle
        title="Miembros del equipo"
        subtitle={{
          label: 'Equipo',
          name: team.name,
          url: `/home/teams/${team.id}`,
        }}
      />
    </>
  )
}
