import { type TeamsFull } from '@/lib/types'
import Card from '../Card'
import { belongsToTeam, getTeamLeader } from '@/lib/utils/tables'
import EmptyContent from '../EmptyContent'

interface Props {
  teams: TeamsFull[]
  userId: string
}

export default function TeamsList({ userId, teams }: Props) {
  if (teams.length === 0) {
    return (
      <EmptyContent
        title="No encontramos nada..."
        className="sm:w-2/4"
      >
        No hay equipos registrados en esta categoría o por ese nombre
      </EmptyContent>
    )
  }

  return (
    <div className="mt-4 mx-auto mb-4 w-full columns-1 gap-4 rounded-lg p-4 pt-1 md:columns-2 lg:columns-3 xl:rounded-tl-none xl:px-6">
      {teams.map((team) => {
        const leader = getTeamLeader(team)
        const member = belongsToTeam(team, userId)
        let teamwork

        if (leader.id === userId) teamwork = 'Líder de equipo'
        if (member) teamwork = 'Miembro de equipo'

        return (
          <div
            key={team.id}
            className="mb-4 break-inside-avoid"
          >
            <div className="rounded-xl border border-solid border-zinc-300 bg-white shadow">
              <Card
                title={team.name}
                description={team.description}
                link={`/home/teams/${team.id}`}
                code={team.code}
                tag={teamwork}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
