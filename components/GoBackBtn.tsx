'use client'

import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import Button from './Button'

export default function GoBackBtn() {
  const router = useRouter()

  return (
    <div className="mt-2">
      <Button
        color="WHITE"
        hover="SECONDARY"
        onClick={() => { router.back() }}
      >
        <ArrowLeftCircleIcon className="h-5 w-5" />
        Volver atrás
      </Button>
    </div>
  )
}
