import { useState } from 'react'
import { handleError } from '../errors/fetch'
import { type ApiResponseBody, type UseSubmitResult } from '../types'
import ServerErrors from '@/components/forms/ServerErrors'
import SubmitAlert from '@/components/forms/SubmitAlert'
import { useRouter } from 'next/navigation'

export default function useDeleteRequest() {
  const router = useRouter()
  const [showAlert, setShowAlert] = useState(true)
  const [showErrors, setShowErrors] = useState(true)
  const [result, setResult] = useState<UseSubmitResult>(null)

  const handleSubmit = async (event: FormSubmitEvent) => {
    try {
      event.preventDefault()
      setResult('loading')
      setShowAlert(true)
      setShowErrors(true)

      const form = event?.target

      const response = await fetch(form.action, {
        method: 'DELETE',
      })

      if (response.redirected) {
        router.push(response.url)
        router.refresh()
        return
      }

      const body = await response.json() as ApiResponseBody

      setResult(body)
    } catch (error) {
      console.log(error)
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

  return { handleSubmit, alert, result, serverErrors }
}
