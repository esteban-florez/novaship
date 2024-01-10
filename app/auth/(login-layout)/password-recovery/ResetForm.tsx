'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import Input from '@/components/forms/inputs/Input'
import { schema } from '@/lib/validation/schemas/reset'

type Props = React.PropsWithChildren<{
  resetId: string
}>

export default function ResetForm({ resetId }: Props) {
  const {
    alert, handleSubmit, register,
    formState: { errors }, serverErrors,
  } = useSubmit({ schema })

  return (
    <form action={`/api/auth/password-recovery?resetId=${resetId}`} method="POST" onSubmit={handleSubmit} className="mx-auto w-full pt-4">
      {serverErrors}
      {alert}
      <Input
        name="password"
        label="Nueva contraseña"
        placeholder="Ingrese su nueva contraseña..."
        type="password"
        register={register}
        errors={errors}
        maxlength={40}
      />
      <Input
        name="confirmation"
        label="Confirmar nueva contraseña"
        placeholder="Vuelva a ingresar su nueva contraseña..."
        type="password"
        register={register}
        errors={errors}
        maxlength={40}
      />
      <div className="flex flex-col gap-2">
        <button type="submit" className="btn-primary btn btn-md mt-4 w-full md:w-auto">
          Aceptar
        </button>
      </div>
    </form>
  )
}
