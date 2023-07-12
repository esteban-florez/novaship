'use client'

import { useState } from 'react'
import Toast from '@/components/Toast'
import ButtonSection from '../ButtonSection'
import PersonalSection from './PersonalSection'
import ContactSection from './ContactSection'
import { type Institute } from '@prisma/client'
import Link from 'next/link'
import { EyeIcon } from '@heroicons/react/24/outline'
import { type Metadata } from 'next'

type Props = Pick<Institute, 'name' | 'address' | 'description' | 'email' | 'phone'>

export const metadata: Metadata = {
  title: 'Registrar institución',
}

export default function InsituteForm({ name, address, description, email, phone }: Props) {
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
    <form method="POST" onSubmit={handleSubmit} action="/api/profile/institute" className="w-full rounded-lg bg-base-100 p-4">
      {showAlert !== 'none' && FORM_STATUS[showAlert]}
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-bold">Perfil Institucional</h2>
        <Link href="/user/profile/institute" className="btn-secondary btn-sm btn border-none px-6">
          <EyeIcon className="h-6 w-6" />
          Ver perfil
        </Link>
      </div>
      <div className="divider divider-vertical mt-2" />
      <PersonalSection name={name} description={description} />
      <ContactSection phone={phone} address={address} email={email} />
      <ButtonSection />
    </form>
  )
}
