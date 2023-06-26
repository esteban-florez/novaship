import FilterOptions from '@/components/layout/FilterOptions'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos',
}

export default function ProjectsPage() {
  return (
    <>
      <FilterOptions />
      <h2>Projects</h2>
    </>
  )
}
