import AboutUsSection from '@/components/landing-page/AboutUsSection'
import HeaderSection from '@/components/landing-page/HeaderSection'
import WhatWeOfferSection from '@/components/landing-page/WhatWeOfferSection'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novaship, tú plataforma de trabajo',
}

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full text-gray-600">
      <HeaderSection />
      <AboutUsSection />
      <WhatWeOfferSection />
    </div>
  )
}
