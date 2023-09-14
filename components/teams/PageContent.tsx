import Link from 'next/link'
import PageTitle from '../PageTitle'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Pagination from '../Pagination'
import { type Team } from '@prisma/client'
import Card from '../Card'

interface Props {
  teams: Team[]
  pageNumber: number
  hasNextPage: boolean
}

export default function PageContent({ teams, pageNumber, hasNextPage }: Props) {
  return (
    <>
      <PageTitle
        title="Equipos de trabajo"
        subtitle="Descubre diferentes equipos de trabajo, y los proyectos públicos creados dentro de la aplicación."
      >
        <Link className="btn-primary btn" href="/home/teams/create">
          <PlusCircleIcon className="h-6 w-6" />
          Crear equipo
        </Link>
      </PageTitle>
      <Pagination
        url="/home/teams"
        pageNumber={pageNumber}
        hasNextPage={hasNextPage}
      />
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
                  link={`/home/teams/${team.id}`}
                />
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
