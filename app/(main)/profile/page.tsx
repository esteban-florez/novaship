'use client'

import CompanyForm from '@/components/profile/CompanyForm'
import InstituteForm from '@/components/profile/InstituteForm'
import UserForm from '@/components/profile/UserForm'
import { type Metadata } from 'next'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Perfil',
}

export default function ProfilePage() {
  const [profileFormIsOpen, setProfileFormIsOpen] = useState(true)
  const [companyFormIsOpen, setCompanyFormIsOpen] = useState(false)
  const [instituteFormIsOpen, setInstituteFormIsOpen] = useState(false)

  const btnActive = 'w-full sm:w-2/6 grid h-20 bg-primary rounded-box place-items-center'
  const btnInactive = 'w-full sm:w-2/6 grid h-20 bg-neutral hover:bg-primary rounded-box place-items-center'

  return (
    <section className="my-4 p-4 lg:px-16 lg:py-8">
      <div className="mb-6 flex w-full flex-col gap-4 sm:flex-row">
        <button
          onClick={() => {
            setProfileFormIsOpen(!profileFormIsOpen)
            setInstituteFormIsOpen(false)
            setCompanyFormIsOpen(false)
          }} className={`${profileFormIsOpen ? btnActive : btnInactive}`}
        >
          <h5 className="font-bold">Perfil personal</h5>
        </button>
        <button
          onClick={() => {
            setCompanyFormIsOpen(!companyFormIsOpen)
            setInstituteFormIsOpen(false)
            setProfileFormIsOpen(false)
          }} className={`${companyFormIsOpen ? btnActive : btnInactive}`}
        >
          <h5 className="font-bold">Perfil de empresa</h5>
        </button>
        <button
          onClick={() => {
            setInstituteFormIsOpen(!instituteFormIsOpen)
            setCompanyFormIsOpen(false)
            setProfileFormIsOpen(false)
          }} className={`${instituteFormIsOpen ? btnActive : btnInactive}`}
        >
          <h5 className="font-bold">Perfil de institución</h5>
        </button>
      </div>
      {profileFormIsOpen && <UserForm />}
      {companyFormIsOpen && <CompanyForm />}
      {instituteFormIsOpen && <InstituteForm />}
    </section>
  )
}
