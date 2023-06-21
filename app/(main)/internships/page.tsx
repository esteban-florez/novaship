import Subnavbar from '@/components/layout/Subnavbar'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pasantías',
}

export default function IntenshipsPage() {
  return (
    <>
      <Subnavbar options />
      <h2>Pasantías</h2>
    </>
  )
}
