/**
 * Crear una URL a partir de la BASE_URL del archivo de entorno.
 */
export function url(href: string) {
  const {
    NEXT_PUBLIC_BASE_URL, NEXT_PUBLIC_BASE_PATH = ''
  } = process.env

  return new URL(NEXT_PUBLIC_BASE_PATH + href, NEXT_PUBLIC_BASE_URL)
}
