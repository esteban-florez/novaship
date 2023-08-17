'use client'

import { useState } from 'react'
import { type FieldSelectable } from '@/lib/types'
import { type UserType as UserTypeEnum } from '@prisma/client'
import Steps from './Steps'
import useSubmit from '@/lib/hooks/useSubmit'
import { schema as personSchema } from '@/lib/validation/schemas/signup/person'
import { schema as nonPersonSchema } from '@/lib/validation/schemas/signup/non-person'
import { SignUpContext } from './SignUpContext'
import clsx from 'clsx'
import UserType from './steps/personal/UserType'

type Props = React.PropsWithChildren <{
  fields: FieldSelectable[]
}>

export default function SignUpForm({ fields }: Props) {
  // TODO -> corregir los textos de este formulario
  const [userType, setUserType] = useState<UserTypeEnum | null>(null)
  const [step, setStep] = useState<number>(0)
  const schema = userType === 'PERSON' ? personSchema : nonPersonSchema
  const {
    register, formState: { errors }, alert,
    reset, trigger, serverErrors, handleSubmit,
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
      <SignUpContext.Provider value={{ register, errors, goBack, goNext, trigger, reset }}>
        <section className={clsx(step !== 0 && 'hidden')}>
          <UserType userType={userType} setUserType={setUserType} />
        </section>
        {userType !== null && (
          <Steps
            fields={fields}
            userType={userType}
            step={step}
          />
        )}
      </SignUpContext.Provider>
    </form>
  )
}
