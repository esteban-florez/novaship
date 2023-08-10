'use client'

import General from './steps/General'
import { useState } from 'react'
import { type FieldOption } from '@/lib/types'
import StepIndicator from './StepIndicator'
import { type UserType as UserTypeEnum } from '@prisma/client'
import Steps from './Steps'

type Props = React.PropsWithChildren <{
  fields: FieldOption[]
}>

export default function SignUpForm({ fields }: Props) {
  // TODO -> corregir los textos de este formulario
  const [userType, setUserType] = useState<UserTypeEnum | null>(null)
  const [step, setStep] = useState<number | null>(null)

  const goNext = () => {
    if (step !== null) {
      setStep(step + 1)
      return
    }

    setStep(0)
  }

  const goBack = () => {
    if (step === null) return

    if (step === 0) {
      setStep(null)
      return
    }

    setStep(step - 1)
  }

  return (
    <form onSubmit={e => { e.preventDefault() }} method="POST" action="/api/auth/signup">
      {step === null
        ? (
          <>
            <img src="/coso4.webp" alt="Imagen decorativa en esquinas" className="absolute left-0 top-0 hidden h-full w-2/4 md:block" />
            <img src="/coso3.webp" alt="Imagen decorativa en esquinas" className="absolute left-0 top-0 block h-2/5 w-full md:hidden" />
            <General goNext={goNext} />
          </>
          )
        : (
          <>
            <img src="/coso_1.webp" alt="Imagen decorativa en esquinas" width={250} className="absolute left-0 top-0 hidden md:block" />
            <div className="mx-auto w-3/6 pt-10">
              <StepIndicator step={step} />
              <Steps
                fields={fields}
                userType={userType}
                setUserType={setUserType}
                goBack={goBack}
                goNext={goNext}
                step={step}
              />
            </div>
            <img src="/coso_2.webp" alt="Imagen decorativa en esquinas" width={250} className="absolute bottom-0 right-0 hidden rotate-180 md:block" />
          </>
          )}
    </form>
  )
}
