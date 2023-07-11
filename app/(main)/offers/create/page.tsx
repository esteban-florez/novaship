import PageTitle from '@/components/PageTitle'
import CreateOfferForm from '@/components/offers/create/CreateOfferForm'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrar oferta',
}

export default function CreateOfferPage() {
  return (
    <>
      <PageTitle title="Crear oferta" />
      <CreateOfferForm />
    </>
  )
}
