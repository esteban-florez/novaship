import { type Review, type Person } from '@prisma/client'

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
    <div>ola</div>
  )
}
