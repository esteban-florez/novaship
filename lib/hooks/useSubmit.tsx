import SubmitAlert from '@/components/forms/SubmitAlert'
import { type HTTP_METHOD } from 'next/dist/server/web/http'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { type ApiResponseBody, type UseSubmitResult } from '../types'
import { handleError } from '../errors/fetch'
import { type FieldValues, useForm, type DefaultValues } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type ZodType } from 'zod'
import ServerErrors from '@/components/forms/ServerErrors'

interface UseSubmitOptions<Fields> {
  schema: ZodType
  asFormData?: boolean
  defaultValues?: DefaultValues<Fields>
  refreshOnSuccess?: boolean
  append?: object
  method?: HTTP_METHOD
  onSuccess?: () => void | Promise<void>
  onError?: () => void | Promise<void>
}

export default function useSubmit<Fields extends FieldValues>({
  method, append, schema, defaultValues, asFormData = false,
  onSuccess, onError, refreshOnSuccess = false,
}: UseSubmitOptions<Fields>) {
  const [showAlert, setShowAlert] = useState(true)
  const [showErrors, setShowErrors] = useState(true)
  const [result, setResult] = useState<UseSubmitResult>(null)
  const router = useRouter()

  const useFormReturn = useForm<Fields>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
    defaultValues,
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
          formData.append(key, value)
        })

        requestBody = formData
      } else {
        requestBody = JSON.stringify(requestData)
      }

      const form = event?.target as HTMLFormElement
      const response = await fetch(form.action, {
        body: requestBody,
        method: method ?? form.method,
      })

      if (response.redirected) {
        router.push(response.url)
        return
      }

      const body = await response.json() as ApiResponseBody

      if (response.ok) {
        if (refreshOnSuccess) {
          router.refresh()
        }

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
  return { ...useFormReturn, handleSubmit, alert, result, serverErrors }
}
