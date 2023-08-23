import AvatarIcon from '@/components/AvatarIcon'
import Button from '@/components/modal/Button'
import prisma from '@/prisma/client'
import { EyeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pasantías',
}

export default async function IntenshipsPage() {
  const interships = await prisma.internship.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      profile: {
        include: {
          person: true,
          skills: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      },
    },
  })

  return (
    <section className="mx-auto columns-1 gap-4 rounded-lg p-4 md:columns-2 lg:columns-3">
      {interships.map(intership => {
        return (
          <div key={intership.id} className="group mb-4 select-none break-inside-avoid rounded-md border border-neutral-300 bg-white px-4 py-6 shadow hover:border-primary hover:bg-primary/10">
            <div className="flex items-center gap-2">
              <AvatarIcon username={intership.profile.person.name} />
              <h3 className="text-xl font-bold">{intership.profile.person.name}</h3>
            </div>
            <div className="mt-3">
              {intership.profile.skills.map(skill => (
                <span key={skill.id} className="badge badge-primary badge-outline me-2 py-1 font-semibold">
                  {skill.title}
                </span>
              ))}
            </div>
            <p className="my-4 line-clamp-3">{intership.profile.description}</p>
            <div className="hidden group-hover:flex group-hover:justify-between">
              <Button className="btn-error btn">
                <XMarkIcon className="h-5 w-5" />
                Remover
              </Button>
              <Button className="btn-secondary btn">
                <EyeIcon className="h-5 w-5" />
                Detalles
              </Button>
            </div>
          </div>
        )
      })}
      {/* {dummyArray.map((_, i) => {
          return (
            <div key={i} className="card max-w-xs border-l-2 border-primary bg-white shadow sm:max-w-lg">
              <div className="card-body block">
                <div className="flex items-center gap-2">
                  <AvatarIcon username="Luis Fernandez" />
                  <h3 className="text-xl font-bold">Luis Fernández</h3>
                </div>
                <div className="mt-3">
                  {['Programación', 'JavaScript'].map(skill => (
                    <span key={skill} className="badge badge-primary badge-outline me-2 py-1 font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-3 line-clamp-3">Estudiante de 4to Trayecto de Ingeniería Informática en la UPT Aragua, La Victoria.</p>
                <div className="card-actions mt-3">
                  <button className="btn-secondary btn">
                    Detalles
                  </button>
                  <button className="btn-error btn">
                    Retirar
                  </button>
                </div>
              </div>
            </div>
          )
        })} */}
    </section>
  )
}
