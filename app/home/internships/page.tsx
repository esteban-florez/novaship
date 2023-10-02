import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pasantías',
}

export default async function IntenshipsPage() {
  return (
    <section className="mx-auto columns-1 gap-4 rounded-lg p-4 md:columns-2 lg:columns-3" />
  )
}
