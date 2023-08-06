'use client'

import General from './steps/General'
import BasicData from './steps/BasicData'
import UserType from './steps/UserType'
import PhotoProfile from './steps/PhotoProfile'
import ThemePreferences from './steps/ThemePreferences'
import UserCalendar from './steps/UserCalendar'
import { useState, type JSX } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type Fields, schema } from '@/lib/validation/schemas/signup'

export default function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Fields>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
  })
  console.log(register, errors)

  const [step, setStep] = useState('general')

  const allSteps: Record<string, JSX.Element> = {
    userType: <UserType setStep={setStep} />,
    basicData: <BasicData setStep={setStep} />,
    photoProfile: <PhotoProfile setStep={setStep} />,
    themePreferences: <ThemePreferences setStep={setStep} />,
    userCalendar: <UserCalendar setStep={setStep} />,
  }

  return (
    <form onSubmit={handleSubmit(d => { console.log(d) })} method="POST" action="/api/auth/signup">
      {step === 'general' &&
        <section>
          <img src="/coso4.webp" alt="Imagen decorativa en esquinas" className="absolute left-0 top-0 hidden h-full w-2/4 md:block" />
          <General setStep={setStep} />
        </section>}
      {step !== 'general' &&
        <section>
          <img src="/coso_1.webp" alt="Imagen decorativa en esquinas" width={250} className="absolute left-0 top-0 hidden md:block" />
          <div className="mx-auto w-3/6 pt-10">
            {allSteps[step]}
          </div>
          <img src="/coso_2.webp" alt="Imagen decorativa en esquinas" width={250} className="absolute bottom-0 right-0 hidden rotate-180 md:block" />
        </section>}
    </form>
  )
}
