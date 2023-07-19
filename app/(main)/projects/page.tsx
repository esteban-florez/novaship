import Filter from '@/components/projects/Filter'
import data from './data-projects.json'
import { type Metadata } from 'next'
import Card from '@/components/projects/Card'

const projects = data

export const metadata: Metadata = {
  title: 'Proyectos',
}

export default function ProjectsPage() {
  return (
    <>
      <div className="px-4">
        <Filter />
        <section className="mx-auto w-full columns-1 gap-4 rounded-lg rounded-tl-none bg-white p-6 pb-4">
          {projects.map((project) => {
            return (
              // RANT -> bueno, que te puedo decir
              // eslint-disable-next-line react/jsx-key
              <section className="mb-3 flex w-full flex-col gap-3">
                <Card
                  key={project.id}
                  title={project.title}
                  owner={project.owner}
                  status={project.status}
                />
              </section>
            )
          })}
        </section>
      </div>
    </>
  )
}
