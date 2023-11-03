'use client'

import { PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type Props = React.PropsWithChildren<{
  internshipId: string
}>

export default function RecruitButton({ internshipId }: Props) {
  return (
    <Link
      href={`/home/internship/recruit/${internshipId}/create`}
      className="btn btn-primary"
    >
      <PlusIcon className="w-5 h-5" />
      Enviar solicitud
    </Link>
  )
}
