'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

export default function GoBackBtn({ label = 'Cancelar' }: { label?: string }) {
  const router = useRouter()

  return (
    <button type="button" onClick={() => { router.back() }} className="btn bg-white text-neutral-600 hover:bg-neutral-200 border-neutral-300 hover:border-neutral-500">
      <ArrowLeftIcon className="h-4 w-4" />
      {label}
    </button>
  )
}
