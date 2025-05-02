# Novaship - Aplicación de gestión de pasantías

Novaship es una aplicación web para la gestión de pasantías, orfetas de trabajo y proyectos.

## Tecnologías usadas:

- Next.js
- Prisma
- React
- TypeScript
- TailwindCSS
- DaisyUI

## Instalación local:

- Clonar este repositorio.
- Renombrar el archivo ".env.example" a ".env".
- Configurar la conexión a la base de datos en el archivo ".env".
- Ejecutar los siguientes comandos:

1. Clonar el repositorio:

```bash
git clone git@github.com:esteban-florez/novaship
```

2. Configurar la base de datos en las variables de entorno (.env):

```
BASE_URL='http://localhost:3000'
POSTGRES_URL_NON_POOLING='postgresql://postgres:password@localhost:5432/novaship'
POSTGRES_PRISMA_URL='postgresql://postgres:password@localhost:5432/novaship'
STORAGE_METHOD='filesystem'
```

3. Ejecutar las migraciones y seeders de Prisma con el comando:

```bash
npm run mig
```

4. Ejecutar el servidor de desarrollo:

```bash
npm run dev
```
