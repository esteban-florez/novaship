import { type TeamsFull } from '@/lib/types'
import { includesValue } from '@/lib/utils/text'
import Card from '../Card'

interface Props {
  search: string
  teams: TeamsFull[]
}

export default function TeamsList({ search, teams }: Props) {
  return (
    <div className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg p-4 pt-1 md:columns-2 lg:columns-3 xl:rounded-tl-none xl:px-6">
      {teams.map(team => {
        if (
          (search === '' || includesValue(team.name, search)) ||
          (includesValue(team.description, search))
        ) {
          return (
            <div key={team.id} className="mb-4 break-inside-avoid">
              <div className="rounded-xl border border-solid border-zinc-300 bg-white shadow">
                <Card
                  title={team.name}
                  description={team.description}
                  link={`/home/teams/${team.id}`}
                />
              </div>
            </div>
          )
        }

        return null
      })}
    </div>
  )
}
