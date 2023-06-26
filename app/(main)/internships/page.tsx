import FilterOptions from '@/components/layout/FilterOptions'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pasantías',
}

export default function IntenshipsPage() {
  return (
    <>
      <FilterOptions />
      <h2>Pasantías</h2>
    </>
  )
}
