import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { url } from '@/lib/utils/url'

export const metadata: Metadata = {
  title: 'Novaship, tú plataforma de trabajo',
}

export default function LandingPage() {
  redirect(url('/home').href)
}
