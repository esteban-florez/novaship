import Card from '@/components/Card'
import EmptyContent from '@/components/EmptyContent'
import PageTitle from '@/components/PageTitle'
import { getTeam } from '@/lib/data-fetching/teams'
import { getPublicProjects } from '@/lib/utils/tables'
import Link from 'next/link'

export default async function TeamProjectsPage({ params: { id } }: PageContext) {
  const team = await getTeam(id)
  const { projects: allProjects } = team
  const projects = getPublicProjects(allProjects)

  return (
    <>
      <PageTitle
        title="Proyectos del equipo"
        subtitle={{
          label: 'Equipo',
          name: team.name,
          url: `/home/teams/${team.id}`,
        }}
      >
        <Link href={`/home/teams/${team.id}/contracts/create`} className="btn-primary btn">
          Contratar este equipo
        </Link>
      </PageTitle>
      {projects.length > 0
        ? (
          <section className="grid grid-cols-3 gap-3 p-4">
            {projects.map(project => (
              <div key={project.id}>
                <Card
                  title={project.title}
                  description={project.description}
                  categories={project.categories}
                  link={`/home/projects/${project.id}`}
                />
              </div>
            ))}
          </section>
          )
        : (
          <EmptyContent title="¡Nada que mostrar!">
            Este equipo no ha creado ningún proyecto aún.
          </EmptyContent>
          )}
    </>
  )
}
