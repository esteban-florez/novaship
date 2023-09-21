# Discusiones

- ¿Los proyectos podrían crear ofertas de trabajo? De lo contrario... ¿Como sería la captación de nuevos miembros de proyecto? ¿Cual sería el incentivo para que las personas se unan a un proyecto?
- R: No crearían ofertas de trabajo, simplemente se unirían o serían invitados al proyecto.

- ¿Las personas deberían marcar una opción de "En busca de empleo"? ¿O siempre están en busca de empleo por defecto?
- R: Al registrarse podrán decir si están o no en busca de empleo, y luego podrán cambiarlo en su perfil.

- La posibilidad de cambiar lo de "Comercialización de proyectos", por "Portfolio" de proyectos. Y en vez de "comprarte" un proyecto, lo que hagan es ver los proyectos que has creado y contratarte a ti directamente para que crees un nuevo proyecto.
- R: Si, se contratarían a empresas o equipos de trabajo. Desde un proyecto se podrá ver su autor y contratarlo, o desde el perfil se podrán ver los proyectos creados y contratarlo. Se muestran separados los proyectos creados de las colaboraciones.

- Y hablando de equipos de trabajo. Eso no serían más bien una entidad en sí misma? Podría cambiar un poco la perspectiva de la aplicación. Es decir, no solamente los equipos de trabajo se crean cuando se crea un proyecto, sino que un equipo de trabajo es una entidad propia que puede realizar varios proyectos, ser contratado, comunicarse entre sí mediante la aplicación, etc.
- R: Si, vean el diagramita. Para crear proyectos es obligatorio vincularlo a un equipo de trabajo. Si no existe, se crea uno cuyo único miembro es el Líder de Proyecto.
  Equipos de trabajo
  - Lider -> Persona o Empresa
  - Miembros -> Personas
  - Crean proyectos
  - Pueden ser contratados
  - Tienen un chat

- Las instituciones no hacen mucho realmente en la aplicación. ¿No podríamos eliminar las cuentas institucionales, y más bien hacer que para registrarte como pasante tengas que llenar un formato que nosotros proporcionemos, y subirlo sellado y firmado por la institución en la que estudias? No se si es mejor o más engorroso.

- ¿Como podrían funcionar las pasantías, por si acaso no las quitamos?
- R: Basicamente todo empieza por la institución que crea la pasantía, con el trabajo, categoría, horas, etc. Y agrega la persona. Luego la persona deberá confirmar que va a realizar la pasantía, y quedará registrada la pasantía para ser descubierta por empresas. Luego pueden pasar dos cosas:

1. Que una empresa quiera reclutar al pasante, para lo cual le manda una solicitud que el pasante deba aceptar, y si este acepta, empieza el proceso de pasantía.

2. Que sea el pasante el que busque una "oferta de pasantes", igualmente mandando una solicitud. Si la empresa acepta, empieza el proceso de pasantía.

La pasantía empieza, la empresa debe ir registrado la cantidad de horas completadas por el pasante. Cuando haya completado todas las horas, finalizará el proceso de pasantías y se marcará como completada. El estudiante y la institución serán notificados de ello.

- ¿Como funcionaría la contratación de equipos en detalle (paso a paso)?

- ¿Como se crean los equipos de una sola persona?
- R: La creación de equipos de una sola persona solo ocurre cuando vas a crear un proyecto y no quieres vincularlo a ningún equipo, sino que deseas que seas el unico que trabaje en dicho proyecto. En el formulario de creación de proyecto, deberías tener un radio para elegir, con dos opciones: "Vincular a uno de mis equipos" (opción predeterminada) y "Proyecto personal". Dependiendo de la seleccionada, se debe mostrar u ocultar el select de equipos. Luego, en el back-end se debe chequear el valor del radio enviado, para determinar si se crea un nuevo equipo y el proyecto, o el proyecto vinculado a un equipo existente.
