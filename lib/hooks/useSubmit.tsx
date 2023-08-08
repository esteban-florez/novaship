import SubmitAlert from '@/components/forms/SubmitAlert'
import { type HTTP_METHOD } from 'next/dist/server/web/http'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { type ApiResponseBody, type UseSubmitResult } from '../types'
import { handleError } from '../errors/fetch'

interface UseSubmitOptions {
  append?: Record<string, unknown>
  method?: HTTP_METHOD
}

// TODO -> este hook debería envolver a useForm() para que sea más facil de usar.
export default function useSubmit<Fields>(options: UseSubmitOptions = {}) {
  const [result, setResult] = useState<UseSubmitResult>(null)
  const { method, append } = options
  const router = useRouter()

  const send = async (data: Fields, event: React.BaseSyntheticEvent | undefined) => {
    try {
      setResult('loading')

      const form = event?.target as HTMLFormElement

      const response = await fetch(form.action, {
        body: JSON.stringify({ ...data, ...append }),
        method: method ?? form.method,
      })

      if (response.redirected) {
        router.push(response.url)
        return
      }

      const body = response.json() as ApiResponseBody
      setResult({ body })
    } catch (error) {
      const body = handleError(error)
      setResult({ body })
    }
  }

  const alert = <SubmitAlert result={result} reset={() => { setResult(null) }} />

  // TODO -> exponer los errores de validación que vengan del servidor, y mostrarlos mediante este hook al usuario de alguna manera.
  return { send, alert }
}
