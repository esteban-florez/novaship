import numbers from './number'

export function randomCode(type: 'project' | 'team') {
  const prefix = type === 'project' ? 'PR' : 'EQ'
  return `${prefix}-${numbers(100_000, 999_999).random()}`
}
