'use client'

import { url } from '@/lib/utils/url'

export default function DownloadBackup() {
  async function download() {
    const response = await fetch(url('/api/backups'))
    const content = await response.text()
    const blob = new Blob([content])

    const blobUrl = URL.createObjectURL(blob)
    const a = document.createElement('a')

    a.href = blobUrl
    a.download = 'Respaldo de Base de Datos - Novaship.sql'
    a.click()

    URL.revokeObjectURL(blobUrl)
  }

  return (
    <button onClick={download} type="submit" className="btn btn-primary btn-block mt-4">
      Respaldar base de datos
    </button>
  )
}
