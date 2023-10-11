'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

export default function BackBtn({ label = 'Cancelar' }: { label?: string }) {
  const { back } = useRouter()

  return (
    <button type="button" onClick={back} className="btn bg-gray-200 text-neutral-600 hover:bg-gray-300">
      <ArrowLeftIcon className="h-4 w-4" />
      {label}
    </button>
  )
}
