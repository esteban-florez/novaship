'use client'

import { useEffect, useState } from 'react'
import Toast from '@/components/Toast'
import ButtonSection from '../ButtonSection'
import PersonalSection from './PersonalSection'
import ContactSection from './ContactSection'

const FORM_STATUS: Record<string, JSX.Element | null> = {
  sending: <Toast type="info" message="Su perfil está siendo actualizado, espere unos momentos." />,
  failed: <Toast type="error" message="No se ha podido actualizar su perfil, intente de nuevo en unos momentos." />,
  succeded: <Toast type="success" message="Su perfil ha sido actualizado exitosamente." />,
  none: null,
}

export default function InsituteForm() {
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
    const { action, method } = form
    const formData = new FormData(form)

    const response = await fetch(action, {
      body: formData,
      method,
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
    <form method="POST" onSubmit={handleSubmit} action="/api/profile/institute" className="w-full rounded-lg bg-base-100 p-4">
      {showAlert !== 'none' && FORM_STATUS[showAlert]}
      <h2 className="mb-4 text-2xl font-bold">Perfil Institucional</h2>
      <PersonalSection />
      <ContactSection />
      <ButtonSection />
    </form>
  )
}
