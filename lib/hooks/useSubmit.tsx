import SubmitAlert from '@/components/forms/SubmitAlert'
import { type HTTP_METHOD } from 'next/dist/server/web/http'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { type ApiResponseBody, type UseSubmitResult } from '../types'
import { handleError } from '../errors/fetch'
import { type FieldValues, useForm, type DefaultValues, type Path, type PathValue } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type ZodType } from 'zod'
import ServerErrors from '@/components/forms/ServerErrors'

interface UseSubmitOptions<Fields> {
  schema: ZodType
  defaultValues?: DefaultValues<Fields>
  refreshOnSuccess?: boolean
  append?: object
  method?: HTTP_METHOD
  onSuccess?: () => void | Promise<void>
  onError?: () => void | Promise<void>
}

export default function useSubmit<Fields extends FieldValues>({
  method, append, schema, defaultValues,
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
  const { setValue, trigger } = useFormReturn

  const send = async (data: Fields, event: React.BaseSyntheticEvent | undefined) => {
    try {
      setResult('loading')
      setShowAlert(true)
      setShowErrors(true)

      const form = event?.target as HTMLFormElement
      const response = await fetch(form.action, {
        body: JSON.stringify({ ...data, ...append }),
        method: method ?? form.method,
      })
      const body = await response.json() as ApiResponseBody

      if (response.redirected) {
        router.push(response.url)
        return
      }

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

      if (body.errorType === 'VALIDATION' && body.errors !== undefined) {
        const keys = Object.keys(body.errors) as Array<Path<Fields>>

        keys.forEach(key => {
          const value = body.data?.[key] as PathValue<Fields, Path<Fields>>
          setValue(key, value)
        })

        void trigger()
      }

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
