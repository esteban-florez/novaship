export const password = (password: string) => {
  const expressions = [
    /[.[\]?*+{}^$()|!\\'"@~%&°#¡¿_\-<>]/g,
    /[A-Z]/g,
    /[a-z]/g,
    /[0-9]/g,
  ]

  return expressions.map(expression => expression.test(password))
}
