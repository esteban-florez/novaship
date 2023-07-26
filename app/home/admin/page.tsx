import SelectTable from '@/components/admin/SelectTable'
import clsx from 'clsx'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Administración',
}

export default function AdminPage() {
  const selectedTable = 'companies'
  // TODO -> pasar a layout + 2 pages
  return (
    <div className="m-4 rounded-md bg-neutral-100">
      <div className="flex flex-row items-center justify-between border bg-gray-100 p-4">
        <h2 className="text-2xl font-bold">Área administrativa</h2>
        <div className="join">
          <button
            className={clsx('btn-sm join-item btn px-6')}
          >
            Instituciones
          </button>
          <button
            className={clsx('btn-sm join-item btn px-6', selectedTable === 'companies' && 'btn-primary')}
          >
            Empresas
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="indent-3 text-lg font-semibold">Peticiones de registro</h3>
        <SelectTable selected={selectedTable} />
      </div>
    </div>
  )
}
