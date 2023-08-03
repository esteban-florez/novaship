export default function ScheduleSection() {
  return (
    <div className="mb-8 mt-4 flex flex-col gap-x-2 border-t pt-4 last:mb-4 lg:px-4">
      <div className="w-full flex-row lg:form-control">
        <h2 className="mb-4 text-2xl font-semibold">Horario</h2>
        <p className="pe-4">Indique su disponibilidad para que empresas o proyectos puedan tener un perfil más claro de usted.</p>
      </div>
      <div className="mt-4 w-full flex-row lg:form-control lg:mt-0">
        <div className="mt-6 overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="border-b-neutral-400">
                <th>Hora</th>
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
                <th>7:30 - 8:30 am</th>
                <th>Disponible</th>
                <th>Ocupado</th>
                <th>Disponible</th>
                <th>Ocupado</th>
                <th>Disponible</th>
                <th>Ocupado</th>
                <th>Ocupado</th>
              </tr>
              <tr className="hover border-b-base-300">
                <th>8:30 - 10:30 am</th>
                <th>Ocupado</th>
                <th>Ocupado</th>
                <th>Ocupado</th>
                <th>Disponible</th>
                <th>Disponible</th>
                <th>Ocupado</th>
                <th>Ocupado</th>
              </tr>
              <tr className="hover border-b-base-300">
                <th>10:30 - 12:00 pm</th>
                <th>Disponible</th>
                <th>Disponible</th>
                <th>Ocupado</th>
                <th>Ocupado</th>
                <th>Disponible</th>
                <th>Ocupado</th>
                <th>Ocupado</th>
              </tr>
              <tr className="hover border-b-base-300">
                <th>1:30 - 2:45 pm</th>
                <th>Disponible</th>
                <th>Disponible</th>
                <th>Ocupado</th>
                <th>Ocupado</th>
                <th>Disponible</th>
                <th>Disponible</th>
                <th>Disponible</th>
              </tr>
              <tr className="hover">
                <th>2:45 - 5:00 pm</th>
                <th>Ocupado</th>
                <th>Ocupado</th>
                <th>Ocupado</th>
                <th>Disponible</th>
                <th>Ocupado</th>
                <th>Disponible</th>
                <th>Ocupado</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
