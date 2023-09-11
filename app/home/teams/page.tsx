import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import Card from '@/components/Card'

export const metadata: Metadata = {
  title: 'Equipos de trabajo',
}

export default async function TeamsPage() {
  const teams = await prisma.team.findMany()

  return (
    <>
      <div className="bg-primary p-4 text-white">
        <h1 className="text-3xl font-bold tracking-tighter">Equipos de trabajo</h1>
        <p className="font-semibold">Descubre diferentes equipos de trabajo, y los proyectos públicos creados dentro de la aplicación.</p>
      </div>
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
