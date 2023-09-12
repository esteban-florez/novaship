export const ERRORS = {
  VALIDATION: 'VALIDATION',
  SERVER: 'SERVER',
  REQUEST_SYNTAX: 'REQUEST_SYNTAX',
  FETCH: 'FETCH',
  RESPONSE_SYNTAX: 'RESPONSE_SYNTAX',
} as const

export class AuthError extends Error {}

export class DBError extends Error {}
