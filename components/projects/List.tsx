import Card from '@/components/projects/Card'
import { type VisibilityFilter } from '@/lib/types'
import { type Membership, type Person, type Project } from '@prisma/client'

interface Props {
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

export default function List({ projects, visibility, members, title }: Props) {
  return (
    projects.map((project, i) => {
      if (i < 10) {
        if (
          (title === '' || project.title.includes(title)) &&
          (visibility === 'ALL' || project.visibility === visibility) &&
          (members === 0 || project.memberships.length === members)
        ) {
          return (
            <div key={project.id} className="mb-3 flex w-full flex-col gap-3">
              <Card
                id={project.id}
                title={project.title}
                status={project.visibility}
                members={project.memberships}
              />
            </div>
          )
        }

        return null
      }

      return null
    })
  )
}
