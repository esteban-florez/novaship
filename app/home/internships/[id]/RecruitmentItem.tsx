import { type Company, type Recruitment, type Vacant } from '@prisma/client'

type Props = React.PropsWithChildren<{
  recruitment: Recruitment & {
    vacant: Vacant & {
      company: Company
    }
  }
}>

export default function RecruitmentItem({ recruitment }: Props) {
  const { vacant } = recruitment
  const { company } = vacant

  return (
    <div className="w-full">
      <h1>{company.name}</h1>
    </div>
  )
}
