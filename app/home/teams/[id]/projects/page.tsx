import Card from '@/components/Card'
import EmptyContent from '@/components/EmptyContent'
import PageTitle from '@/components/PageTitle'
import { getTeam } from '@/lib/data-fetching/teams'
import { getPublicProjects } from '@/lib/utils/tables'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos del equipo',
}

// PENDING -> Contratar equipo
export default async function TeamProjectsPage({
  params: { id },
}: PageContext) {
  const team = await getTeam(id)
  const { projects: allProjects } = team
  const projects = getPublicProjects(allProjects)

  return (
    <>
      <PageTitle
        title="Miembros del equipo"
        subtitle="Aquí podrás ver toda la plantilla del equipo"
        breadcrumbs={team.name}
      />
      {projects.length > 0
        ? (
          <section className="grid gap-4 p-4 lg:grid-cols-2">
            {projects.map((project) => (
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
