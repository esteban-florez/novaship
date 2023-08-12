import { type FieldOption } from '@/lib/types'
import { type UserType as UserTypeEnum } from '@prisma/client'
// TODO -> en todos estos componentes Step que se importan aquí, hay mucha repetición de JSX, se pueden hacer componentes "template".
import UserType from './steps/personal/UserType'
import PersonBasicData from './steps/personal/PersonBasicData'
import InstituteBasicData from './steps/institute/InstituteBasicData'
import CompanyBasicData from './steps/company/CompanyBasicData'
import PhotoProfile from './steps/shared/PhotoProfile'
import Fields from './steps/shared/Fields'
import Schedule from './steps/personal/Schedule'
import clsx from 'clsx'
import RifStep from './steps/shared/RifStep'

type Props = React.PropsWithChildren<{
  step: number
  fields: FieldOption[]
  userType: UserTypeEnum | null
  setUserType: (type: UserTypeEnum) => void
}>

export default function Steps({
  fields, userType, setUserType, step,
}: Props) {
  const secondStep = {
    PERSON: <PersonBasicData />,
    COMPANY: <CompanyBasicData />,
    INSTITUTE: <InstituteBasicData />,
  }

  const thirdStep = userType === 'PERSON'
    ? <PhotoProfile />
    : <RifStep />

  const fourthStep = userType === 'PERSON'
    ? <Fields fields={fields} />
    : <PhotoProfile />

  const fifthStep = {
    PERSON: <Schedule />,
    COMPANY: <Fields fields={fields} />,
    INSTITUTE: null, // TODO -> falta un paso en Institute
  }

  const steps = [
    <UserType key={0} userType={userType} setUserType={setUserType} />,
    secondStep[userType ?? 'PERSON'],
    thirdStep,
    fourthStep,
    fifthStep[userType ?? 'PERSON'],
  ] as const

  return (
    steps.map((element, i) => (
      <section key={i} className={clsx(step !== i && 'hidden')}>
        {element}
      </section>
    ))
  )
}
