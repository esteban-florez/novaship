import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { uri } from '@/lib/utils/url'

export const metadata: Metadata = {
  title: 'Novaship, tú plataforma de trabajo',
}

// Nota por si Jesús y Myriam ven esto: La landing nunca me convenció, creo que se ve más bonito el login directamente.
export default function LandingPage() {
  redirect(uri('/home'))
}
