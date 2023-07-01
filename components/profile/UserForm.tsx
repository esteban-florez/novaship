import { useRouter } from 'next/navigation'
import FormContent from './form/user/FormContent'
import Alert from '../Alert'
import { useEffect, useState } from 'react'

export default function UserForm() {
  const router = useRouter()
  const [profileIsUpdated, setProfileIsUpdated] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setProfileIsUpdated(false)
    }, 5000)
  }, [profileIsUpdated])

  async function handleSubmit(event: FormSubmitEvent) {
    event.preventDefault()
    const form = event.target
    const { action } = form
    const formData = new FormData(form)

    const response = await fetch(action, {
      body: formData,
      method: 'PUT',
    })

    if (response.status === 401) {
      router.push('/profile?UserNotFound')
    }

    // TODO -> error handling
    if (response.status === 200) {
      setProfileIsUpdated(true)
      router.push('/profile?updatedUserProfile')
    }
  }

  return (
    // TODO -> client-side form validation
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form method="POST" onSubmit={handleSubmit} action="/api/profile" className="w-full rounded-lg bg-neutral p-8 lg:px-16">
      {profileIsUpdated && <Alert type="success" message="Su perfil ha sido actualizado exitosamente." />}
      <FormContent />
    </form>
  )
}
