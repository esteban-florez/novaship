'use client'

import Loading from '@/components/Loading'
import FormSection from '@/components/forms/FormSection'
import InputSimple from '@/components/forms/inputs/Input'
import Textarea from '@/components/forms/inputs/Textarea'
import { useCurrentUser } from '@/hook/useCurrentUser'
import { User } from '@prisma/client'

interface PersonalDataProps {
  name: string
  surname: string
}

function NameAndSurnameSection({ name, surname }: PersonalDataProps) {
  return (
    <FormSection title="Datos personales" description="Esta es la información básica que aparecerá en su perfil y también la que será mostrada en ofertas laborales, pasantías o proyectos.">
      <InputSimple id="name" name="name" placeholder="Ej. José" label="Nombre" value={name} />
      <InputSimple id="surname" name="surname" placeholder="Ej. Mendoza" label="Apellido" value={surname} />
    </FormSection>
  )
}

interface ContactDataProps {
  email: string
  phone: string
  address: string
}

function ContactSection({ email, phone, address }: ContactDataProps) {
  return (
    <FormSection title="Medios de contacto" description="Facilite a los usuarios que veran su perfil información de contacto para comunicarse con usted.">
      <InputSimple id="email" name="email" type="email" placeholder="micorreo2@gmail.com" label="Correo electrónico" value={email} />
      <InputSimple id="phone" name="phone" type="tel" placeholder="0412-0000000" label="Teléfono" value={phone} />
      <InputSimple id="address" name="address" placeholder="Calle Félix Romeo cruce con Vertueno" label="Dirección" value={address} />
    </FormSection>
  )
}

interface BioDataProps {
  bio: string
}

function BiographySection({ bio }: BioDataProps) {
  return (
    <FormSection title="¿Que ofrezco?" description="Describa quien es, su experiencia laboral o que puede brindar a las empresas o proyectos.">
      <Textarea id="bio" name="bio" height={10} label="Sobre mí" placeholder="Cuento con años de experiencia..." value={bio} />
    </FormSection>
  )
}

type userState = User | null

export default function FormContent() {
  // Does 3 fetch per request, must fix
  const user = useCurrentUser() as userState

  return (
    <>
      {user === null && <Loading message="Su perfil está siendo cargado, por favor espere un momento." />}
      <h2 className="mb-4 text-2xl font-bold">Perfil Personal</h2>
      <NameAndSurnameSection name={user?.name ?? ''} surname={user?.surname ?? ''} />
      <ContactSection email={user?.email ?? ''} phone={user?.phone ?? ''} address={user?.address ?? ''} />
      <BiographySection bio={user?.bio ?? ''} />
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
