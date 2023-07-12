'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'

export default function GoBackBtn({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <button
      onClick={() => {
        router.back()
      }} className="btn-primary btn-sm btn border-none px-6"
    >
      <ArrowLeftIcon className="h-6 w-6" />
      {children}
    </button>
  )
}
