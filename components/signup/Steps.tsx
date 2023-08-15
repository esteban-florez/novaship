import { type FieldOption } from '@/lib/types'
import { type UserType } from '@prisma/client'
// TODO -> en todos estos componentes Step que se importan aquí, hay mucha repetición de JSX, se pueden hacer componentes "template".
import PhotoProfile from './steps/shared/PhotoProfile'
import Fields from './steps/shared/Fields'
import Schedule from './steps/personal/Schedule'
import clsx from 'clsx'
import RifStep from './steps/shared/RifStep'
import BasicData from './steps/shared/BasicData'

type Props = React.PropsWithChildren<{
  step: number
  fields: FieldOption[]
  userType: UserType
}>

export default function Steps({
  fields, userType, step,
}: Props) {
  const thirdStep = userType === 'PERSON'
    ? <PhotoProfile />
    : <RifStep />

  const fourthStep = userType === 'PERSON'
    ? <Fields fields={fields} />
    : <PhotoProfile isInstitute={userType === 'INSTITUTE'} />

  const fifthStep = {
    PERSON: <Schedule />,
    COMPANY: <Fields fields={fields} />,
    INSTITUTE: null,
  }

  const steps = [
    <BasicData key={1} userType={userType} />,
    thirdStep,
    fourthStep,
    fifthStep[userType],
  ] as const

  return (
    steps.map((element, i) => (
      <section key={i} className={clsx(step !== i + 1 && 'hidden')}>
        {element}
      </section>
    ))
  )
}
