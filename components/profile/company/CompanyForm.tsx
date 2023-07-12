'use client'

import { useState } from 'react'
import Toast from '@/components/Toast'
import ButtonSection from '../ButtonSection'
import PersonalSection from './PersonalSection'
import ContactSection from './ContactSection'
import GoBackBtn from '@/components/GoBackBtn'

export default function InsituteForm() {
  const [showAlert, setShowAlert] = useState('none')

  const handleCloseToast = () => {
    setShowAlert('none')
  }

  const FORM_STATUS: Record<string, JSX.Element | null> = {
    sending: <Toast type="info" message="Su perfil está siendo actualizado, espere unos momentos" onClose={handleCloseToast} />,
    failed: <Toast type="error" message="No se ha podido actualizar su perfil, intente de nuevo en unos momentos" onClose={handleCloseToast} />,
    succeded: <Toast type="success" message="Su perfil ha sido actualizado exitosamente" onClose={handleCloseToast} />,
    none: null,
  }

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
    <div className="w-full rounded-lg bg-base-100 p-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-bold">Perfil Empresarial</h2>
        <GoBackBtn>
          Volver al perfil
        </GoBackBtn>
      </div>
      <div className="divider divider-vertical mt-2" />
      <form method="POST" onSubmit={handleSubmit} action="/api/profile/company">
        {showAlert !== 'none' && FORM_STATUS[showAlert]}
        <PersonalSection />
        <ContactSection />
        <ButtonSection />
      </form>
    </div>
  )
}
