'use client'

import { useState } from 'react'
import CompanyForm from './CompanyForm'
import InstituteForm from './InstituteForm'
import UserForm from './UserForm'
import ProfileButton from './ProfileButton'
import ProfessionalForm from './ProfessionalForm'

export default function ProfileForms() {
  const [selectedForm, setSelectedForm] = useState<ProfileFormsType>('profile')

  const forms: Record<ProfileFormsType, React.ReactNode> = {
    profile: <UserForm />,
    company: <CompanyForm />,
    institute: <InstituteForm />,
    professional: <ProfessionalForm />,
  }

  return (
    <>
      <div className="tabs tabs-boxed mb-6 items-center">
        <ProfileButton
          form="profile"
          selectedForm={selectedForm}
          setSelectedForm={setSelectedForm}
        >
          Perfil personal
        </ProfileButton>
        <ProfileButton
          form="professional"
          selectedForm={selectedForm}
          setSelectedForm={setSelectedForm}
        >
          Perfil profesional
        </ProfileButton>
        <ProfileButton
          form="company"
          selectedForm={selectedForm}
          setSelectedForm={setSelectedForm}
        >
          Perfil de empresa
        </ProfileButton>
        <ProfileButton
          form="institute"
          selectedForm={selectedForm}
          setSelectedForm={setSelectedForm}
        >
          Perfil de institución
        </ProfileButton>
      </div>
      {forms[selectedForm]}
    </>
  )
}
