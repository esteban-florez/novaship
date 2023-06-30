import { CloudArrowUpIcon } from '@heroicons/react/24/solid'
import InputSimple from '../forms/inputs/Input'

function TitleSection() {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 border-t border-neutral-content pt-4 last:mb-4 lg:flex-row lg:px-4">
      <div className="lg:form-control lg:w-2/4">
        <h2 className="mb-4 text-2xl font-semibold">Título</h2>
        <p className="text-sm">Indique su título de graduación para facilitar las postulaciones a ofertas laborales o proyectos.</p>
      </div>
      <div className="mt-4 lg:form-control lg:mt-0 lg:w-2/4">
        <InputSimple id="title" name="temp" type="text" placeholder="Ingeniero en Sistemas" label="Título" classes="w-full input input-md input-bordered focus:ring focus:ring-primary mb-3" />
      </div>
    </div>
  )
}

function DescriptionSection() {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 border-t border-neutral-content pt-4 last:mb-4 lg:flex-row lg:px-4">
      <div className="lg:form-control lg:w-2/4">
        <h2 className="mb-4 text-2xl font-semibold">Biografía</h2>
        <p className="text-sm">Describase como un posible empleado para una empresa.</p>
      </div>
      <div className="mt-4 lg:form-control lg:mt-0 lg:w-2/4">
        <label htmlFor="description" className="label">
          <span className="label-text">Biografía</span>
        </label>
        <textarea id="description" className="textarea w-full resize-none focus:ring focus:ring-primary" placeholder="Licenciado en contabilidad, basta experiencia en uso de herramientas financieras..." rows={10} />
      </div>
    </div>
  )
}

function ExperiencesSection() {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 border-t border-neutral-content pt-4 last:mb-4 lg:flex-row lg:px-4">
      <div className="lg:form-control lg:w-2/4">
        <h2 className="mb-4 text-2xl font-semibold">Experiencias</h2>
        <p className="text-sm">Indique su título de graduación para facilitar las postulaciones a ofertas laborales o proyectos.</p>
      </div>
      <div className="mt-4 lg:form-control lg:mt-0 lg:w-2/4">
        <InputSimple id="experiences" name="temp" type="text" placeholder="Ingeniero en Sistemas" label="Título" classes="w-full input input-md input-bordered focus:ring focus:ring-primary mb-3" />
      </div>
    </div>
  )
}

function CurriculumSection() {
  return (
    <div className="mb-8 mt-4 flex flex-col border-t border-neutral-content pt-4 lg:px-4">
      <div className="flex-row">
        <h2 className="mb-4 flex-row text-xl font-semibold sm:text-2xl">Currículum</h2>
      </div>
      <div className="w-full flex-row">
        <label htmlFor="image" className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-secondary bg-base-300 hover:bg-neutral-focus">
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <CloudArrowUpIcon className="h-10 w-10" />
            <p className="mb-2 text-xs font-semibold lg:text-sm">
              Haga clic para subir su currículum
            </p>
            <p className="text-xs">PNG o JPG (MAX. 800x400px)</p>
          </div>
          <input id="image" type="file" className="hidden" />
        </label>
      </div>
    </div>
  )
}

export default function ProfessionalForm() {
  return (
    <form className="w-full rounded-lg bg-neutral p-8 lg:px-16">
      <h2 className="mb-4 text-2xl font-bold">Perfil profesional</h2>
      <TitleSection />
      <DescriptionSection />
      <ExperiencesSection />
      <CurriculumSection />
      <div className="flex-center">
        <button type="submit" className="btn-primary btn-sm btn mb-3 mt-4 w-full lg:btn-wide">Actualizar datos</button>
      </div>
    </form>
  )
}
