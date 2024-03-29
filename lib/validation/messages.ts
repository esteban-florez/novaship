import { format } from '../utils/date'

const m = (message: string) => ({ message })

const required = 'Este campo es obligatorio.'

const messages = {
  number: { required_error: required, invalid_type_error: 'Debe ser un número.' },
  string: { required_error: required, invalid_type_error: 'Debe ser un texto.' },
  boolean: { required_error: required, invalid_type_error: 'Debe ser verdadero o falso.' },
  array: { required_errror: required, invalid_type_error: 'Debes seleccionar una o más opciones.' },
  nonempty: m('Debes seleccionar al menos una opción.'),
  date: { errorMap: () => m('La fecha seleccionada es inválida.') },
  enum: { errorMap: () => messages.cuid },
  cuid: m('La opción seleccionada es inválida.'),
  email: m('Correo electrónico inválido.'),
  birth: m('Debes tener más de 18 años.'),
  hasLower: m('Debe poseer al menos una letra minúscula.'),
  hasUpper: m('Debe poseer al menos una letra mayúscula.'),
  hasNumber: m('Debe poseer al menos un número.'),
  hasSymbol: m('Debe poseer al menos un símbolo.'),
  numeric: m('Debe tener solo números.'),
  file: m(required),
  imageFormat: m('Los formatos permitidos son PNG y JPEG.'),
  imageSize: m('La imagen tiene como máximo 2 MB.'),
  min: (num: number) => m(`Debe tener mínimo ${num} caracteres.`),
  max: (num: number) => m(`Debe tener máximo ${num} caracteres.`),
  minNumber: (num: number) => m(`La cantidad mínima es ${num}`),
  maxNumber: (num: number) => m(`La cantidad máxima es ${num}`),
  minArray: (num: number) => m(`La cantidad mínima es ${num}`),
  maxArray: (num: number) => m(`La cantidad máxima es ${num}`),
  minDate: (date: Date) => m(`La fecha mínima es ${format({ date })}.`),
  maxDate: (date: Date) => m(`La fecha máxima es ${format({ date })}.`),
}

export default messages
