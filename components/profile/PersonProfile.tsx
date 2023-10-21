import { ChevronDoubleRightIcon, EnvelopeOpenIcon, PencilIcon, MapPinIcon, PhoneIcon, DocumentTextIcon, FireIcon, ClipboardIcon } from '@heroicons/react/24/outline'
import { type Person } from '@prisma/client'

interface Props {
  person: (Person & {
    location: {
      id: string
      title: string
    }
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
  })
}

export default function PersonProfile({ person }: Props) {
  return (
    <>
      <div className="grid grid-cols-9 gap-4 px-8 py-4">
        <div className="col-span-9">
          <div className="h-16 w-full rounded-t-xl bg-neutral" />
          <div className="card rounded-t-none bg-white p-4 pt-2 shadow-md">
            <div className="flex gap-3">
              <img alt="foto de perfil" src="/icon.jpg" className="-mt-12 h-24 w-24 rounded-md border border-neutral-300 bg-neutral-200" />
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col">
                  <p className="text-2xl font-bold">{person?.name}</p>
                  {person?.grades.map(grade => {
                    return (
                      <p className="-mt-1.5 text-base font-bold text-primary after:content-[','] last:after:content-[]" key={grade.id}>{grade.title}</p>
                    )
                  })}
                </div>
                {/* FUTURE LINK */}
                <button className="btn btn-secondary hover:bg-white hover:text-neutral-600 hover:border-secondary">
                  <PencilIcon className="h-5 w-5" />
                  Editar perfil
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card col-span-3 gap-3 bg-white p-4 text-base shadow-md">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <DocumentTextIcon className="h-6 w-6 text-neutral-700" />
              <h4 className="text-xl font-bold">Detalles</h4>
            </div>
            <p>{person?.description}</p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <FireIcon className="h-6 w-6 text-neutral-700" />
              <h4 className="text-xl font-bold">Habilidades</h4>
            </div>
            <ul className="mt-1 text-base leading-none">
              {person?.skills.map(skill => {
                return (
                  <li className="my-1 flex items-center gap-1" key={skill.id}>
                    <ChevronDoubleRightIcon className="h-4 w-4" />
                    {skill.title}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex flex-col">
            <div className="mb-2 flex items-center gap-1">
              <ClipboardIcon className="h-6 w-6 text-neutral-700" />
              <h4 className="text-xl font-bold">Curriculum</h4>
            </div>
            {/* FUTURE LINK */}
            <button className="btn btn-primary">
              <PencilIcon className="h-5 w-5" />
              Editar perfil
            </button>
            <div className="divider" />
            <h4 className="mb-2 text-xl font-bold">Información personal</h4>
            <ul className="line-clamp-2 flex flex-col gap-1.5 text-base leading-none">
              <li className="flex items-center gap-2">
                <EnvelopeOpenIcon className="h-6 w-6" />
                <p>{person.email}</p>
              </li>
              <li className="flex items-center gap-2">
                <MapPinIcon className="h-6 w-6" />
                <p>{person?.location.title}</p>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-6 w-6" />
                <p>{person?.phone}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
