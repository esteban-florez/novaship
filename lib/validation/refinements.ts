export const password = (password: string) => {
  const expressions = [
    /[.[\]?*+{}^$()|!\\'"@~%&°#¡¿_\-<>]/g,
    /[A-Z]/g,
    /[a-z]/g,
    /[0-9]/g,
  ]

  return expressions.every(expression => expression.test(password))
}

export const within = (elements: unknown[]) =>
  (value: unknown) => elements.includes(value)

export const notWithin = (elements: unknown[]) =>
  (value: unknown) => !elements.includes(value)
