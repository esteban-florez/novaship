import Filter from '@/components/projects/Filter'
import Project from '@/components/projects/Project'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos',
}

export default function ProjectsPage() {
  return (
    <>
      <div className="mb-4 px-8">
        <Filter />
        <div className="mx-auto my-4 w-full columns-1 gap-4 md:columns-2 lg:columns-3">
          <Project />
        </div>
      </div>
    </>
  )
}
