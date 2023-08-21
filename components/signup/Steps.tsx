import { type UserType } from '@prisma/client'
import clsx from 'clsx'
import PhotoProfile from './steps/shared/PhotoProfile'
import Fields from './steps/personal/Fields'
import RifStep from './steps/shared/RifStep'
import BasicData from './steps/shared/BasicData'
import Skills from './steps/personal/Skills'

type Props = React.PropsWithChildren<{
  step: number
  userType: UserType
}>

export default function Steps({
  userType, step,
}: Props) {
  // DRY -> en todos estos componentes Step que se importan aquí, hay mucha repetición de JSX, se pueden hacer componentes "template".
  const isPerson = userType === 'PERSON'
  const stepTwo = isPerson ? <Fields /> : <RifStep />
  const stepThree = isPerson
    ? <Skills />
    : <PhotoProfile />

  const steps = [
    <BasicData key={0} userType={userType} />,
    stepTwo,
    stepThree,
    <PhotoProfile key={3} />,
  ] as const

  return (
    <div className="px-10">
      {steps.map((element, i) => (
        <section key={i} className={clsx(step !== i + 1 && 'hidden')}>
          {element}
        </section>
      ))}
    </div>
  )
}
