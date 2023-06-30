import { useRouter } from 'next/navigation'
import FormContent from './form/user/FormContent'

export default function UserForm() {
  const router = useRouter()

  async function handleSubmit(event: FormSubmitEvent) {
    event.preventDefault()
    const form = event.target
    const { action } = form
    const formData = new FormData(form)

    const response = await fetch(action, {
      body: formData,
      method: 'PUT',
    })

    // TODO -> error handling
    if (response.status === 200) {
      router.push('/profile?updatedUserProfile')
    }
  }

  return (
    // TODO -> client-side form validation
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form method="POST" onSubmit={handleSubmit} action="/api/auth/profile" className="w-full rounded-lg bg-neutral p-8 lg:px-16">
      <FormContent />
    </form>
  )
}
