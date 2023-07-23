'use client'

import { useState } from 'react'
import Toast from '@/components/Toast'
import ButtonSection from '../ButtonSection'
import PersonalSection from './PersonalSection'
import ContactSection from './ContactSection'
import GoBackBtn from '@/components/GoBackBtn'

export default function InsituteForm() {
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
    <div className="w-full rounded-lg bg-base-100 p-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-bold">Perfil Empresarial</h2>
        <GoBackBtn>
          Volver al perfil
        </GoBackBtn>
      </div>
      <div className="divider divider-vertical mt-2" />
      <form method="POST" onSubmit={handleSubmit} action="/api/profile/company">
        {showAlert !== null && FORM_STATUS[showAlert]}
        <PersonalSection />
        <ContactSection />
        <ButtonSection />
      </form>
    </div>
  )
}
