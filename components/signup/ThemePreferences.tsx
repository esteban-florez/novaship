import SearchInput from '../SearchInput'

export default function ThemePreferences({setStep}) {
  return (
    <>
      <h2 className="text-center font-title text-2xl font-bold md:text-4xl">
        Elige tus temas de interés
      </h2>
      <div className="mx-auto w-full pt-4">
        <div className="flex justify-end">
          <SearchInput />
        </div>
        {/* crear componentes de checkbox */}
        <label className="label cursor-pointer">
          <span className="label-text">Diseño Gráfico</span>
          <input type="checkbox" className="checkbox" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text">Mecánica</span>
          <input type="checkbox" className="checkbox" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text">Medicina</span>
          <input type="checkbox" className="checkbox" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text">Periodismo</span>
          <input type="checkbox" className="checkbox" />
        </label>
        <div className="flex justify-between">
          <button onClick={() => setStep('photoProfile')} type="button" className="btn-neutral btn mt-4">
            Volver
          </button>
          <button onClick={() => setStep('userCalendar')} type="button" className="btn-primary btn mt-4">
            Siguiente
          </button>
        </div>
      </div>
    </>
  )
}
