'use client'

import { useState } from 'react'
import Toast from '@/components/Toast'
import TitleSection from './TitleSection'
import ButtonSection from '../ButtonSection'
import AboutMeSection from './AboutMeSection'
import ExperienceSection from './ExperienceSection'
import { type Profile } from '@prisma/client'
import ScheduleSection from './ScheduleSection'

type Props = Pick<Profile, 'title' | 'description'>

export default function ProfessionalForm({ title, description }: Props) {
  const [showAlert, setShowAlert] = useState('none')

  const handleCloseToast = () => {
    setShowAlert('none')
  }

  const FORM_STATUS: Record<string, JSX.Element | null> = {
    sending: <Toast type="info" message="Su perfil está siendo registrado, espere unos momentos" onClose={handleCloseToast} />,
    failed: <Toast type="error" message="No se ha podido actualizar su perfil, intente de nuevo en unos momentos" onClose={handleCloseToast} />,
    succeded: <Toast type="success" message="Su perfil ha sido actualizado exitosamente" onClose={handleCloseToast} />,
    none: null,
  }

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
    <form method="POST" onSubmit={handleSubmit} action="/api/profile/professional" className="w-full rounded-lg bg-base-100 p-4">
      {showAlert !== 'none' && FORM_STATUS[showAlert]}
      <h2 className="mb-4 text-2xl font-bold">Perfil Profesional</h2>
      <TitleSection title={title} />
      <AboutMeSection description={description} />
      <ExperienceSection />
      <ScheduleSection />
      <ButtonSection />
    </form>
  )
}
