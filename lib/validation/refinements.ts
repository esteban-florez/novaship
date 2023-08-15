export const numeric = (string: string) => (/^\d+$/g).test(string)

export const hasUpper = (string: string) => (/[A-Z]/g).test(string)

export const hasLower = (string: string) => (/[a-z]/g).test(string)

export const hasNumber = (string: string) => (/[0-9]/g).test(string)

export const hasSymbol = (string: string) =>
  (/[.[\]?*+{}^$()|!\\'"@~%&°#¡¿_,\-<>·¬`]/g).test(string)

export const within = (elements: unknown[]) =>
  (value: unknown) => elements.includes(value)

export const notWithin = (elements: unknown[]) =>
  (value: unknown) => !elements.includes(value)
