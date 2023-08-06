import SearchInput from '@/components/SearchInput'

type Props = React.PropsWithChildren<{
  setStep: (step: string) => void
}>

export default function ThemePreferences({ setStep }: Props) {
  return (
    <>
      <h2 className="text-xl font-bold md:text-3xl">
        ¡Expora tu <span className="text-primary">pasiones</span> y elige los temas que más te <span className="text-secondary">interesen</span>!
      </h2>
      <p className="text-base">
        Para ofrecer una mejor experiencia necesitamos conocer tus preferencias.
      </p>
      <div className="mx-auto w-full pt-4">
        <div className="flex justify-end">
          <SearchInput />
        </div>
        {/* hacer funcional este coso del carrusel */}
        <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1" />
        <div className="flex justify-between">
          <button onClick={() => { setStep('photoProfile') }} type="button" className="btn-neutral btn mt-4">
            Volver
          </button>
          <button onClick={() => { setStep('userCalendar') }} type="button" className="btn-primary btn mt-4">
            Siguiente
          </button>
        </div>
      </div>
    </>
  )
}
