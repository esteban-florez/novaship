import { format } from '../utils/date'

const m = (message: string) => ({ message })

const messages = {
  required: {
    required_error: 'Este campo es obligatorio.',
    invalid_type_error: 'Este campo es obligatorio.',
  },
  birth: m('Debes tener más de 18 años.'),
  email: m('Correo electrónico inválido.'),
  invalidOption: m('La opción seleccionada es inválida.'),
  hasLower: m('Debe poseer al menos una letra minúscula.'),
  hasUpper: m('Debe poseer al menos una letra mayúscula.'),
  hasNumber: m('Debe poseer al menos un número.'),
  hasSymbol: m('Debe poseer al menos un símbolo.'),
  min: (num: number) => m(`Requiere mínimo ${num} caracteres.`),
  max: (num: number) => m(`Requiere máximo ${num} caracteres.`),
  minN: (num: number) => m(`La cantidad mínima es ${num}`),
  maxN: (num: number) => m(`La cantidad máxima es ${num}`),
  minD: (date: Date) => m(`La fecha mínima es ${format(date)}.`),
  maxD: (date: Date) => m(`La fecha máxima es ${format(date)}.`),
  enum: { errorMap: () => messages.invalidOption },
  date: { errorMap: () => m('La fecha seleccionada es inválida.') },
}

export default messages
