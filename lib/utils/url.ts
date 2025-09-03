/**
 * Crear una URL a partir de la NEXT_PUBLIC_BASE_URL del archivo de entorno.
 */
export function url(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const pathname = base + path
  return new URL(pathname, process.env.NEXT_PUBLIC_BASE_URL)
}

export function href(path: string) {
  return url(path).href
}

export function uri(path: string) {
  return url(path).pathname
}
