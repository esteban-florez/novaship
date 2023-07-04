import Notification from './Notification'

export default function NotificationDropdownMenu() {
  return (
    <ul
      onClick={(e) => {
        e.stopPropagation()
      }}
      className="absolute left-0 top-16 z-50 flex w-full flex-col whitespace-normal rounded-lg border border-gray-600 bg-neutral sm:left-auto sm:right-0 sm:top-14 sm:w-auto sm:max-w-xs md:right-0"
    >
      <li className="mb-2 bg-primary p-4 shadow">
        <h3 className="text-white">Notificaciones</h3>
      </li>

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

      <li className="border-t border-gray-600 py-4 hover:bg-neutral-focus">
        <span className="text-secondary hover:text-primary">Ver más</span>
      </li>
    </ul>
  )
}
