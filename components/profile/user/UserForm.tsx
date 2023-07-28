'use client'

import PersonalSection from './PersonalSection'
import ContactSection from './ContactSection'
import BiographySection from './BiographySection'
import { useState } from 'react'
import Toast from '@/components/Toast'
import ButtonSection from '../ButtonSection'
import { type Person } from '@prisma/client'

interface Props {
  user: Person | null
}

export default function UserForm({ user }: Props) {
  const { name, phone, address, bio, email } = user ?? {}
  const [showAlert, setShowAlert] = useState<null | 'loading' | 'error' | 'success'>(null)

  const handleCloseToast = () => {
    setShowAlert(null)
  }

  // DRY 2 -> repeticion de codigo
  const FORM_STATUS: Record<string, JSX.Element | null> = {
    loading: <Toast type="info" message="Su perfil está siendo actualizado, espere unos momentos" onClose={handleCloseToast} />,
    error: <Toast type="error" message="No se ha podido actualizar su perfil, intente de nuevo en unos momentos" onClose={handleCloseToast} />,
    success: <Toast type="success" message="Su perfil está siendo actualizado, espere unos momentos" onClose={handleCloseToast} />,
  }

  async function handleSubmit(event: FormSubmitEvent) {
    setShowAlert('loading')
    event.preventDefault()
    const form = event.target
    const { action } = form
    const formData = new FormData(form)

    const response = await fetch(action, {
      body: formData,
      method: 'PUT',
    })

    if (response.status === 401) {
      setShowAlert('error')
    }

    // TODO -> error handling
    if (response.status === 200) {
      setShowAlert('success')
    }
  }

  return (
    <form method="POST" onSubmit={handleSubmit} action="/api/profile/user" className="w-full rounded-lg bg-base-100 p-4">
      {showAlert !== null && FORM_STATUS[showAlert]}
      <h2 className="text-2xl font-bold">Perfil Personal</h2>
      <div className="divider divider-vertical mt-2" />
      <PersonalSection name={name ?? ''} />
      <ContactSection email={email ?? ''} phone={phone ?? ''} address={address ?? ''} />
      <BiographySection bio={bio ?? ''} />
      <ButtonSection />
    </form>
  )
}
