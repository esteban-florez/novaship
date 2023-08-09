import { ArrowUpTrayIcon, DocumentIcon } from '@heroicons/react/24/solid'

export default function RifStep({ goBack, goNext }: StepProps) {
  return (
    <>
      <h2 className="text-xl font-bold md:text-3xl">
        ¡Valida el <span className="text-primary">éxito</span> de tu <span className="text-secondary">empresa</span>!
      </h2>
      <p className="text-base">
        Esto permitirá que los postulantes tengan plena confianza
        de tu trayectoria empresarial.
      </p>
      <div className="mx-auto w-full pt-4">
        <div className="flex h-64 w-full items-center justify-center rounded-lg bg-base-300">
          <DocumentIcon className="h-52 w-52 text-zinc-500/60" />
        </div>
        <label className="label mt-3 flex cursor-pointer justify-center rounded-lg bg-base-300">
          <div className="flex flex-row items-center gap-3 py-1">
            <ArrowUpTrayIcon className="h-6 w-6" />
            <p className="text-center text-xl font-semibold">Subir RIF</p>
          </div>
          <input type="file" className="file-input w-full" hidden />
        </label>
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
