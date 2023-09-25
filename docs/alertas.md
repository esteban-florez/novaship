# Alertas globales

Lo primero es añadir la alerta en el archivo ```/lib/alerts.ts```, añadiendo una nueva propiedad al objeto [```alerts```](/lib/alerts.ts):

```ts
// lib/alerts.ts
export const alerts: AlertList = {
  project_created: {
    type: 'success',
    message: 'El proyecto fué creado con éxito.',
  },
  // más alertas aqui...
}
```

Una vez definida la alerta, para mostrarla al usuario, hay tres opciones:

  - Redireccionar a alguna ruta insertando un parámetro ```alert``` en la URL.
  - Usar el hook ```useAlert``` en un Client Component.

**NOTA:** el hook ```useSubmit``` muestra alertas según el estado del formulario de manera automática.

## Parámetro en la URL.

Sirve para mostrar alertas después de una navegación o redirección, se puede hacer de varios métodos:

Con el componente ```<Link>```:
```tsx
import Link from 'next/link'

// Navegar a /ruta/ejemplo y mostrar alerta.
<Link href={`/ruta/ejempo?alert=project_created`}>
```

Con el hook ```useRouter``` en un Client Component:
```tsx
import { useRouter } from 'next/navigation'

const router = useRouter()

// Navegar a /ruta/ejemplo y mostrar alerta.
router.push('/ruta/ejemplo?alert=project_created')
```

Con la función ```redirect```:
```tsx
import { redirect } from 'next/navigation'

// Redireccionar a /ruta/ejemplo y mostrar alerta.
redirect('/ruta/ejemplo?alert=project_created')
```

## Hook de alertas: ```useAlert()```

Sirve para mostrar una alerta directamente mediante una función en la página actual. Solo puede usarse en un Client Component.

```tsx
import useAlert from '@/lib/hooks/useAlert'

const { showAlert, hideAlert } = useAlert()

// mostrar alerta
showAlert('project_created')

// en caso de necesitar cerrar la alerta con algún evento
// igual puede ser cerrada por el usuario con la "X"
hideAlert()
```

