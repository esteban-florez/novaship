import Notification from './Notification'

export default function NotificationDropdownMenu() {
  return (
    <div className="dropdown-content z-10 rounded-lg border border-base-200 bg-white shadow-md">
      <div className="mb-2 rounded-t-lg bg-primary p-4 text-white shadow">
        <h3 className="text-center font-semibold uppercase">Notificaciones</h3>
      </div>
      <Notification username="Martin Max" time={5}>
        Has sido aceptado para la vacante de la empresa "BeautifulDreams", contáctese con nosotros para más información
      </Notification>
      <Notification username="APP" time={27}>
        Se han publicado nuevas ofertas de trabajo, echa un vistazo
      </Notification>
      <Notification username="APP" time={57}>
        Se ha actualizado la app, dale un vistazo a los nuevos cambios
      </Notification>
      <Notification username="Andrea Samirez" time={17}>
        Le ha dado like a tu perfil
      </Notification>
      <Notification username="APP" time={0}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit quas beatae, iusto consequuntur nesciunt ut. Eius ab, labore, dolores soluta et repellat, iure quis minima doloribus esse molestias velit
      </Notification>
      <button className="w-full rounded-b-lg border-t border-base-300 py-4 text-center hover:bg-base-300">
        <span className="font-bold text-primary">Ver más</span>
      </button>
    </div>
  )
}
