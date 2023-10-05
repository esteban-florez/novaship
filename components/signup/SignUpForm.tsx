'use client'

import { useState } from 'react'
import { type Job, type Location, type UserType as UserTypeEnum } from '@prisma/client'
import Steps from './Steps'
import useSubmit from '@/lib/hooks/useSubmit'
import { schema as personSchema } from '@/lib/validation/schemas/signup/person'
import { schema as nonPersonSchema } from '@/lib/validation/schemas/signup/non-person'
import { SignUpContext } from './SignUpContext'
import clsx from 'clsx'
import UserType from './steps/personal/UserType'
import { type OptionSkill, type SelectableCategory } from '@/lib/types'
import collect from '@/lib/utils/collection'

type Props = React.PropsWithChildren <{
  categories: SelectableCategory[]
  skills: OptionSkill[]
  locations: Location[]
  jobs: Job[]
}>

export default function SignUpForm({ categories: categoriesData, skills, locations, jobs }: Props) {
  // TODO -> corregir los textos de este formulario
  const [categories, setCategories] = useState(categoriesData)
  const [userType, setUserType] = useState<UserTypeEnum | null>(null)
  const [step, setStep] = useState<number>(0)

  const selectedCategories = categories.filter(category => category.selected)
  const schema = userType === 'PERSON' ? personSchema : nonPersonSchema
  const {
    register, formState: { errors }, alert, control, setValue,
    clearErrors, reset, trigger, serverErrors, handleSubmit,
  } = useSubmit({
    append: {
      userType,
      categories: collect(selectedCategories).ids(),
    },
    schema,
    asFormData: true,
  })

  function goNext() {
    if (step >= 5) return
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
    categories,
    selectedCategories,
    setCategories,
    skills,
    jobs,
    control,
    clearErrors,
    setValue,
    userType: userType as UserTypeEnum,
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
            userType={userType}
            step={step}
            locations={locations}
          />
        )}
      </SignUpContext.Provider>
    </form>
  )
}
