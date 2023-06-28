import InputSimple from '../InputSimple'
import { CloudArrowUpIcon } from '@heroicons/react/24/solid'

function ImageInput() {
  return (
    <div className="mb-8 flex w-full items-center justify-center">
      <label htmlFor="companyImage" className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-secondary bg-base-300 hover:bg-neutral-focus">
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <CloudArrowUpIcon className="h-10 w-10" />
          <p className="mb-2 text-xs font-semibold lg:text-sm">
            Haga clic para subir una imagen
          </p>
          <p className="text-xs">PNG o JPG (MAX. 800x400px)</p>
        </div>
        <input id="companyImage" type="file" className="hidden" />
      </label>
    </div>
  )
}

function NameSection() {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 border-t border-neutral-content pt-4 last:mb-4 lg:flex-row lg:px-4">
      <div className="lg:form-control lg:w-2/4">
        <h2 className="mb-4 text-2xl font-semibold">Nombre y correo</h2>
        <p className="text-sm">Añada el nombre de su empresa, recuerde colocarlo como fue registrado legalmente.</p>
      </div>
      <div className="mt-4 lg:form-control lg:mt-0 lg:w-2/4">
        <InputSimple id="companyName" type="text" label="Nombre" placeholder="Distribuidora y comcercializadora Santander" classes="w-full input input-md input-primary mb-3" />
        <InputSimple id="companyEmail" type="email" label="Correo electrónico" placeholder="correoempresarial@gmail.com" classes="w-full input input-md input-primary" />
      </div>
    </div>
  )
}

function DescriptionSection() {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 border-t border-neutral-content pt-4 last:mb-4 lg:flex-row lg:px-4">
      <div className="lg:form-control lg:w-2/4">
        <h2 className="mb-4 text-2xl font-semibold">Descripción</h2>
        <p className="text-sm">Describa la empresa ¿Quienes son? ¿Qué hacen? ¿Que ofrecen?.</p>
      </div>
      <div className="mt-4 lg:form-control lg:mt-0 lg:w-2/4">
        <label htmlFor="bio" className="label">
          <span className="label-text">Descripción</span>
        </label>
        <textarea id="bio" className="textarea w-full resize-none border-primary" placeholder="Nuestra empresa busca proveer de..." rows={10} />
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 border-t border-neutral-content pt-4 last:mb-4 lg:flex-row lg:px-4">
      <div className="lg:form-control lg:w-2/4">
        <h2 className="mb-4 text-2xl font-semibold">Formas de contacto</h2>
        <p className="text-sm">Añada como pueden comunicarse con su empresa.</p>
      </div>
      <div className="mt-4 lg:form-control lg:mt-0 lg:w-2/4">
        <label htmlFor="phone" className="label">
          <span className="label-text">Teléfono</span>
        </label>
        <div className="join w-full">
          <select className="select join-item border-primary">
            <option disabled selected>Código</option>
            <option>0412</option>
            <option>0414</option>
            <option>0416</option>
            <option>0424</option>
            <option>0426</option>
          </select>
          <div className="w-full">
            <div>
              <input id="companyPhone" type="tel" className="input-bordered input-primary input input-md join-item mb-3 w-full" placeholder="12345678" minLength={8} maxLength={8} />
            </div>
          </div>
        </div>
        <InputSimple id="companyAddress" type="text" label="Dirección" placeholder="Urb. Santander" classes="w-full input input-md input-primary mb-3" />
        <InputSimple id="companyCountry" type="text" label="País" placeholder="Venezuela" classes="w-full input input-md input-primary" />
      </div>
    </div>
  )
}

function CertificationSection() {
  return (
    <div className="mb-8 mt-4 flex w-full items-center justify-center border-t border-neutral-content pt-4">
      <label htmlFor="certificationFile" className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-secondary bg-base-300 hover:bg-neutral-focus">
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <CloudArrowUpIcon className="h-10 w-10" />
          <p className="mb-2 text-xs font-semibold lg:text-sm">
            Haga clic para subir su RIF
          </p>
          <p className="text-xs">PDF</p>
        </div>
        <input id="certificationFile" type="file" className="hidden" />
      </label>
    </div>
  )
}

export default function CompanyForm() {
  return (
    <form className="w-full rounded-lg bg-neutral p-8 lg:px-16">
      <h2 className="mb-4 border-b text-2xl font-bold">Compañía</h2>
      <ImageInput />
      <NameSection />
      <DescriptionSection />
      <ContactSection />
      <CertificationSection />
      <div className="flex-center">
        <button type="submit" className="btn-primary btn-sm btn mb-3 mt-4 w-full lg:btn-wide">Actualizar datos</button>
      </div>
    </form>
  )
}
