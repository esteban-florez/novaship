import FormSection from '@/components/forms/FormSection'

export default function ScheduleSection() {
  return (
    <FormSection title="Horario" description="Indique su disponibilidad para que empresas o proyectos puedan tener un perfil más claro de usted.">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="border-b-neutral-400">
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
              <th>Sábado</th>
              <th>Domingo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover border-b-base-300">
              <th />
              <th />
              <th />
              <th />
              <th />
              <th />
              <th />
            </tr>
            <tr className="hover border-b-base-300">
              <th />
              <th />
              <th />
              <th />
              <th />
              <th />
              <th />
            </tr>
            <tr className="hover border-b-base-300">
              <th />
              <th />
              <th />
              <th />
              <th />
              <th />
              <th />
            </tr>
            <tr className="hover border-b-base-300">
              <th />
              <th />
              <th />
              <th />
              <th />
              <th />
              <th />
            </tr>
            <tr className="hover">
              <th />
              <th />
              <th />
              <th />
              <th />
              <th />
              <th />
            </tr>
          </tbody>
        </table>
      </div>
    </FormSection>
  )
}
