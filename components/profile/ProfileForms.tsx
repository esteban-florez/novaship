import { useState } from 'react'
import CompanyForm from './CompanyForm'
import InstituteForm from './InstituteForm'
import UserForm from './UserForm'
import ProfileButton from './ProfileButton'

export default function ProfileForms() {
  const [selectedForm, setSelectedForm] = useState<ProfileFormsType>('profile')

  const forms: Record<ProfileFormsType, React.ReactNode> = {
    profile: <UserForm />,
    company: <CompanyForm />,
    institute: <InstituteForm />,
  }

  return (
    <>
      <div className="mb-6 flex w-full flex-col gap-4 sm:flex-row">
        <ProfileButton
          form="company"
          selectedForm={selectedForm}
          setSelectedForm={setSelectedForm}
        >
          Perfil personal
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
