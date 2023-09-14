export const ERRORS = {
  VALIDATION: 'VALIDATION',
  SERVER: 'SERVER',
  REQUEST_SYNTAX: 'REQUEST_SYNTAX',
  FETCH: 'FETCH',
  RESPONSE_SYNTAX: 'RESPONSE_SYNTAX',
} as const

export class AuthenticationError extends Error {}

export class AuthorizationError extends Error {}

export class DBError extends Error {}
