import Card from '@/components/Card'
import EmptyContent from '@/components/EmptyContent'
import { getTeam } from '@/lib/data-fetching/teams'
import { getPublicProjects } from '@/lib/utils/tables'
import TeamsTitle from '../../TeamsTitle'

export default async function TeamProjectsPage({ params: { id } }: PageContext) {
  const team = await getTeam(id)
  const { projects: allProjects } = team
  const projects = getPublicProjects(allProjects)

  return (
    <>
      <TeamsTitle
        title="Proyectos del equipo"
        team={team}
      />
      {projects.length > 0
        ? (
          <section className="grid gap-3 p-4 lg:grid-cols-2">
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
