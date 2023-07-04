import Archive from '@/components/projects/Archive'
import ProjectDetails from '@/components/projects/ProjectDetails'
import Filter from '@/components/projects/Filter'
import TeamGroup from '@/components/projects/Team'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos',
}

export default function ProjectsPage() {
  return (
    <>
      <div className="my-4 grid grid-cols-1 gap-4 px-8 md:grid-cols-6">
        <div className="md:col-span-4">
          <ProjectDetails />
          <Filter />
          <Archive />
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-col gap-4">
            <div className="flex h-80 flex-col gap-2 rounded-lg bg-neutral p-5" />
            <TeamGroup />
          </div>
        </div>
      </div>
    </>
  )
}
