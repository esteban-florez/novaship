import { param } from '@/lib/utils/search-params'
import Modal from './modal/Modal'
import Link from 'next/link'

const modalsData: Record<
string,
{ title: string, message: string } | undefined
> = {
  registered: {
    title: '¡Se has registrado con éxito!',
    message:
      'Ahora debe esperar a que los administradores de la aplicación verifiquen su cuenta. Este proceso puede llevar un par de días.',
  },
  unverified: {
    title: 'Su cuenta está en proceso de verificación...',
    message:
      'Debe esperar a que los administradores verifiquen su cuenta antes de iniciar sesión. Este proceso puede llevar un par de días.',
  },
  forgot: {
    title: '¡Le hemos enviado un correo!',
    message:
      'Hemos enviado un enlace a su correo electrónico para que pueda recuperar su contraseña.',
  },
  notvalid: {
    title: 'Usuario no encontrado...',
    message:
      'No hemos encontrado a ningún usuario con el correo electrónico que ingresó.',
  },
  changedpass: {
    title: '¡Ha actualizado su contraseña!',
    message: 'Ahora puedes iniciar sesión usando su nueva contraseña.',
  },
  blocked: {
    title: 'Su cuenta ha sido bloqueada...',
    message:
      'Ha ingresado incorrectamente su contraseña demasiadas veces. Le hemos enviado un enlace a su correo para que puedas restaurar su contraseña.',
  },
}

type Props = SearchParamsProps &
React.PropsWithChildren<{
  page: string
}>

export default function SearchParamsModal({ searchParams, page }: Props) {
  const modalParam = param(searchParams.modal) ?? ''
  const modalData = modalsData[modalParam]

  return modalData !== undefined
    ? (
      <Modal forceOpen>
        <h3 className="font-bold text-primary text-center text-2xl">
          {modalData.title}
        </h3>
        <p className="mt-4">{modalData.message}</p>
        <Link
          className="btn btn-primary mt-4"
          href={page}
        >
          Aceptar
        </Link>
      </Modal>
      )
    : null
}
