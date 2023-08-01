export function format(date: Date) {
  return date.toLocaleDateString('es', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}
