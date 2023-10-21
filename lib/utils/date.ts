export function format(date: Date, weekday = false) {
  return date.toLocaleDateString('es', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: weekday ? 'short' : undefined,
  })
}
