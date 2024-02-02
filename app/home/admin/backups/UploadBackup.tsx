'use client'
import useAlert from '@/lib/hooks/useAlert'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'

export default function UploadBackup() {
  const inputRef = useRef<HTMLInputElement>(null)
  const { showAlert, hideAlert } = useAlert()
  const router = useRouter()

  function handleClick() {
    hideAlert()
    if (inputRef.current === null) return
    inputRef.current.click()
  }

  async function upload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.item(0)

    if (file == null) return

    const response = await fetch('/api/backups', {
      method: 'POST',
      body: file,
    })

    if (!response.ok) {
      showAlert('backup_failed')
      return
    }

    router.push('/auth/login?alert=backup_success')
  }

  return (
    <form action="/api/backups" method="POST">
      <input type="file" hidden ref={inputRef} onChange={upload} />
      <button onClick={handleClick} type="button" className="btn btn-error btn-block mt-4">
        Restaurar base de datos
      </button>
    </form>
  )
}
