import Card from '@/components/projects/Card'
import { type TabProp, type VisibilityFilter } from '@/lib/types'
import { type Membership, type Person, type Project } from '@prisma/client'
import EmptyContent from '../EmptyContent'

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
  tab: TabProp
}

// TODO -> pagination
export default function List({ projects, visibility, members, title, tab }: Props) {
  if (projects.length === 0) {
    return (
      <EmptyContent title="No encontramos nada...">
        Démosle un poco de vida a esta sección añadiendo algunos proyectos.
      </EmptyContent>
    )
  }

  return (
    projects.map(project => {
      if (
        (title === '' || project.title.toLowerCase().includes(title.toLowerCase())) &&
        (visibility === 'ALL' || project.visibility === visibility) &&
        (members === 0 || project.memberships.length <= members)
      ) {
        return (
          <div key={project.id} className="mb-3 flex w-full flex-col gap-3">
            <Card
              id={project.id}
              title={project.title}
              owner={tab === 'All' ? project?.person?.name : ''}
              status={project.visibility}
              members={project.memberships}
            />
          </div>
        )
      }

      return null
    })
  )
}
