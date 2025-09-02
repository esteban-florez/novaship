import { type ProjectsFull } from '@/lib/types'
import EmptyContent from '../EmptyContent'
import Card from '../Card'
import { getProjectResponsable } from '@/lib/utils/tables'

interface Props {
  userId: string
  projects: ProjectsFull[]
}

export default function ProjectsCard({ userId, projects }: Props) {
  if (projects.length === 0) {
    return (
      <EmptyContent
        title="No encontramos nada..."
        className="sm:w-2/4"
      >
        No hay proyectos registrados en esta categoría o por ese nombre
      </EmptyContent>
    )
  }

  return (
    <section className="mt-4 mx-auto mb-4 w-full columns-1 gap-4 rounded-lg p-4 pt-1 md:columns-2 lg:columns-3 xl:rounded-tl-none">
      {projects.map((project) => {
        const responsable = getProjectResponsable(project, userId)

        return (
          <div
            key={project.id}
            className="mb-4 break-inside-avoid"
          >
            <div className="rounded-xl border border-solid border-zinc-300 bg-white shadow">
              <Card
                title={project.title}
                members={project.team?.memberships}
                description={project.description}
                link={`/home/projects/${project.id}`}
                code={project.code}
                image={project.image}
                tag={responsable}
              />
            </div>
          </div>
        )
      })}
    </section>
  )
}
