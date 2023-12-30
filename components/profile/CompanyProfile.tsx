import {
  PencilIcon,
  MapPinIcon,
  PhoneIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  IdentificationIcon,
  DocumentIcon,
} from '@heroicons/react/24/outline'
import { type Company } from '@prisma/client'
import AvatarIcon from '../AvatarIcon'
import { phone as phoneFormat, ci as ciFormat } from '@/lib/utils/text'
import Link from 'next/link'

interface Props {
  company: Company & {
    location: {
      title: string
    }
  }
}

export default function CompanyProfile({ company }: Props) {
  const {
    name,
    description,
    email,
    phone,
    image,
    location,
    certification,
    rif,
  } = company

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
              </div>
            </div>
            <Link href="/home/profile/update">
              <button className="btn btn-block sm:w-auto btn-primary hover:bg-white hover:text-neutral-600 hover:border-primary">
                <PencilIcon className="h-5 w-5" />
                Editar perfil
              </button>
            </Link>
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
            <p>{ciFormat(rif)}</p>
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
            <p>{phoneFormat(phone)}</p>
          </li>
        </ul>
      </div>
      <div className="col-span-full card gap-3 bg-white p-4 shadow-md border border-zinc-300 text-sm">
        <div className="flex items-center gap-3 mb-2">
          <DocumentIcon className="h-6 w-6 text-neutral-700" />
          <h4 className="text-xl font-bold">RIF</h4>
        </div>
        <img
          src={certification}
          alt="RIF"
        />
      </div>
    </div>
  )
}
