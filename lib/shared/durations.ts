export const DURATIONS = ['7', '14', '30', '90', '180', '365'] as const

export const INTERNSHIPS_HOURS = ['24', '36', '48', '60', '72'] as const

export const hoursOptions = INTERNSHIPS_HOURS.map(hours => ({
  id: hours,
  title: `${hours} horas`,
}))
