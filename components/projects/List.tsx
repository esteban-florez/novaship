import { type VisibilityFilter } from '@/lib/types'
import { type Membership, type Person, type Project } from '@prisma/client'
import EmptyContent from '../EmptyContent'
import Card from '../Card'
import { includesValue } from '@/lib/utils/text'

interface Props {
  // DRY 18
  projects: Array<Project & {
    person: Person | null
    memberships: Array<Membership & {
      person: Person
    }>
  }>
  visibility: VisibilityFilter
  members: number
  title: string
}

// TODO -> pagination
export default function List({ projects, visibility, members, title }: Props) {
  const projectsFiltered = projects.filter(project => {
    if (
      (title === '' || includesValue(project.title, title)) &&
      (visibility === 'ALL' || project.visibility === visibility) &&
      (members === 0 || project.memberships.length <= members)
    ) {
      return project
    }

    return null
  })

  if (projects.length === 0) {
    return (
      <EmptyContent title="No encontramos nada..." size="sm:w-2/4">
        Démosle un poco de vida a esta sección añadiendo algunos proyectos.
      </EmptyContent>
    )
  }

  if (projectsFiltered.length === 0) {
    return (
      <EmptyContent title="No encontramos nada..." size="sm:w-2/4">
        No hay proyectos que coincidan con la búsqueda.
      </EmptyContent>
    )
  }

  return (
    <section className="mx-auto mb-4 w-full columns-1 gap-4 rounded-lg p-4 pt-1 md:columns-2 lg:columns-3 xl:rounded-tl-none">
      {projectsFiltered.map(project => {
        return (
          <div key={project.id} className="mb-4 break-inside-avoid">
            <div className="rounded-xl border border-solid border-zinc-300 bg-white shadow">
              <Card
                title={project.title}
                description={project.description}
                owner={project.person?.name}
                avatarInfo={false}
                members={project.memberships}
                link={`/home/projects/${project.id}`}
              />
            </div>
          </div>
        )
      }
      )}
    </section>

  )
}
