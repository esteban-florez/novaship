import Card from '@/components/Card'
import EmptyContent from '@/components/EmptyContent'
import PageTitle from '@/components/PageTitle'
import { auth } from '@/lib/auth/pages'
import { getTeam } from '@/lib/data-fetching/teams'
import { tooltip } from '@/lib/tooltip'
import { getPublicProjects } from '@/lib/utils/tables'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Proyectos del equipo',
}

// PENDING -> Contratar equipo
export default async function TeamProjectsPage({
  params: { id },
}: PageContext) {
  const { type } = await auth.user()
  if (type === 'ADMIN' || type === 'INSTITUTE') {
    notFound()
  }

  const team = await getTeam(id)

  const { projects: allProjects } = team
  const projects = getPublicProjects(allProjects)

  return (
    <>
      <PageTitle
        title="Miembros del equipo"
        subtitle={tooltip.team_id_projects}
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
