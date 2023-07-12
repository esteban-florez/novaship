'use client'

import SelectTable from '@/components/admin/SelectTable'
import { type Metadata } from 'next'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Administración',
}

export default function AdminPage() {
  const [switchButton, setSwitchButton] = useState<'companies' | 'institutes'>('institutes')

  const activeClasses = 'join-item btn btn-sm btn-primary px-6'
  const inactiveClasses = 'join-item btn btn-sm px-6'

  return (
    <div className="m-4 rounded-md bg-neutral-100">
      <div className="flex flex-row items-center justify-between border bg-gray-100 p-4">
        <h2 className="text-2xl font-bold">Área administrativa</h2>
        <div className="join">
          <button onClick={() => { setSwitchButton('institutes') }} className={switchButton === 'institutes' ? activeClasses : inactiveClasses}>Instituciones</button>
          <button onClick={() => { setSwitchButton('companies') }} className={switchButton === 'companies' ? activeClasses : inactiveClasses}>Empresas</button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="indent-3 text-lg font-semibold">Peticiones de registro</h3>
        <SelectTable selected={switchButton} />
      </div>
    </div>
  )
}
