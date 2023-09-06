import { type Membership, type Person, type Team } from '@prisma/client'
import Card from '../Card'

interface Props {
  teams: Array<Team & {
    memberships: Array<Membership & {
      person: Person | null
    }>
  }>
}

export default function PageContent({ teams }: Props) {
  return (
    <section className="mx-auto w-full columns-1 gap-4 rounded-lg p-4
      md:columns-2 lg:columns-3 xl:rounded-tl-none"
    >
      {teams.map(team => {
        return (
          <div key={team.id} className="mb-4 break-inside-avoid">
            <div className="rounded-xl border border-solid border-zinc-300 bg-white shadow">
              <Card
                title={team.name}
                description={team.description}
                members={team.memberships}
                link={`/home/teams/${team.id}`}
              />
            </div>
          </div>
        )
      })}
    </section>
  )
}
