import { DateTime } from 'luxon'
import { getExpirationDiff } from '../validation/expiration-dates'

export function getExpirationDate(days: number) {
  return DateTime.now().plus({ days }).toJSDate()
}

export function getAllMonths(format?: 'short' | 'long') {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]

  if (format === 'short') return months.map(month => month.slice(0, 3))

  return months
}

export function getExpiresAtDate(date: Date | null) {
  const today = new Date()

  if (date != null) {
    const difference = getExpirationDiff(today, date ?? new Date())
    return difference
  }

  return today.getDate()
}

interface FormatProps {
  date: Date
  config?: {
    shortMonth?: boolean
    weekday?: boolean
  }
}

export function format({ date, config = {} }: FormatProps) {
  const { shortMonth = false, weekday = false } = config

  return date.toLocaleDateString('es', {
    year: 'numeric',
    month: shortMonth ? 'short' : 'long',
    day: 'numeric',
    weekday: weekday ? 'short' : undefined,
  })
}

export function daysLeft(date: Date) {
  const currentDay = new Date().getDate()
  const paramDay = date.getDate()
  const days =
    currentDay > paramDay ? currentDay - paramDay : paramDay - currentDay
  const plural = days > 1 ? 's' : ''

  const message =
    days === 0
      ? 'Unos minutos restantes'
      : `${days} día${plural} restante${plural}`
  return message
}

export function diffForHumans(date: Date) {
  const intl = new Intl.RelativeTimeFormat('es-VE')
  const diffInMs = Date.now() - Number(date)
  const diffInMins = Math.ceil(diffInMs / 1000 / 60)

  let value = 1
  let unit: Intl.RelativeTimeFormatUnit = 'minute'

  if (diffInMins >= 60) {
    value = diffInMins / 60
    unit = 'hour'
  }

  if (diffInMins >= 24 * 60) {
    value = diffInMins / 24 / 60
    unit = 'day'
  }

  if (diffInMins >= 60 * 24 * 30) {
    value = diffInMins / 60 / 24 / 30
    unit = 'month'
  }

  if (diffInMins >= 60 * 24 * 30 * 12) {
    value = diffInMins / 60 / 24 / 30 / 12
    unit = 'year'
  }

  value = Math.round(value)

  if (value > 1) {
    unit = unit + 's' as Intl.RelativeTimeFormatUnit
  }

  return intl.format(-value, unit)
}

export function age(birthDate: Date) {
  const today = new Date()
  const age = today.getFullYear() - birthDate.getFullYear()
  const month = today.getMonth() - birthDate.getMonth()

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1
  }

  return age
}
