'use client'

import { useState } from 'react'
import { type FieldOption } from '@/lib/types'
import { type UserType as UserTypeEnum } from '@prisma/client'
import Steps from './Steps'
import useSubmit from '@/lib/hooks/useSubmit'
import { schema } from '@/lib/validation/schemas/signup'
import { SignUpContext } from './SignUpContext'

type Props = React.PropsWithChildren <{
  fields: FieldOption[]
}>

export default function SignUpForm({ fields }: Props) {
  // TODO -> corregir los textos de este formulario
  const [userType, setUserType] = useState<UserTypeEnum | null>(null)
  const [step, setStep] = useState<number>(0)
  const {
    register, formState: { errors },
    alert, serverErrors, handleSubmit,
  } = useSubmit({ schema, append: { userType } })

  function goNext() {
    if (step >= 4) return
    setStep(step + 1)
  }

  function goBack() {
    if (step <= 0) return
    setStep(step - 1)
  }

  return (
    <form className="mx-auto" onSubmit={handleSubmit} method="POST" action="/api/auth/signup">
      {alert}
      {serverErrors}
      <SignUpContext.Provider value={{ register, errors, goBack, goNext }}>
        <Steps
          fields={fields}
          userType={userType}
          setUserType={setUserType}
          step={step}
        />
      </SignUpContext.Provider>
    </form>
  )
}
