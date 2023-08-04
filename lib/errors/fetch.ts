export function handleError(error: unknown) {
  if (error instanceof TypeError) {
    return {
      errorType: 'FETCH',
    } as const
  }

  if (error instanceof SyntaxError) {
    return {
      errorType: 'RESPONSE_SYNTAX',
    } as const
  }

  throw error
}
