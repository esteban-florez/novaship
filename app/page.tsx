import HeaderSection from '@/components/landing-page/HeaderSection'
import { type Metadata } from 'next'
import FooterSection from '@/components/landing-page/FooterSection'
import MiddleSection from '@/components/landing-page/MiddleSection'

export const metadata: Metadata = {
  title: 'Novaship, tú plataforma de trabajo',
}

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full text-gray-600">
      <HeaderSection />
      <MiddleSection />
      <FooterSection />
    </div>
  )
}
