'use client'

import Modal from '@/components/modal/Modal'
import { url } from '@/lib/utils/url'
import { useState } from 'react'

export default function LoginInfoModal() {
  const [open, setOpen] = useState(true)

  function close() {
    void fetch(url('/api/login-info'), {
      method: 'POST',
    })

    setOpen(false)
  }

  return (
    <Modal forceOpen={open}>
      <h3 className="font-bold text-primary text-center text-2xl">
        ¡Bienvenido a Novaship!
      </h3>
      <p className="mt-4">Esta es una demo de la aplicación <a className="text-primary font-semibold underline" href="https://github.com/esteban-florez/novaship" target="__blank" rel="noopener noreferrer">Novaship</a>, desarrollada como proyecto universitario por <a className="text-primary font-semibold underline" href="https://portfolio-esteban-florez-projects.vercel.app" target="__blank" rel="noopener noreferrer">Esteban Florez</a>, <a className="text-primary font-semibold underline" href="https://portfolio-alpha-five-27.vercel.app/es/" target="__blank" rel="noopener noreferrer">Jesús de Freitas</a> y <a className="text-primary font-semibold underline" href="https://github.com/MariYaqueno" target="__blank" rel="noopener noreferrer">Myriam Yaqueno</a>.</p>
      <button className="btn btn-primary mt-4" type="button" onClick={close}>Aceptar</button>
    </Modal>
  )
}
