'use client'

import { useState } from 'react'
import { type UserType as UserTypeEnum } from '@prisma/client'
import Steps from './Steps'
import useSubmit from '@/lib/hooks/useSubmit'
import { schema as personSchema } from '@/lib/validation/schemas/signup/person'
import { schema as nonPersonSchema } from '@/lib/validation/schemas/signup/non-person'
import { SignUpContext } from './SignUpContext'
import clsx from 'clsx'
import UserType from './steps/personal/UserType'
import { type SelectableField, type SelectableSkill } from '@/lib/types'

type Props = React.PropsWithChildren <{
  fields: SelectableField[]
  skills: SelectableSkill[]
}>

export default function SignUpForm({ fields: fieldsData, skills }: Props) {
  // TODO -> corregir los textos de este formulario
  const [fields, setFields] = useState(fieldsData)
  // const [skills, setSkills] = useState(skillsData)
  const [userType, setUserType] = useState<UserTypeEnum | null>(null)
  const [step, setStep] = useState<number>(0)

  const selectedFields = fields.filter(field => field.selected)
  const schema = userType === 'PERSON' ? personSchema : nonPersonSchema
  const {
    register, formState: { errors }, alert,
    reset, trigger, serverErrors, handleSubmit,
  } = useSubmit({
    append: {
      userType,
      fields: selectedFields,
    },
    schema,
  })

  function goNext() {
    if (step >= 4) return
    setStep(step + 1)
  }

  function goBack() {
    if (step <= 0) return
    setStep(step - 1)
  }

  const providerValue = {
    register,
    errors,
    goBack,
    goNext,
    trigger,
    reset,
    fields,
    selectedFields,
    setFields,
    skills,
    // setSkills,
  }

  return (
    <form className="mx-auto" onSubmit={handleSubmit} method="POST" action="/api/auth/signup">
      {alert}
      {serverErrors}
      <SignUpContext.Provider value={providerValue}>
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
