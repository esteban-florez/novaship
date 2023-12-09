# Correcciones de proyecto (para el 20-12)
- Cambiar interfaces (Myriam se quiere fumar una bien potente de aqui a enero)
- Concluir procesos (¿Añadir todo lo que se quitó a cada uno?)

# To-Do

- Bug de overflow en mobile, espacio en blanco a la derecha.
- Validación de todos los campos únicos.
- Guiar al usuario por la aplicación.
- Banner recordatorio de completar perfil.
- Componente Ads y ubicarlos en el layout.
- Crear input tipo file y limitar las extensiones.
- deletedAt middleware.
- ExpiresAt handler.
- Mostrar errores de validación del Servidor con modal.
- Llevarte a donde cometiste el error en signup.
- Añadir backups.
- Signup con Google.
- Mecanismo para destacar ofertas y equipo mediante suscripción.
- Mantener los filtros al usar la api.
- Validación: no puede aplicarse a un proyecto que sea personal.
- Hacer un nuevo componente modal.
- Revisar las dimensiones del logo en responsive.
- Logs middleware y model.
- Middleware para notificaciones.
- Loading para pages/id.
- Projects files.
- Refactor card.
- Project image.
- PDF header, footer, styles, template en general.
- Tooltip helper.
- Añadir areas de conocimiento desde el registro
- Encontrar alguna manera de ocultar el drawer en desktop (?).

# Pending
- Filtros para estadisticas.
- Perfil y perfiles.
- Corregir tags #FIX.
- Cambiar GoBackBtn por Links en forms.
- Validar en las rutas de proyecto que el usuario sea lider, miembro o usuario con permisos para registrar.
- Añadir filter a los schema en los tags #SCHEMA

# Future

- Reemplazar react-chartjs-2 por recharts o tremor

# Graficas

- Admin
  - Migrar minicards a tabla (?)
  - Mostrar grafico de barras (registro por meses) del card seleccionado, como modal o pagina independiente (?)

# Fix
- teams/id -> al actualizar un equipo quitar los usuarios que tengan invitaciones.
- teams/id -> corregir los miembros (parece que se buguea y registra al lider como miembro).
- teams/id (notification) -> corregir el de arriba (se envia al lider del equipo la invitacion que se hizo a otros miembros).
- projects/id -> cambiar el texto "su equipo asignado" cuando el usuario sea miembro.
- projects/id/tasks -> falta el boton de cerrar si no es miembro y ve una revision de subtarea.
- projects/id/tasks -> al registrar una tarea en grupo se quita la query de filtered.
- projects/id/tasks -> al borrar la revision de la subtarea redirigir a la subtarea.
- projects/id/tasks -> al borrar la revision de la tarea redirigir a la tarea.
- home -> carousel btn fuera de lugar.