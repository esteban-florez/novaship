'use client'

import FormSection from '@/components/forms/FormSection'
import InputSimple from '@/components/forms/inputs/Input'
import Textarea from '@/components/forms/inputs/Textarea'

function NameAndSurnameSection() {
  return (
    <FormSection title="Datos personales" description="Esta es la información básica que aparecerá en su perfil y también la que será mostrada en ofertas laborales, pasantías o proyectos.">
      <InputSimple id="name" name="name" placeholder="Ej. José" label="Nombre" />
      <InputSimple id="surname" name="surname" placeholder="Ej. Mendoza" label="Apellido" />
    </FormSection>
  )
}

function ContactSection() {
  return (
    <FormSection title="Medios de contacto" description="Facilite a los usuarios que veran su perfil información de contacto para comunicarse con usted.">
      <InputSimple id="email" name="email" type="email" placeholder="micorreo2@gmail.com" label="Correo electrónico" />
      <InputSimple id="phone" name="phone" type="tel" placeholder="0412-0000000" label="Teléfono" />
      <InputSimple id="address" name="address" placeholder="Calle Félix Romeo cruce con Vertueno" label="Dirección" />
    </FormSection>
  )
}

function BiographySection() {
  return (
    <FormSection title="¿Que ofrezco?" description="Describa quien es, su experiencia laboral o que puede brindar a las empresas o proyectos.">
      <Textarea id="bio" name="bio" height={10} label="Sobre mí" placeholder="Cuento con años de experiencia..." />
    </FormSection>
  )
}

export default function FormContent() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold">Perfil Personal</h2>
      <NameAndSurnameSection />
      <ContactSection />
      <BiographySection />
      <div className="flex-center">
        <button
          type="submit"
          className="btn-primary btn-sm btn mb-3 mt-4 w-full lg:btn-wide"
        >
          Actualizar datos
        </button>
      </div>
    </>
  )
}
