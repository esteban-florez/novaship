'use client'
import { SessionProvider as Provider } from 'next-auth/react'

export default function SessionProvider({ children }: React.PropsWithChildren) {
  return (
    <Provider>
      {children}
    </Provider>
  )
}
