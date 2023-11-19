'use client'
import { createContext, useEffect, useState } from 'react'
import Toast from './Toast'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { alerts } from '@/lib/alerts'

const error = () => {
  throw new Error('You are using useAlert outside its context.')
}

interface AlertContextI {
  showAlert: (alert: string) => void
  hideAlert: () => void
}

export const AlertContext = createContext<AlertContextI>({
  showAlert: error, hideAlert: error,
})

function getAlertData(alert: string | null) {
  if (alert === null) return

  return alerts[alert]
}

// TODO -> el alert del delete se sobrepone al url params
export default function Alert({ children }: React.PropsWithChildren) {
  const router = useRouter()
  const pathname = usePathname()
  const alertParam = useSearchParams().get('alert')
  const [alert, setAlert] = useState<string | null>(null)
  const alertData = getAlertData(alert ?? alertParam)

  useEffect(() => {
    setAlert(null)
  }, [pathname])

  const resetParams = () => {
    if (alertParam !== null) {
      router.push(pathname)
      router.refresh()
    }
  }

  const hideAlert = () => {
    resetParams()
    if (alert !== null) {
      setAlert(null)
    }
  }

  const showAlert = (alert: string) => {
    resetParams()
    setAlert(alert)
  }

  return (
    <>
      {(alertData !== undefined) && (
        <Toast message={alertData.message} type={alertData.type} onClose={hideAlert} />
      )}
      <AlertContext.Provider value={{ showAlert, hideAlert }}>
        {children}
      </AlertContext.Provider>
    </>
  )
}
