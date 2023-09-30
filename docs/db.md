# Tablas de la DB
Todas las tablas poseen las siguientes columnas:
  - **id**: String aleatorio que identifica el registro.
  - **createdAt**: Fecha de creación.
  - **updatedAt**: Fecha de actualización.
  - **deletedAt**: Fecha de eliminación.

## AuthUser
Representa el modelo de autenticación. Solo una de las tres relaciones existe, las demás son *"null"*.

- **type**: Tipo de usuario (ver [UserType](#usertype)).
- [**Person**](#person): Persona relacionada.
- [**Company**](#company): Empresa relacionada.
- [**Institute**](#institute): Institución relacionada.

## Person
Representa a un usuario de tipo persona natural.

- **name**: Nombre y apellido.
- **email**: Correo electrónico.
- **ci**: Cédula.
- **birth**: Fecha de nacimiento.
- **gender**: Sexo.
- **image**: Enlace de la imagen de perfil.
- **phone**: Número telefónico.
- **description**: Biografía corta de la persona (Sobre mí).
- **employable**: Si es verdadero, la persona está buscando empleo (reclutable).
- **curriculum**: Enlace del currículum subido por la persona.
- **schedule**: Objeto JSON que representa el horario de disponibilidad.
- [**AuthUser**](#authuser): Tabla de autenticación.
- [**Location**](#location): Dirección.
- [**Membership[]**](#membership): "Membresías", que enlazan a la persona con un equipo [**(Team)**](#team).
- [**Category[]**](#category): Categorías laborales en las que se desenvuelve la persona.
- [**Grade[]**](#grade): Títulos obtenidos.
- [**Skill[]**](#skill): Habilidades.
- [**Job[]**](#job): Puestos de trabajo que busca la persona (en caso de que **employable** sea true).
- [**Experience[]**](#experience): Experiencias previas del usuario.
- [**Hiring[]**](#hiring): Contrataciones/postulaciones de la persona.
- [**Review[]**](#review): Reseñas realizadas por una empresa a la persona.
- [**Contract[]**](#contract): Contrataciones a equipos realizadas por la persona.
- [**Internship[]**](#internship): Pasantías de la persona.
- [**Invitation[]**](#invitation): Invitaciones a formar parte de equipos.
- [**Project[]**](#project): Proyectos personales.
- [**Leader[]**](#leader): "Líder", relaciona la persona con los equipos (ver [Team](#team)) de los cuales es líder.
- [**Participation[]**](#participation): Tareas en las que es participante.
- [**Task[]**](#task): Tareas de las cuales es responsable.
- [**Message[]**](#message): Mensajes enviados.

## Company
Representa un usuario de tipo empresa.

- **name**: Nombre de la empresa.
- **email**: Correo electrónico.
- **rif**: RIF de la empresa.
- **image**: Enlace de la imagen de perfil.
- **description**: Descripción corta sobre la empresa.
- **phone**: Número telefónico.
- **certification**: Enlace a la imagen del RIF para verificación.
- **verifiedAt**: Fecha de verificación de la cuenta empresarial.
- [**AuthUser**](#authuser): Tabla de autenticación.
- [**Location**](#location): Dirección.
- [**Offer[]**](#offer): Ofertas laborales publicadas por la empresa.
- [**Vacant[]**](#vacant): Ofertas para pasantías publicadas por la empresa.
- [**Review[]**](#review): Reseñas publicadas por la empresa en perfiles de personas.
- [**Internship[]**](#internship): Pasantías en la empresa.
- [**Leader[]**](#leader): "Líder", relaciona la empresa con los equipos (ver [Team](#team)) de los cuales es líder.
- [**Message[]**](#message): Mensajes enviados.

## Institute
Representa un usuario de tipo institución.

- **name**: Nombre de la institución.
- **email**: Correo electrónico.
- **rif**: RIF de la institución.
- **image**: Enlace de la imagen de perfil.
- **description**: Descripción corta sobre la institución.
- **phone**: Número telefónico.
- **certification**: Enlace a la imagen del RIF para verificación.
- **verifiedAt**: Fecha de verificación de la cuenta institucional.
- [**AuthUser**](#authuser): Tabla de autenticación.
- [**Location**](#location): Dirección.
- [**Internship[]**](#internship): Pasantías de la institución.

## Team
Representa un equipo de trabajo formado por personas, y liderado por una persona o una empresa.

- **name**: Nombre.
- **description**: Descripción.
- **featuredUntil**: Fecha hasta la cual el equipo estará destacado.
- [**Leader**](#leader): "Líder", relaciona al equipo con la persona/empresa que es el líder.
- [**Project[]**](#project): Proyectos creados por el equipo de trabajo.
- [**Invitation[]**](#invitation): Invitaciones a formar parte del equipo.
- [**Membership[]**](#membership): Miembros del equipo de trabajo, personas o empresa.
- [**Contract[]**](#contract): Contrataciones al equipo de trabajo por parte de una persona o empresa.
- [**Category[]**](#category): Categorías a las que pertenece el equipo.
- [**Message[]**](#message): Mensajes pertenecientes al chat del equipo.

## Leader
Representa el líder de un equipo de trabajo, ya sea persona o empresa.

- [**Person**](#person): Persona líder. Es *"null"* si el líder es una empresa.
- [**Company**](#company): Empresa líder. Es *"null"* si el líder es una persona.
- [**Team**](#team): Equipo del líder.

## Invitation
Representa una invitación por parte de un equipo a una persona para que sea miembro.

- **status**: Estado de la invitación (ver [Status](#status))
- [**Membership**](#membership): Miembro creado al aceptar la invitación. Es *"null"* si la invitación no fué aceptada.
- [**Team**](#team): Equipo que envía la invitación.
- [**Person**](#person): Persona invitada.

## Membership
Representa una persona miembro de un equipo de trabajo.

- [**Person**](#person): Persona miembro del equipo.
- [**Team**](#team): Equipo de trabajo al que pertenece el miembro.
- [**Invitation**](#invitation): Invitación mediante la cual se agregó el miembro.

## Contract
Representa la contratación de un equipo de trabajo para realizar un proyecto de una persona.

- **title**: Título del proyecto de la contratación.
- **description**: Descripción general del proyecto a realizar.
- **state**: Estado actual del contrato (ver [State](#state)).
- **price**: Precio a pagar por el proyecto.
- [**Project**](#project): Proyecto creado por la contratación. Es *"null"* si aún no se ha concretado la contratación.
- [**Team**](#team): Equipo que es contratado para el proyecto.
- [**Person**](#person): Persona que contrata al equipo.
- [**Feature[]**](#feature): Características del proyecto a realizar.
- [**Question[]**](#question): Preguntas realizadas por el equipo para aclarar dudas sobre el proyecto.

## Feature
Representa una característica del proyecto a realizar por un equipo contratado.

- **title**: Título.
- **description**: Descripción.
- [**Contract**](#contract): Contratación a la cual pertenece la característica.

## Question
Representa una pregunta realizada por el equipo de trabajo al que contrata para aclarar dudas sobre el proyecto o la contratación.

- **content**: Pregunta realizada.
- **answer**: Respuesta del que contrata. Es *"null"* si aún no ha respondido.
- [**Contract**](#contract): Contratación a la cual pertenece la pregunta.

## Project
Representa un proyecto vinculado a un persona (proyecto personal) o un equipo de trabajo.

- **title**: Título. 
- **description**: Descripción.
- **image**: Enlace a la imagen de portada del proyecto.
- **preview**: Enlace a una previsualización (demo).
- **visibility**: Visibilidad del proyecto (ver [Visibility](#visibility)).
- [**Person**](#person): Persona vinculada al proyecto. Es *"null"* si el proyecto fué vinculado a un equipo. 
- [**Team**](#team): Equipo de trabajo vinculado al proyecto. Es *"null"* si el proyecto vinculado a una persona. 
- [**Contract**](#contract): Contratación relacionada con el proyecto. Es *"null"* si el proyecto no está relacionado con ninguna contratación.
- [**Category[]**](#category): Categoría laboral a las que pertenece. 
- [**Task[]**](#task): Tareas en las que se divide.
- [**Message[]**](#message): Mensajes enviados en el chat de proyecto.
- [**File[]**](#file): Archivos subidos. 

## Task
Representa una tarea de un proyecto. Posee un responsable de tarea, que verifica su status y da revisiones.

- **title**: Título.
- **description**: Descripción.
- **status**: Estado de progreso (ver [TaskStatus](#taskstatus)). En caso de poseer subtareas, este campo es *"null"*, ya que depende del status de las subtareas.
- [**Project**](#project): Proyecto al que pertenece.
- [**Person**](#person): Persona responsable de la tarea.
- [**Subtask[]**](#subtask): Subtareas en las que se divide.
- [**Participation[]**](#participation): Participantes de la tarea, enlace con [Membership](#membership).
- [**Message[]**](#message): Mensajes enviados en el chat de tarea.
- [**Revision[]**](#revision): Revisiones de la tarea hechas por el responsable.

## Subtask
Representa una subtarea. El resposable y los participantes se heredan de la tarea padre.

- **title**: Título. 
- **description**: Descripción.
- **status**: Estado de progreso (ver [TaskStatus](#taskstatus)).
- [**Revision[]**](#revision): Revisiones de la subtarea hechas por el responsable.
- [**Task**](#task): Tarea padre.

## Revision
Representa una revisión de una tarea o subtarea.

- **content**: Texto de la revisión.
- [**Task**](#task): Tarea a la que pertenece. Es *"null"* si la revisión es de una subtarea.
- [**Subtask**](#subtask): Subtarea a la que pertenece. Es *"null"* si la revisión es de una tarea.

## Participation
Representa un miembro de equipo que es participante de una tarea.

- [**Person[]**](#person): Persona miembro del equipo de trabajo que participa en la tarea.
- [**Task[]**](#task): Tarea en la que participa.

## File
Archivo subido por algún miembro del equipo de trabajo a un proyecto en específico.

- **title**: Título.
- **src**: Enlace al archivo subido.
- [**Project**](#project): Proyecto al cual fué subido el archivo. 

## Offer
Representa una oferta laboral publicada por una empresa.

- **title**: Título.
- **description**: Descripción.
- **mode**: Modalidad de trabajo (ver [Mode](#mode)).
- **schedule**: Horario de trabajo (ver [Schedule](#schedule)).
- **hours**: Número de horas semanales. Opcional si se especifica un horario (**schedule**).
- **salary**: Sueldo en dolares por hora.
- **limit**: Límite de postulantes simultáneos a la oferta. Cuando se alcance el límite, la oferta se ocultará.
- **expiresAt**: Fecha de expiración de la oferta. Cuando llegue la fecha, la oferta se ocultará.
- **featuredUntil**: Fecha hasta la cual la oferta estará destacada.
- [**Company**](#company): Empresa que la publica.
- [**Location**](#location): Ubicación.
- [**Job**](#job): Puesto de trabajo ofrecido.
- [**Category[]**](#category): Categorías laborales a las que pertenece.
- [**Skill[]**](#skill): Habilidades necesarias.
- [**Hiring[]**](#hiring): Postulamientos/reclutamientos de aspirantes relacionados a esta oferta.

## Hiring
Representa la solicitud de contratación de una persona a través de una oferta.

- **status**: Estatus de contatación (ver [Status](#status)).
- **interested**: Parte interesada (ver [Interested](#interested)).
- [**Offer**](#offer): Oferta relacionada.
- [**Person**](#person): Persona que se contrata.
- [**Interview[]**](#interview): Entrevistas relacionadas.

## Interview
Representa una entrevista de trabajo mediante videollamada.

- **date**: Fecha.
- **link**: Enlace a la videollamada.
- **platform**: Plataforma a usar (ver [Platform](#platform)).
- [**Hiring**](#hiring): Contratación a la que pertenece.

## Internship
Representa una pasantía.

- **hours**: Horas necesarias para completarla.
- **completed**: Horas completadas hasta ahora.
- **stage**: Etapa de la pasantía (ver [Stage](#stage)).
- [**Person**](#person): Persona que la realiza.
- [**Institute**](#institute): Institución responsable.
- [**Company**](#company): Empresa donde se realiza. Es *"null"* cuando aún no se tiene una empresa.
- [**Grade**](#grade): Carrera relacionada 
- [**Recruitment[]**](#recruitment): Solicitudes de pasantías, tanto del pasante a empresa como viceversa. 
- [**Category[]**](#category): Categorías laborales a las que pertenece.

## Vacant
Representa una "oferta para pasantes".

- **title**: Título.
- **limit**: Límite de pasantes que postulan simultáneamente. Al alcanzar el límite, se oculta.
- **expiresAt**: Fecha de expiración. Al alcanzar la fecha, se oculta.
- [**Job**](#job): Puesto de trabajo para el pasante.
- [**Company**](#company): Empresa que publica.
- [**Location**](#location): Ubicación.
- [**Recruitment[]**](#recruitment): Solicitudes de pasantías relacionadas, tanto del pasante a empresa como viceversa.
- [**Category[]**](#category): Categorías laborales.
- [**Grade[]**](#grade): Carrera relacionada.
- [**Skill[]**](#skill): Habilidades requeridas.

## Recruitment
Representa una solicitud de pasantía, ya sea que la empresa busca al pasante, o que el pasante busca la empresa.

- **status**: Estado de la solicitud (ver [Status](#status)).
- **interested**: Parte interesada (ver [Interested](#interested)).
- [**Internship**](#internship): Pasantía de la solicitud.
- [**Vacant**](#vacant): "Oferta de pasante" relacionada.

## Experience
Representa una experiencia laboral de una persona.

- **name**: Nombre del sitio de trabajo.
- **description**: Descripción del trabajo.
- **from**: Fecha de inicio.
- **to**: Fecha de finalización. Si es *"null"*, signfica que aún sigue trabajando ahí.
- [**Person**](#person): Persona a la que pertence.
- [**Job**](#job): Puesto de trabajo.

## Review
Representa una reseña dejada por una empresa en el perfil de una persona.

- **content**: Texto de la reseña.
- [**Person**](#person): Persona a la que pertenece.
- [**Company**](#company): Empresa autora

## Message
Representa un mensaje enviado en algún chat de la aplicación.

- **content**: Contenido del mensaje.
- [**Person**](#person): Persona que mandó el mensaje. Es *"null"* si fué mandado por empresa.
- [**Company**](#company): Empreesa que mandó el mensaje. Es *"null"* si fué mandado por persona.
- [**Team**](#team): Equipo al que pertenece el mensaje.
- [**Project**](#project): Proyecto al que pertenece el mensaje, *"null"* si el mensaje no es de algún proyecto.
- [**Task**](#task): Tarea al que pertenece el mensaje, *"null"* si el mensaje no es de alguna tarea.

## Location
Representa una ubicación.

- **title**: Título.
- [**Company[]**](#company): Empresas ubicadas aquí.
- [**Institute[]**](#institute): Instituciones ubicadas aquí.
- [**Offer[]**](#offer): Ofertas ubicadas aquí.
- [**Vacant[]**](#vacant): Ofertas de pasantes ubicadas aquí.
- [**Person[]**](#person): Personas ubicadas aquí.

## Category
Representa una categoría laboral.

- **title**: Título.
- [**Offer[]**](#offer): Ofertas pertenecientes.
- [**Vacant[]**](#vacant): Ofertas de pasantes pertenecientes.
- [**Person[]**](#person): Personas pertenecientes.
- [**Team[]**](#team): Equipos pertenecientes.
- [**Project[]**](#project): Proyectos pertenecientes.
- [**Internship[]**](#internship) Pasantías pertenecientes.

## Job
Representa un determinado puesto de trabajo.

- **title**: Título.
- [**Offer[]**](#offer): Ofertas que pertenecen al puesto.
- [**Vacant[]**](#vacant): Ofertas de pasantes que pertenecen al puesto.
- [**Person[]**](#person): Personas que buscan el puesto.
- [**Experience[]**](#experience): Experiencias de alguna persona en el puesto.

## Grade
Representa una carrera o título.

- **title**: Título.
- [**Person[]**](#person): Personas que poseen el título.
- [**Internship[]**](#internship) Pasantías pertenecientes a la carrera.
- [**Vacant[]**](#vacant): Ofertas de pasantes pertenecientes a la carrera.

## Skill
Representa una habilidad.

- **title**: Título.
- [**Person[]**](#person): Personas que poseen la habilidad.
- [**Offer[]**](#offer): Ofertas que requieren la habilidad.
- [**Vacant[]**](#vacant): Ofertas de pasantes que requieren la habilidad.

# Enums de la DB
Todos los enums de la base de datos y sus relaciones con los modelos.

## Visibility
Visibilidad de un proyecto (ver [Project](#project)).

- **PUBLIC**: Visible para todos los usuarios.
- **PRIVATE**: Visible solo para los miembros del equipo de trabajo del proyecto.

## TaskStatus
Estado de progreso de una tarea (ver [Task](#task) y [Subtask](#subtask)).

- **PENDING**: La tarea aún no ha empezado a completarse.
- **PROGRESS**: La tarea está en progreso.
- **REVIEW**: La tarea está en revisión por el responsable. 
- **DONE**: La tarea fué marcada como completada.

## Mode
Modalidad de trabajo (ver [Offer](#offer)).

- **REMOTE**: Trabajo remoto.
- **ONSITE**: Trabajo presencial.
- **HYBRID**: Tanto presencial como remoto.

## Schedule
Horario de trabajo (ver [Offer](#offer)).

- **FULLTIME**: Tiempo completo.
- **PARTTIME**: Tiempo parcial.

## Status
Estado de una solicitud (ver [Hiring](#hiring) y [Recruitment](#recruitment)) o de una invitación a equipo (ver [Invitation](#invitation)).

- **PENDING**: Solicitud/invitación pendiente.
- **REJECTED**: Solicitud/invitación rechazada.
- **ACCEPTED**: Solicitud/invitación aceptada.

## Platform
Plataforma de videollamada de entrevista (ver [Interview](#interview)).

- **MEET**: Google Meet.
- **ZOOM**: Zoom.

## UserType
Tipo de usuario (ver [AuthUser](#authuser)).

- **PERSON**: Persona.
- **COMPANY**: Empresa.
- **INSTITUTE**: Institución.

## Stage
Etapas de una pasantía (ver [Internship](#internship)).

- **PENDING**: Aún no se ha conseguido una empresa para realizarla.
- **ACTIVE**: Se consiguió la empresa, y la pasantía está en curso.
- **DROPPED**: La pasantía fué cancelada/abandonada.

## State
Estado de una contratación de un equipo de trabajo (ver [Contract](#contract)).

- **REQUESTED**: La empresa/persona ha solicitado la contratación y está en espera de confirmación del equipo.
- **REJECTED**: El equipo rechazó la contratación.
- **PLANNING**: El equipo aceptó la contratación y están considerando el precio y haciendo preguntas.
- **PRICING**: El equipo puso un precio y está esperando la confirmación de la empresa/persona que contrata.
- **CONFIRMED**: La empresa/persona ha aceptado el precio y proyecto inició.
- **CANCELED**: La empresa/persona canceló la contratación.

## Interested
Parte interesada de una solicitud de pasantía o de contratación por oferta (ver [Hiring](#hiring) y [Recruitment](#recruitment)).

- **PERSON**: La que realizó la solicitud fué la persona (o pasante) y debe confirmar la empresa.
- **COMPANY**: La que realizó la solicitud fué la empresa y debe confirmar la persona (o pasante).

## Gender
Sexo de una persona (ver [Person](#person)).

- **MALE**: Hombre.
- **FEMALE**: Mujer.
