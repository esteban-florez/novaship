import CreateOfferForm from '@/components/offers-create/CreateOfferForm'
import selectable from '@/lib/data-fetching/selectable'
import { type SelectableSkill } from '@/lib/types'
import { PlusIcon } from '@heroicons/react/24/solid'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar oferta',
}

export default async function CreateOfferPage() {
  const skills = await selectable<SelectableSkill>({ model: 'skill' })
  return (
    <section className="container px-10 py-8">
      <div className="relative flex h-28 items-center rounded-t-xl bg-primary px-6 py-4 text-white shadow">
        <div className="z-20 flex items-center gap-1">
          <PlusIcon className="h-9 w-9 font-bold" />
          <h2 className="text-4xl font-bold tracking-tighter">Crear oferta</h2>
        </div>
        <img src="/coso3.webp" alt="Imagen decorativa en esquinas" className="pointer-events-none absolute left-0 top-0 h-48 w-full rounded-t-xl" />
      </div>
      <CreateOfferForm skills={skills} />
    </section>
  )
}
