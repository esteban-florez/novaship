import PageTitle from '@/components/PageTitle'
import DownloadBackup from './DownloadBackup'
import UploadBackup from './UploadBackup'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base de datos',
}

export default async function BackupsPage() {
  return (
    <>
      <PageTitle
        title="Base de datos"
        subtitle="Aquí puede realizar respaldo y recuperación de la base de datos."
      />
      <section className="flex flex-col lg:flex-row justify-center p-4 w-fit mx-auto gap-4">
        <div className="bg-white rounded-lg p-4 mx-auto shadow">
          <h3 className="font-bold tracking-tighter text-2xl text-center mb-0">
            Respaldo de base de datos
          </h3>
          <p className="alert bg-gray-200 border border-gray-900 text-base max-w-sm mx-auto mt-2 block">
            <b>Recomendación: </b>
            Después de descargar el respaldo, guárdelo en un sitio seguro en su
            computadora.
          </p>
          <DownloadBackup />
        </div>
        <div className="bg-white rounded-lg p-4 mx-auto shadow">
          <h3 className="font-bold tracking-tighter text-2xl text-center mb-0">
            Restauración de base de datos
          </h3>
          <p className="alert bg-red-100 text-red-600 border border-red-500 text-base max-w-sm mx-auto mt-2 block">
            <b>Atención: </b>
            Se perderán todos los cambios realizados a la base de datos desde la
            fecha del respaldo subido.
          </p>
          <UploadBackup />
        </div>
      </section>
    </>
  )
}
