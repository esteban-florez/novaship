'use client'

import SelectTable from '@/components/admin/SelectTable'
import clsx from 'clsx'
// import { type Metadata } from 'next'
import { useState } from 'react'

// RANT -> documentarnos bien, me incluyo, nos pasa mucho
// export const metadata: Metadata = {
//   title: 'Administración',
// }

export default function AdminPage() {
  const [switchButton, setSwitchButton] = useState<'companies' | 'institutes'>('institutes')
  // RANT -> ejemplo de variable mal nombrada
  // RANT -> ejemplo de uso innecesario de Client Component y useState
  return (
    <div className="m-4 rounded-md bg-neutral-100">
      <div className="flex flex-row items-center justify-between border bg-gray-100 p-4">
        <h2 className="text-2xl font-bold">Área administrativa</h2>
        <div className="join">
          <button
            onClick={() => { setSwitchButton('institutes') }}
            className={clsx('btn-sm join-item btn px-6', switchButton === 'institutes' && 'btn-primary')}
          >
            Instituciones
          </button>
          <button
            onClick={() => { setSwitchButton('companies') }}
            className={clsx('btn-sm join-item btn px-6', switchButton === 'companies' && 'btn-primary')}
          >
            Empresas
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="indent-3 text-lg font-semibold">Peticiones de registro</h3>
        <SelectTable selected={switchButton} />
      </div>
    </div>
  )
}
