import { ArrowUpTrayIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { SignUpContext } from '../../SignUpContext'

export default function PhotoProfile() {
  const { register, errors, goBack, goNext } = useContext(SignUpContext)

  return (
    <>
      <h2 className="text-center text-xl font-bold md:text-3xl">
        ¡Ponle <span className="text-primary">cara</span> a tu <span className="text-secondary">perfil</span>!
      </h2>
      <p className="text-base">
        La primera impresión cuenta, sube una foto que transmita confianza y profesionalismo.
      </p>
      <div className="mx-auto w-full pt-4">
        <div className="flex h-64 w-full items-center justify-center rounded-lg bg-base-300">
          <PhotoIcon className="h-52 w-52 text-zinc-500/60" />
        </div>
        <label className="label mt-3 flex cursor-pointer justify-center rounded-lg bg-base-300">
          <div className="flex flex-row items-center gap-3 py-1">
            <ArrowUpTrayIcon className="h-6 w-6" />
            <p className="text-center text-xl font-semibold">Subir foto</p>
          </div>
          <input type="file" className="file-input w-full" hidden {...register('image')} />
        </label>
        {errors.image !== undefined && (
          <p className="text-sm font-semibold text-error">
            {errors.image.message as string}
          </p>
        )}
        <div className="flex justify-between">
          <button onClick={goBack} type="button" className="btn-neutral btn mt-4">
            Volver
          </button>
          <button onClick={goNext} type="button" className="btn-primary btn mt-4">
            Siguiente
          </button>
        </div>
      </div>
    </>
  )
}