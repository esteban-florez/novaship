import AvatarIcon from '@/components/AvatarIcon'
import GoBackBtn from '@/components/GoBackBtn'
import { UserCircleIcon } from '@heroicons/react/24/outline'

export default function ViewUserProfessionalPage() {
  return (
    <>
      <div className="m-4 flex justify-end rounded-md bg-white p-4">
        <GoBackBtn>Volver al perfil</GoBackBtn>
      </div>
      <div className="m-4 rounded-md bg-white p-4">
        <div className="flex w-full gap-4">
          <div className="flex-center max-h-80 w-full flex-col rounded-md border px-4 pb-4 shadow-lg transition-all hover:bg-gray-200 md:w-1/4">
            <UserCircleIcon className="h-2/3 w-2/3" />
            <h3 className="text-lg font-semibold">Marco Andrade</h3>
            <h5 className="hover:text-accent">Ing. Mecánico</h5>
            <button className="btn-primary btn-block btn-sm btn mt-3">Enviar mensaje</button>
          </div>
          <div className="w-full flex-col justify-center md:w-3/4">
            <div className="rounded-md border shadow-lg">
              <h4 className="rounded-t-md border-b bg-gray-100 p-4 indent-3 font-semibold">¿Quien soy?</h4>
              <p className="p-4">
                Experto en manejo de herramientas de ofimática, desarrollo e implementación de funciones complejas en Excel. Conocimientos avanzados de mecánica y electricidad.
              </p>
            </div>
            <div className="mt-4 rounded-md border shadow-lg">
              <h4 className="rounded-t-md border-b bg-gray-100 p-4 indent-3 font-semibold">Habilidades</h4>
              <div className="flex gap-8 p-4">
                <div className="flex-col">
                  <p className="hover:text-accent">Mecánica</p>
                  <p className="hover:text-accent">Electrónica</p>
                  <p className="hover:text-accent">Electricidad</p>
                </div>
                <div className="flex-col">
                  <p className="hover:text-accent">Excel</p>
                  <p className="hover:text-accent">Cocina</p>
                  <p className="hover:text-accent">Ciberseguridad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 rounded-md bg-white">
        <h3 className="rounded-t-md border bg-gray-100 p-4 indent-3 text-lg font-bold">Horario de disponibilidad</h3>
        <div className="mt-2 overflow-x-auto px-4 pb-4">
          <table className="table">
            <thead>
              <tr className="bg-gray-200">
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
      <div className="m-4 rounded-md bg-white">
        <div className="w-full">
          <h2 className="mb-2 rounded-t-md border bg-gray-100 p-4 text-lg font-bold">Comentarios (3)</h2>
          <div className="mb-4 w-full p-4">
            <textarea rows={4} className="w-full resize-none rounded-t-md border bg-gray-100 p-2 text-sm outline-none" placeholder="Deje un comentario..." required />
            <div className="p-3">
              <button className="btn-info btn text-white">
                Enviar comentario
              </button>
            </div>
          </div>
        </div>
        <div className="divider mx-auto w-3/4" />
        <div className="mt-3 flex w-full p-4">
          <AvatarIcon username="EC" bg="bg-gray-400" />
          <div className="flex-col">
            <h6 className="p-2 text-sm">
              <span className="font-bold">Electrodomésticos Carmen</span>
              <span> - Publicado el 19 de marzo de 2023.</span>
            </h6>
            <p className="rounded-lg border p-4">
              Ciertamente todo lo que menciona en su perfil lo ha demostrado, es trabajador y dispone de un amplio avanico de destrezas y conocimientos que le permiten crecer profesionalmente, además de, proveer las mejores soluciones al problema.
            </p>
          </div>
        </div>
        <div className="mt-3 flex w-full p-4">
          <AvatarIcon username="DS" bg="bg-gray-400" />
          <div className="flex-col">
            <h6 className="p-2 text-sm">
              <span className="font-bold">Distribuidora Solcenaga</span>
              <span> - Publicado el 5 de abril de 2023.</span>
            </h6>
            <p className="rounded-lg border p-4">
              Tuvimos una muy buena experiencia con este usuario satisfaciendo las necesidades previstas e incluso apoyando a otros empleados en su tiempo libre.
            </p>
          </div>
        </div>
        <div className="mt-3 flex w-full p-4">
          <AvatarIcon username="DA" bg="bg-gray-400" />
          <div className="flex-col">
            <h6 className="p-2 text-sm">
              <span className="font-bold">Distribuidora Altamira</span>
              <span> - Publicado el 19 de abril de 2023.</span>
            </h6>
            <p className="rounded-lg border p-4">
              Hasta la fecha ningún inconveniente, muy trabajador y aplicado, cumple todas las tareas planteadas en su jornada laboral.
            </p>
          </div>
        </div>
        <p className="rounded-b-lg border bg-gray-100 p-4 text-center text-lg font-bold">Fin de los comentarios</p>
      </div>
    </>
  )
}
