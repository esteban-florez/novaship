import {
  DocumentIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  IdentificationIcon,
  InformationCircleIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { format as dateFormat } from '@/lib/utils/date'
import { format as textFormat } from '@/lib/utils/text'
import prisma from '@/prisma/client'
import AvatarIcon from '@/components/AvatarIcon'
import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth/pages'
import { href } from '@/lib/utils/url'

export const metadata: Metadata = {
  title: 'Perfil de institución',
}

export default async function ProfileInstituteId({
  params: { id },
}: PageContext) {
  const { id: userId } = await auth.user()
  if (userId === id) {
    redirect(href('/home/profile'))
  }

  const institute = await prisma.institute.findUniqueOrThrow({
    where: { id },
    include: {
      location: {
        select: {
          title: true,
        },
      },
    },
  })

  const {
    name,
    email,
    image,
    location,
    phone,
    rif,
    verifiedAt,
    description,
    certification,
  } = institute

  const verified =
    verifiedAt != null ? dateFormat({ date: verifiedAt }) : 'No verificado'

  return (
    <div className="grid grid-cols-10 gap-4 mt-4 sm:mt-0 sm:px-8 sm:py-4">
      <div className="col-span-10">
        <div className="h-16 w-full rounded-t-xl bg-neutral" />
        <div className="card rounded-t-none bg-white p-4 pt-2 shadow-md">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <AvatarIcon
                image={image}
                className="h-16 w-16"
              />
              <div className="flex flex-col">
                <p className="text-lg sm:text-2xl font-bold">{name}</p>
                <p>
                  Verificado el{' '}
                  <span className="text-secondary">{verified}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card col-span-full sm:col-span-5 gap-3 bg-white p-4 shadow-md border border-zinc-300 text-sm">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <DocumentTextIcon className="h-6 w-6 text-neutral-700" />
            <h4 className="text-xl font-bold">Sobre nosotros</h4>
          </div>
          <p className="text-neutral-600">{description}</p>
        </div>
      </div>
      <div className="col-span-full sm:col-span-5 card gap-3 bg-white p-4 shadow-md border border-zinc-300 text-sm">
        <div className="flex items-center gap-3 mb-2">
          <InformationCircleIcon className="h-6 w-6 text-neutral-700" />
          <h4 className="text-xl font-bold">Información de contacto</h4>
        </div>
        <ul className="sm:ms-8 line-clamp-2 flex flex-col gap-4 text-neutral-600 leading-none">
          <li className="flex items-center gap-2">
            <IdentificationIcon className="h-5 w-5" />
            <p>{textFormat(rif, 'ci')}</p>
          </li>
          <li className="flex items-center gap-2">
            <EnvelopeIcon className="h-5 w-5" />
            <p>{email}</p>
          </li>
          <li className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5" />
            <p>{location.title}</p>
          </li>
          <li className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5" />
            <p>{textFormat(phone, 'phone')}</p>
          </li>
        </ul>
      </div>
      <div className="col-span-full card gap-3 bg-white p-4 shadow-md border border-zinc-300 text-sm">
        <div className="flex items-center gap-3 mb-2">
          <DocumentIcon className="h-6 w-6 text-neutral-700" />
          <h4 className="text-xl font-bold">RIF</h4>
        </div>
        <img
          src={href(certification)}
          alt="RIF"
        />
      </div>
    </div>
  )
}
