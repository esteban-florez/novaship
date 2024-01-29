'use client'

export default function DownloadBackup() {
  async function download() {
    const response = await fetch('/api/backups')
    const content = await response.text()
    const blob = new Blob([content])

    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')

    a.href = url
    a.download = 'Respaldo de Base de Datos - Novaship.sql'
    a.click()

    URL.revokeObjectURL(url)
  }

  return (
    <button onClick={download} type="submit" className="btn btn-primary btn-block mt-4">
      Respaldar base de datos
    </button>
  )
}
