import { type ProjectsFull } from '@/lib/types'
import EmptyContent from '../EmptyContent'
import Card from '../Card'
import { includesValue } from '@/lib/utils/text'

interface Props {
  search: string
  projects: ProjectsFull[]
}

export default function Projects({ search, projects }: Props) {
  if (projects.length === 0) {
    return (
      <EmptyContent
        title="No encontramos nada..."
        className="sm:w-2/4"
      >
        Démosle un poco de vida a esta sección añadiendo algunos proyectos.
      </EmptyContent>
    )
  }

  return (
    <section
      className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg p-4 pt-1
      md:columns-2 lg:columns-3 xl:rounded-tl-none"
    >
      {projects.map((project) => {
        if (
          search === '' ||
          includesValue(project.title, search) ||
          includesValue(project.description, search)
        ) {
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
                />
              </div>
            </div>
          )
        }
        return null
      })}
    </section>
  )
}
