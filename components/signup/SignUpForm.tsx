'use client'

import General from './steps/General'
import BasicData from './steps/personal/BasicData'
import UserType from './steps/personal/UserType'
import PhotoProfile from './steps/PhotoProfile'
import ThemePreferences from './steps/personal/ThemePreferences'
import UserCalendar from './steps/personal/UserCalendar'
import { useState, type JSX } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type Fields, schema } from '@/lib/validation/schemas/signup'
import { type FieldOption } from '@/lib/types'
import NumberSteps from './NumberSteps'

type Props = React.PropsWithChildren <{
  fields: FieldOption[]
}>

export default function SignUpForm({ fields }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<Fields>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
  })
  console.log(register, errors)

  const [step, setStep] = useState({ branch: 'userType', number: null })

  const allSteps = [
    <UserType key={0} setStep={setStep} />,
    <BasicData key={1} setStep={setStep} />,
    <PhotoProfile key={2} setStep={setStep} />,
    <ThemePreferences key={3} setStep={setStep} fields={fields} />,
    <UserCalendar key={4} setStep={setStep} />,
  ]
  //   userType: <UserType setStep={setStep} />,
  //   person: [
  //     <BasicData key={0} setStep={setStep} />,
  //     <PhotoProfile key={1} setStep={setStep} />,
  //     <ThemePreferences key={2} setStep={setStep} fields={fields} />,
  //     <UserCalendar key={3} setStep={setStep} />,
  //   ],
  //   institute: [

  //   ],
  //   company: [

  //   ],
  // }

  return (
    <form onSubmit={handleSubmit(d => { console.log(d) })} method="POST" action="/api/auth/signup">
      {step === null
        ? (
          <section>
            <img src="/coso4.webp" alt="Imagen decorativa en esquinas" className="absolute left-0 top-0 hidden h-full w-2/4 md:block" />
            <img src="/coso3.webp" alt="Imagen decorativa en esquinas" className="absolute left-0 top-0 block h-2/5 w-full md:hidden" />
            <General setStep={setStep} />
          </section>
          )
        : (
          <section>
            <img src="/coso_1.webp" alt="Imagen decorativa en esquinas" width={250} className="absolute left-0 top-0 hidden md:block" />
            <div className="mx-auto w-3/6 pt-10">
              <NumberSteps />
              {
                step.branch === 'userType'
                  ? allSteps[step.branch]
                  : allSteps[step.branch][step.number]
              }
            </div>
            <img src="/coso_2.webp" alt="Imagen decorativa en esquinas" width={250} className="absolute bottom-0 right-0 hidden rotate-180 md:block" />
          </section>
          )}
    </form>
  )
}
