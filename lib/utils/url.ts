/**
 * Crear una URL a partir de la NEXT_PUBLIC_BASE_URL del archivo de entorno.
 */
export function url(href: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const pathname = base + href
  return new URL(pathname, process.env.NEXT_PUBLIC_BASE_URL)
}

export function uri(href: string) {
  return url(href).pathname
}
