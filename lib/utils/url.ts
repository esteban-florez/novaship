/**
 * Crear una URL a partir de la NEXT_PUBLIC_BASE_URL del archivo de entorno.
 */
export function url(href: string) {
  const pathname = String(process.env.NEXT_PUBLIC_BASE_PATH) + href
  return new URL(pathname, process.env.NEXT_PUBLIC_BASE_URL)
}
