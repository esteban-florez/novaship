import { type Metadata } from 'next'
import HeaderSection from '@/components/landing-page/HeaderSection'
import FooterSection from '@/components/landing-page/FooterSection'
import MiddleSection from '@/components/landing-page/MiddleSection'
import Navbar from '@/components/landing-page/Navbar'

export const metadata: Metadata = {
  title: 'Novaship, tú plataforma de trabajo',
}

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full text-gray-600">
      <Navbar />
      <HeaderSection />
      <MiddleSection />
      <FooterSection />
    </div>
  )
}
