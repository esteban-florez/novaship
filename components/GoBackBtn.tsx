'use client'

import { useRouter } from 'next/navigation'

export default function GoBackBtn({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <button
      onClick={() => {
        router.back()
      }} className="btn-primary btn-wide btn"
    >
      {children}
    </button>
  )
}
