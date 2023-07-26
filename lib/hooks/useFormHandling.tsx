import Toast from '@/components/Toast'
import { type HTTP_METHOD } from 'next/dist/server/web/http'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface UseFormOptions {
  append?: Record<string, string>
  method?: HTTP_METHOD
  onError?: () => void
  onSuccess?: () => void
}

function getFields(elements: FormControls, append: Record<string, string>) {
  const fields = elements.reduce<Record<string, string>>((data, element) => {
    data[element.name] = element.value
    return data
  }, {})

  return {
    ...fields,
    ...append,
  }
}

function getStatus(response: Response) {
  return response.ok ? 'success' : 'error'
}

export default function useFormHandling(options: UseFormOptions = {}) {
  const router = useRouter()
  const { append = {}, onError = null, onSuccess = null, method = null } = options
  const CONTROLS_SELECTOR = 'input, select, textarea'
  const [response, setResponse] = useState<Response | null | 'loading'>(null)

  async function handleSubmit(event: FormSubmitEvent) {
    event.preventDefault()
    setResponse('loading')

    // DEV -> delay para poder ver el loading state
    await new Promise(resolve => setTimeout(resolve, 1000))

    const form = event.target
    const elements = [...form.querySelectorAll(CONTROLS_SELECTOR)] as FormControls
    const { action, method: formMethod } = form
    const fields = getFields(elements, append)

    const response = await fetch(action, {
      method: method ?? formMethod, body: JSON.stringify(fields),
    })

    if (response.redirected) {
      router.push(response.url)
    }

    setResponse(response)
    if (onError !== null) {
      onError()
    }
    if (onSuccess !== null) {
      onSuccess()
    }
  }

  const messages = {
    loading: 'Enviando...',
    error: 'Hubo un error, intente de nuevo.',
    success: 'Enviado con éxito.',
  }

  const status: FormStatus | null = response instanceof Response ? getStatus(response) : response

  return {
    status,
    loading: status === 'loading',
    success: status === 'success',
    error: status === 'success',
    onSubmit: handleSubmit,
    alert: status !== null && (
      <Toast
        type={status}
        message={messages[status]}
        onClose={() => { setResponse(null) }}
      />
    ),
  }
}
