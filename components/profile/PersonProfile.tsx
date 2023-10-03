import { ArrowUpTrayIcon, EyeIcon, PlusIcon } from '@heroicons/react/24/outline'
import { type Review, type Person } from '@prisma/client'
import Button from '../Button'

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
      <div className="grid grid-cols-9 gap-4 px-8 py-4">
        <div className="card col-span-9 bg-white shadow-md">ola</div>
      </div>
      <div className="grid grid-cols-9 gap-4 px-8 py-4">
        <div className="col-span-3">
          <div className="relative">
            <div className="h-20 w-full rounded-t-xl bg-primary object-cover" />
            <img src="/onda-horizontal.webp" alt="Onda-horizontal" className="absolute bottom-0 w-full" />
          </div>
          <div className="card rounded-t-none bg-white p-4 shadow-md">
            <div className="-mt-16 flex flex-col items-center gap-2 text-center">
              <img alt="foto de perfil" ref={person?.image} className="h-20 w-20 rounded-md border border-neutral-300 bg-neutral-200" />
              {person?.grades === null && <p className="text-xl font-bold">{person?.name}</p>}
              {person?.grades.map(grade => {
                if (person.grades.length > 1) {
                  return (
                    <div className="flex flex-col items-center gap-1" key={grade.id}>
                      <p className="text-xl font-bold">{person?.name}</p>
                      <p className="text-base text-secondary after:content-[','] last:after:content-[]">{grade.title}</p>
                    </div>
                  )
                }
                return (
                  <div className="flex items-center gap-1" key={grade.id}>
                    <p className="text-xl font-bold">{person?.name}</p>
                    <p className="pt-1 text-base font-bold text-neutral/60">· {grade.title}</p>
                  </div>
                )
              })}
              <p className="-mt-4 text-base">{person?.email}</p>
              <p className="-mt-1 text-base">{person?.description}</p>
              <div className="w-full">
                {person?.curriculum === null
                  ? (
                    <div className="flex w-full flex-col gap-2 px-4">
                      <Button url="#" color="SECONDARY" hover="WHITE">
                        <PlusIcon className="h-5 w-5" />
                        Crear curriculum
                      </Button>
                      <Button url="#" color="SECONDARY" hover="WHITE">
                        <ArrowUpTrayIcon className="h-5 w-5" />
                        Subir curriculum
                      </Button>
                    </div>
                    )
                  : (
                    <Button url="#" color="PRIMARY" hover="WHITE">
                      <EyeIcon className="h-5 w-5" />
                      Ver curriculum
                    </Button>
                    )}
              </div>
            </div>
            <div className="divider my-1" />
            <p className="text-sm">{person?.location.title}</p>
            {person?.skills.map(skill => {
              return (
                <span key={skill.id}>{skill.title}</span>
              )
            })}
            <span>schedule</span>
          </div>
        </div>
        <div className="col-span-6 flex flex-col gap-3">
          <div className="card rounded-lg bg-white p-4 shadow-md">ola</div>
          <div className="card rounded-lg bg-white p-4 shadow-md">ola</div>
        </div>
      </div>
    </>
  )
}
