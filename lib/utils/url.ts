// TODO -> Tira error al redirigir (TypeError: Invalid URL) despues de crear un proyecto

/**
 * Crear una URL a partir de la BASE_URL del archivo de entorno.
 */
export function url(href: string) {
  return new URL(href, process.env.BASE_URL)
}
