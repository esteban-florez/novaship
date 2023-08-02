'use client'

import General from './steps/General'
import BasicData from './steps/BasicData'
import UserType from './steps/UserType'
import PhotoProfile from './steps/PhotoProfile'
import ThemePreferences from './steps/ThemePreferences'
import UserCalendar from './steps/UserCalendar'
import UserCurriculum from './steps/UserCurriculum'
import { useState, type JSX, createContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type Fields, schema } from '@/lib/validation/schemas/signup'

export default function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Fields>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
  })

  const FormContext = createContext({ register, errors })
  const [step, setStep] = useState('general')

  const allSteps: Record<string, JSX.Element> = {
    general: <General setStep={setStep} />,
    userType: <UserType setStep={setStep} />,
    basicData: <BasicData setStep={setStep} />,
    photoProfile: <PhotoProfile setStep={setStep} />,
    themePreferences: <ThemePreferences setStep={setStep} />,
    userCalendar: <UserCalendar setStep={setStep} />,
    userCurriculum: <UserCurriculum setStep={setStep} />,
  }

  return (
    // TODO -> añadir "setStep" al FormContext.
    <form onSubmit={handleSubmit(d => { console.log(d) })} method="POST" action="/api/auth/signup">
      <FormContext.Provider value={{ register, errors }}>
        {allSteps[step]}
      </FormContext.Provider>
    </form>
  )
}
