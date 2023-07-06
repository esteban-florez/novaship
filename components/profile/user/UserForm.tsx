'use client'

import PersonalSection from './PersonalSection'
import ContactSection from './ContactSection'
import BiographySection from './BiographySection'
import ButtonSection from './ButtonSection'
import { useEffect, useState } from 'react'
import Toast from '@/components/Toast'

const FORM_STATUS: Record<string, JSX.Element | null> = {
  sending: <Toast type="info" message="Su perfil está siendo actualizado, espere unos momentos." />,
  failed: <Toast type="error" message="No se ha podido actualizar su perfil, intente de nuevo en unos momentos." />,
  succeded: <Toast type="success" message="Su perfil ha sido actualizado exitosamente." />,
  none: null,
}

interface Props {
  name: string
  surname: string
  email: string
  phone: string
  address: string
  bio: string
}

export default function UserForm({ name, surname, email, phone, address, bio }: Props) {
  const [showAlert, setShowAlert] = useState('none')

  useEffect(() => {
    setTimeout(() => {
      setShowAlert('none')
    }, 10000)
  }, [showAlert])

  async function handleSubmit(event: FormSubmitEvent) {
    setShowAlert('sending')
    event.preventDefault()
    const form = event.target
    const { action } = form
    const formData = new FormData(form)

    const response = await fetch(action, {
      body: formData,
      method: 'PUT',
    })

    if (response.status === 401) {
      setShowAlert('failed')
    }

    // TODO -> error handling
    if (response.status === 200) {
      setShowAlert('succeded')
    }
  }

  return (
    <form method="POST" onSubmit={handleSubmit} action="/api/profile/user" className="w-full rounded-lg bg-base-100 p-4">
      {showAlert !== 'none' && FORM_STATUS[showAlert]}
      <h2 className="mb-4 text-2xl font-bold">Perfil Personal</h2>
      <PersonalSection name={name} surname={surname} />
      <ContactSection email={email} phone={phone} address={address} />
      <BiographySection bio={bio} />
      <ButtonSection />
    </form>
  )
}
