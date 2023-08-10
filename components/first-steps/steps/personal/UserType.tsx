import Radio from '@/components/forms/inputs/Radio'
import { UserType as UserTypeEnum } from '@prisma/client'
import { userTypes as translation } from '@/lib/translations'
import { BuildingLibraryIcon, BuildingOffice2Icon, UserIcon } from '@heroicons/react/24/outline'

type UserTypeLiteral = keyof typeof UserTypeEnum

type Props = React.PropsWithChildren<{
  goNext: () => void
  userType: UserTypeLiteral | null
  setUserType: (string: UserTypeLiteral) => void
}>

export default function UserType({ userType, setUserType, goNext }: Props) {
  const descriptions = {
    COMPANY: '¡Contrata nuevos empleados y crea proyectos para impulsar el crecimiento y éxito de tu empresa!',
    INSTITUTE: 'Gestiona las pasantías de tus estudiantes para fortalecer su preparación profesional',
    PERSON: '¡Descubre ofertas de trabajo, crea tu perfil y encuentra tu camino al éxito profesional!',
  }

  const icons = {
    COMPANY: <BuildingOffice2Icon className="h-10 w-10 text-white" />,
    INSTITUTE: <BuildingLibraryIcon className="h-10 w-10 text-white" />,
    PERSON: <UserIcon className="h-10 w-10 text-white" />,
  }

  const options = Object.values(UserTypeEnum).map((type) => {
    const label = translation[type]
    return (
      <Radio
        name="type" key={type} value={type} label={label} icon={icons[type]}
        onInput={() => { setUserType(type) }} active={type === userType}
      >
        {descriptions[type]}
      </Radio>
    )
  })

  return (
    <>
      <h2 className="text-xl font-bold md:text-3xl">
        ¡Sé <span className="text-primary">parte</span> de nuestra <span className="text-secondary">plataforma</span>!
      </h2>
      <p className="text-base">
        Asegurate de seleccionar el tipo de usuario que mejor se adapte a tí.
      </p>
      <section className="mx-auto w-full pt-4">
        {options}
        <div className="mt-4 flex justify-between">
          <button onClick={goNext} type="button" className="btn-primary btn">
            Siguiente
          </button>
        </div>
      </section>
    </>
  )
}
