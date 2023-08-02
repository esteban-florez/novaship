import Toast from '@/components/Toast'
import { type HTTP_METHOD } from 'next/dist/server/web/http'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface UseSubmitOptions {
  append?: Record<string, unknown>
  method?: HTTP_METHOD
}

type Result = null | 'loading' | {
  status: number
  body: object
}

const messages: Record<string | number, string> = {
  200: '¡Los datos se enviaron correctamente!',
  400: 'Hubo un error al envíar los datos, por favor intenta de nuevo...',
  422: 'Existe un error en los datos, por favor verifícalos...',
  500: 'Hubo un error en el servidor, intenta de nuevo más tarde...',
}

// REF -> esto podría ser un component de React más bien...
function getAlert(result: Result, setResult: (newState: Result) => void) {
  if (result === null) {
    return null
  }

  interface Alert {
    message: string
    type: 'loading' | 'success' | 'error'
  }

  const alert: Alert = {
    message: 'Enviando datos...',
    type: 'loading',
  }

  if (result !== 'loading') {
    alert.message = messages[result.status]
    alert.type = result.status === 200 ? 'success' : 'error'
  }

  return (
    <Toast
      type={alert.type}
      message={alert.message}
      onClose={() => { setResult(null) }}
    />
  )
}

export default function useSubmit<Fields>(options: UseSubmitOptions = {}) {
  const router = useRouter()
  const { method, append } = options
  const [result, setResult] = useState<Result>(null)

  const send = async (data: Fields, event: React.BaseSyntheticEvent | undefined) => {
    setResult('loading')
    const form = event?.target as HTMLFormElement

    const response = await fetch(form.action, {
      body: JSON.stringify({ ...data, ...append }),
      method: method ?? form.method,
    })

    const body = response.json()

    if (response.redirected) {
      router.push(response.url)
      return
    }

    setResult({
      status: response.status,
      body,
    })
  }

  const alert = getAlert(result, setResult)

  // TODO -> exponer los errores de validación que vengan del servidor...
  return { send, alert }
}
