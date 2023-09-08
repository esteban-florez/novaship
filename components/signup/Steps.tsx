import { type Location, type UserType } from '@prisma/client'
import clsx from 'clsx'
import PhotoProfile from './steps/shared/PhotoProfile'
import Categories from './steps/personal/Categories'
import RifStep from './steps/shared/RifStep'
import BasicData from './steps/shared/BasicData'
import Skills from './steps/personal/Skills'
import Jobs from './steps/personal/Jobs'

type Props = React.PropsWithChildren<{
  step: number
  userType: UserType
  locations: Location[]
}>

export default function Steps({
  userType, step, locations,
}: Props) {
  // DRY -> en todos estos componentes Step que se importan aquí, hay mucha repetición de JSX, se pueden hacer componentes "template".
  const isPerson = userType === 'PERSON'
  const stepTwo = isPerson ? <Categories /> : <RifStep />
  const stepThree = isPerson ? <Skills /> : <PhotoProfile />
  const stepFour = isPerson ? <Jobs /> : null
  const stepFive = isPerson ? <PhotoProfile /> : null

  const steps = [
    <BasicData key={0} userType={userType} locations={locations} />,
    stepTwo,
    stepThree,
    stepFour,
    stepFive,
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
