import { type FieldOption } from '@/lib/types'
import { type UserType as UserTypeEnum } from '@prisma/client'
import UserType from './steps/personal/UserType'
import BasicData from './steps/personal/BasicData'
import PhotoProfile from './steps/PhotoProfile'
import ThemePreferences from './steps/personal/ThemePreferences'
import Schedule from './steps/personal/Schedule'
import clsx from 'clsx'
import RifStep from './steps/company/RifStep'

type Props = StepProps & {
  step: number
  fields: FieldOption[]
  userType: UserTypeEnum | null
  setUserType: (type: UserTypeEnum) => void
}

export default function Steps({
  goBack, goNext, fields, userType, setUserType, step,
}: Props) {
  const thirdStep = userType === 'PERSON'
    ? <PhotoProfile key={2} goBack={goBack} goNext={goNext} />
    : <RifStep key={2} goBack={goBack} goNext={goNext} />

  const steps = [
    <UserType key={0} goBack={goBack} goNext={goNext} userType={userType} setUserType={setUserType} />,
    <BasicData key={1} goBack={goBack} goNext={goNext} />,
    thirdStep,
    <ThemePreferences key={3} goBack={goBack} goNext={goNext} fields={fields} />,
    <Schedule key={4} goBack={goBack} />,
  ] as const

  return (
    steps.map((element, i) => (
      <section key={i} className={clsx(step !== i && 'hidden')}>
        {element}
      </section>
    ))
  )
}
