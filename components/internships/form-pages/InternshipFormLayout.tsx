import FormSection from '@/components/forms/FormSection'

export default function InternshipFormLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md lg:w-2/3">
      <FormSection title="Datos de la pasantía" description="Ingresa la duración de la pasantía en horas, la carrera y las categorías a las que pertenece.">
        {children}
      </FormSection>
    </div>
  )
}
