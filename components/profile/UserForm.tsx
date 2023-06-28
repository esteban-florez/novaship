import { CloudArrowUpIcon } from '@heroicons/react/24/solid'
import InputSimple from '../InputSimple'

function ImageSection() {
  return (
    <div className="mb-8 mt-4 flex flex-col border-t border-neutral-content pt-4 lg:px-4">
      <div className="flex-row">
        <h2 className="mb-4 flex-row text-xl font-semibold sm:text-2xl">Imagen</h2>
      </div>
      <div className="w-full flex-row">
        <label htmlFor="image" className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-secondary bg-base-300 hover:bg-neutral-focus">
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <CloudArrowUpIcon className="h-10 w-10" />
            <p className="mb-2 text-xs font-semibold lg:text-sm">
              Haga clic para subir una imagen
            </p>
            <p className="text-xs">PNG o JPG (MAX. 800x400px)</p>
          </div>
          <input id="image" type="file" className="hidden" />
        </label>
      </div>
    </div>
  )
}

function NameSection() {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 border-t border-neutral-content pt-4 last:mb-4 lg:flex-row lg:px-4">
      <div className="lg:form-control lg:w-2/4">
        <h2 className="mb-4 text-2xl font-semibold">Nombre y apellido</h2>
        <p className="text-sm">El nombre que aparecerá en su perfil y por el cual será registrado en ofertas laborales, paasntías o proyectos.</p>
      </div>
      <div className="mt-4 lg:form-control lg:mt-0 lg:w-2/4">
        <InputSimple id="name" type="text" placeholder="José" label="Nombre" value="Maximiliano" classes="w-full input input-md input-bordered focus:ring focus:ring-primary mb-3" />
        <InputSimple id="surname" type="text" placeholder="Mendoza" label="Apellido" value="Xavier" classes="w-full input input-md input-bordered focus:ring focus:ring-primary" />
      </div>
    </div>
  )
}

function CISection() {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 border-t border-neutral-content pt-4 last:mb-4 lg:flex-row lg:px-4">
      <div className="lg:form-control lg:w-2/4">
        <h2 className="mb-4 text-2xl font-semibold">Cédula</h2>
        <p className="text-sm">Parte de sus credenciales.</p>
      </div>
      <div className="mt-4 lg:form-control lg:mt-0 lg:w-2/4">
        <label htmlFor="ci" className="label">
          <span className="label-text">Cédula</span>
        </label>
        <div className="join w-full">
          <select className="select join-item focus:ring focus:ring-primary">
            <option selected>V</option>
            <option>E</option>
            <option>J</option>
            <option>G</option>
          </select>
          <div className="w-full">
            <div>
              <input id="ci" type="number" placeholder="12456125" className="input-bordered input input-md join-item mb-3 w-full focus:ring focus:ring-primary" maxLength={8} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function EmailSection() {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 border-t border-neutral-content pt-4 last:mb-4 lg:flex-row lg:px-4">
      <div className="lg:form-control lg:w-2/4">
        <h2 className="mb-4 text-2xl font-semibold">Correo y teléfono</h2>
        <p className="text-sm">Medios de comunicación que ofrece para que cualquier persona interesada en su perfil.</p>
      </div>
      <div className="mt-4 lg:form-control lg:mt-0 lg:w-2/4">
        <label htmlFor="phone" className="label">
          <span className="label-text">Teléfono</span>
        </label>
        <div className="join w-full">
          <select className="select join-item focus:ring focus:ring-primary">
            <option disabled selected>Código</option>
            <option>0412</option>
            <option>0414</option>
            <option>0416</option>
            <option>0424</option>
            <option>0426</option>
          </select>
          <div className="w-full">
            <div>
              <input id="phone" type="tel" className="input-bordered input input-md join-item mb-3 w-full focus:ring focus:ring-primary" placeholder="12345678" minLength={8} maxLength={8} />
            </div>
          </div>
        </div>
        <InputSimple id="email" type="email" placeholder="micorreo2@gmail.com" label="Correo electrónico" classes="w-full input input-md focus:ring focus:ring-primary" />
      </div>
    </div>
  )
}

function LocationSection() {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 border-t border-neutral-content pt-4 last:mb-4 lg:flex-row lg:px-4">
      <div className="lg:form-control lg:w-2/4">
        <h2 className="mb-4 text-2xl font-semibold">Ubicación</h2>
        <p className="text-sm">Donde puede ser localizado o contactado presencialmente.</p>
      </div>
      <div className="mt-4 lg:form-control lg:mt-0 lg:w-2/4">
        <InputSimple id="address" type="text" placeholder="Calle Félix Romeo cruce con Vertueno" label="Dirección" classes="w-full input input-md focus:ring focus:ring-primary mb-3" />
        <InputSimple id="country" type="text" placeholder="Bolivia" label="País" classes="w-full input input-md focus:ring focus:ring-primary" />
      </div>
    </div>
  )
}

function BiographySection() {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 border-t border-neutral-content pt-4 last:mb-4 lg:flex-row lg:px-4">
      <div className="lg:form-control lg:w-2/4">
        <h2 className="mb-4 text-2xl font-semibold">Biografía</h2>
        <p className="text-sm">Describa quien es, sus pasatiempos o preséntese a todos los que visiten su perfil.</p>
      </div>
      <div className="mt-4 lg:form-control lg:mt-0 lg:w-2/4">
        <label htmlFor="bio" className="label">
          <span className="label-text">Biografía</span>
        </label>
        <textarea id="bio" className="textarea w-full resize-none focus:ring focus:ring-primary" placeholder="Licenciado en contabilidad, basta experiencia en uso de herramientas financieras..." rows={10} />
      </div>
    </div>
  )
}

export default function UserForm() {
  return (
    <form className="w-full rounded-lg bg-neutral p-8 lg:px-16">
      <h2 className="mb-4 text-2xl font-bold">Perfil Personal</h2>
      <ImageSection />
      <NameSection />
      <CISection />
      <EmailSection />
      <LocationSection />
      <BiographySection />
      <div className="flex-center">
        <button type="submit" className="btn-primary btn-sm btn mb-3 mt-4 w-full lg:btn-wide">Actualizar datos</button>
      </div>
    </form>
  )
}
