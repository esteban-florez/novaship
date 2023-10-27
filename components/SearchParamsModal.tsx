import { param } from '@/lib/utils/search-params'
import Modal from './modal/Modal'
import Link from 'next/link'

const modalsData: Record<string, { title: string, message: string } | undefined> = {
  registered: {
    title: '¡Te has registrado con éxito!',
    message: 'Ahora debes esperar a que los administradores de la aplicación verifiquen tu cuenta. Este proceso puede llevar un par de días.',
  },
  unverified: {
    title: 'Tu cuenta está en proceso de verificación...',
    message: 'Debes esperar a que los administradores verifiquen tu cuenta antes de iniciar sesión. Este proceso puede llevar un par de días.',
  },
  forgot: {
    title: '¡Te hemos enviado un correo!',
    message: 'Hemos enviado un enlace a tu correo electrónico para que puedas recuperar tu contraseña.',
  },
  notvalid: {
    title: 'Usuario no encontrado...',
    message: 'No hemos encontrado a ningún usuario con el correo electrónico que ingresaste.',
  },
  changedpass: {
    title: '¡Has actualizado tu contraseña!',
    message: 'Ahora puedes iniciar sesión usando tu nueva contraseña.',
  },
}

type Props = SearchParamsProps & React.PropsWithChildren<{
  page: string
}>

export default function SearchParamsModal({ searchParams, page }: Props) {
  const modalParam = param(searchParams.modal) ?? ''
  const modalData = modalsData[modalParam]

  return (
    modalData !== undefined
      ? (
        <Modal forceOpen>
          <h3 className="font-bold text-primary text-center text-2xl">
            {modalData.title}
          </h3>
          <p className="mt-4">{modalData.message}</p>
          <Link className="btn btn-primary mt-4" href={page}>
            Aceptar
          </Link>
        </Modal>
        )
      : null
  )
}
