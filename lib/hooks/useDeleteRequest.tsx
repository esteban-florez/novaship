import { useState } from 'react'
import { handleError } from '../errors/fetch'
import { type ApiResponseBody, type UseSubmitResult } from '../types'
import { type FieldValues, useForm } from 'react-hook-form'
import ServerErrors from '@/components/forms/ServerErrors'
import SubmitAlert from '@/components/forms/SubmitAlert'

export default function useDeleteRequest() {
  const [showAlert, setShowAlert] = useState(true)
  const [showErrors, setShowErrors] = useState(true)
  const [result, setResult] = useState<UseSubmitResult>(null)

  const useFormReturn = useForm({
    mode: 'onTouched',
  })

  const send = async (data: FieldValues, event: React.BaseSyntheticEvent | undefined) => {
    try {
      setResult('loading')
      setShowAlert(true)
      setShowErrors(true)

      const form = event?.target as HTMLFormElement
      const id = form.action.split('/').at(-1)

      const response = await fetch(form.action, {
        body: JSON.stringify({ id }),
        method: 'DELETE',
      })

      const body = await response.json() as ApiResponseBody

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
