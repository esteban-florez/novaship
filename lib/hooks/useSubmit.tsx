import SubmitAlert from '@/components/forms/SubmitAlert'
import { type HTTP_METHOD } from 'next/dist/server/web/http'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { type ApiResponseBody, type UseSubmitResult } from '../types'
import { handleError } from '../errors/fetch'
import { type FieldValues, useForm, type DefaultValues } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { any, type ZodType } from 'zod'
import ServerErrors from '@/components/forms/ServerErrors'
import { url } from '../utils/url'

interface UseSubmitOptions<Fields> {
  schema?: ZodType
  asFormData?: boolean
  defaultValues?: DefaultValues<Fields>
  append?: object
  method?: HTTP_METHOD
  onSuccess?: () => void | Promise<void>
  onError?: () => void | Promise<void>
  onSuccessRedirect?: () => void | Promise<void>
}

// TODO -> quizás esto está demasiado grande, maneja muchas cosas. Quizás sea más conveniente dividrlo en dos: componente <Form> que tenga el envío de la petición y muestre los resultados, etc. Y el hook useForm normalito que le pase las cosas al componente Form
export default function useSubmit<Fields extends FieldValues>(options?: UseSubmitOptions<Fields>) {
  const {
    method, append, schema, asFormData = false, onSuccess, onError, onSuccessRedirect,
  } = options ?? {}
  const [showAlert, setShowAlert] = useState(true)
  const [showErrors, setShowErrors] = useState(true)
  const [result, setResult] = useState<UseSubmitResult>(null)
  const router = useRouter()

  const useFormReturn = useForm<Fields>({
    mode: 'onTouched',
    resolver: zodResolver(schema ?? any()),
  })

  const send = async (values: Fields, event: React.BaseSyntheticEvent | undefined) => {
    try {
      setResult('loading')
      setShowAlert(true)
      setShowErrors(true)

      const requestData = { ...values, ...append }

      let requestBody
      if (asFormData) {
        const formData = new FormData()

        Object.entries(requestData).forEach(([key, value]) => {
          if (value === null) return

          formData.append(key, value)
        })

        requestBody = formData
      } else {
        requestBody = JSON.stringify(requestData)
      }

      const form = event?.target as HTMLFormElement
      const action = form.getAttribute('action')

      if (action === null) {
        throw new Error('El formulario no tiene action')
      }

      const response = await fetch(url(action).href, {
        body: requestBody,
        method: method ?? form.method,
      })

      if (response.redirected) {
        router.push(response.url)
        router.refresh()
        setResult(null)
        if (onSuccessRedirect !== undefined) {
          void onSuccessRedirect()
        }
        return
      }

      const body = await response.json() as ApiResponseBody

      if (response.ok) {
        console.log('refreshing')
        router.refresh()

        if (onSuccess !== undefined) {
          void onSuccess()
        }
      } else if (onError !== undefined) {
        void onError()
      }

      // TODO -> manejar errores de validación que vienen del Servidor
      const { errorType, errors, data } = body
      console.log('server error response: ', { errorType, errors, data })

      setResult(body)
    } catch (error) {
      const body = handleError(error)
      setResult(body)
    }
  }

  const serverErrors = result !== 'loading' && result !== null && showErrors
    ? (
      <ServerErrors
        errorRecord={result.errors} close={() => {
          setShowErrors(false)
          setShowAlert(false)
        }}
      />
      )
    : null

  const alert = showAlert
    ? <SubmitAlert result={result} close={() => { setShowAlert(false) }} />
    : null

  const handleSubmit = useFormReturn.handleSubmit(send)
  return { ...useFormReturn, handleSubmit, alert, loading: result === 'loading', serverErrors }
}
