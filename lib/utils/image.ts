export function imageValidator(image: string | null | undefined) {
  if (image == null) return undefined

  if (image.includes('project')) return image

  return '/' + image.slice(8).replaceAll('\\', '/')
}
