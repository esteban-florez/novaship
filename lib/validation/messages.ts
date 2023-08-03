import { format } from '../utils/date'

const m = (message: string) => ({ message })

const required = 'Este campo es obligatorio.'

const messages = {
  number: { required_error: required, invalid_type_error: 'Debe ser un número.' },
  string: { required_error: required, invalid_type_error: 'Debe ser un texto.' },
  boolean: { required_error: required, invalid_type_error: 'Debe ser verdadero o falso.' },
  date: { errorMap: () => m('La fecha seleccionada es inválida.') },
  enum: { errorMap: () => messages.cuid },
  cuid: m('La opción seleccionada es inválida.'),
  email: m('Correo electrónico inválido.'),
  birth: m('Debes tener más de 18 años.'),
  hasLower: m('Debe poseer al menos una letra minúscula.'),
  hasUpper: m('Debe poseer al menos una letra mayúscula.'),
  hasNumber: m('Debe poseer al menos un número.'),
  hasSymbol: m('Debe poseer al menos un símbolo.'),
  min: (num: number) => m(`Debe tener mínimo ${num} caracteres.`),
  max: (num: number) => m(`Debe tener máximo ${num} caracteres.`),
  minNumber: (num: number) => m(`La cantidad mínima es ${num}`),
  maxNumber: (num: number) => m(`La cantidad máxima es ${num}`),
  minDate: (date: Date) => m(`La fecha mínima es ${format(date)}.`),
  maxDate: (date: Date) => m(`La fecha máxima es ${format(date)}.`),
}

export default messages
