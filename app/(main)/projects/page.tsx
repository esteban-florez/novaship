import Filter from '@/components/projects/Filter'
import Project from '@/components/projects/Project'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos',
}

export default function ProjectsPage() {
  return (
    <>
      <div className="px-4">
        <Filter />
        <div className="mx-auto -mt-4 mb-2 w-full columns-1 gap-4 rounded-lg md:columns-2 lg:columns-3 xl:rounded-tl-none xl:bg-white xl:p-6">
          <Project />
        </div>
      </div>
    </>
  )
}
