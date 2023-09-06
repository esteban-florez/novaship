import { type ProjectWithTeamAndCategories, type VisibilityFilter } from '@/lib/types'
import EmptyContent from '../EmptyContent'
import Card from '../Card'

interface Props {
  projects: ProjectWithTeamAndCategories[]
  visibility: VisibilityFilter
  members: number
  title: string
}

// TODO -> pagination
export default function Projects({ projects, visibility, members, title }: Props) {
  if (projects.length === 0) {
    return (
      <EmptyContent title="No encontramos nada..." className="sm:w-2/4">
        Démosle un poco de vida a esta sección añadiendo algunos proyectos.
      </EmptyContent>
    )
  }

  return (
    <section className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg p-4 pt-1
      md:columns-2 lg:columns-3 xl:rounded-tl-none"
    >
      {projects.map(project => {
        if (
          (title === '' || project.title.toLowerCase().includes(title.toLowerCase())) &&
            (visibility === 'ALL' || project.visibility === visibility) &&
            (members === 0 || project.team.memberships.length <= members)
        ) {
          return (
            <div key={project.id} className="mb-4 break-inside-avoid">
              <div className="rounded-xl border border-solid border-zinc-300 bg-white shadow">
                <Card
                  title={project.title}
                  members={project.team.memberships}
                  description={project.description}
                  link={`/home/projects/${project.id}`}
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
