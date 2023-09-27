import { type Review, type Person } from '@prisma/client'
import PageTitle from '../PageTitle'

interface Props {
  person: (Person & {
    location: {
      id: string
      title: string
    }
    reviews: Review[]
    categories: Array<{
      id: string
      title: string
    }>
    experiences: Array<{
      id: string
      name: string
    }>
    grades: Array<{
      id: string
      title: string
    }>
    jobs: Array<{
      id: string
      title: string
    }>
    skills: Array<{
      id: string
      title: string
    }>
  }) | null
}

export default function PersonProfile({ person }: Props) {
  return (
    <>
      <PageTitle title="Mi perfil" />
      <div className="grid grid-cols-7 gap-4 px-8 py-4">
        <div className="card col-span-2 rounded-lg bg-white p-4 shadow-md">
          <div className="flex flex-col items-center">
            <p>{person?.image}</p>
            <p className="text-lg font-bold">{person?.name}</p>
            <p className="-mt-1 text-base">{person?.email}</p>
            <p>{person?.location.title}</p>
          </div>
          <span>{person?.description}</span>
          {person?.skills.map(skill => {
            return (
              <span key={skill.id}>{skill.title}</span>
            )
          })}
          {person?.grades.map(grade => {
            return (
              <span key={grade.id}>{grade.title}</span>
            )
          })}
          <span>schedule</span>
        </div>
        <div className="card col-span-5 rounded-lg bg-white p-4 shadow-md">
          ola
        </div>
      </div>
    </>
  )
}
