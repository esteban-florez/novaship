import { date, preprocess, string, instanceof as isInstance } from 'zod'
import messages from '../messages'
import { hasLower, hasNumber, hasSymbol, hasUpper } from '../refinements'

const today = new Date()
const year18YearsAgo = today.getFullYear() - 18
const today18YearsAgo = new Date(year18YearsAgo, today.getMonth(), today.getDate())

const dateOptions = {
  ...messages.date,
  coerce: true,
}

const MB_IN_BYTES = 2_097_152

// @ts-expect-error Hack for instanceof File and FileList
globalThis.FileList ??= Object; globalThis.File ??= Object

function extractFile(files: unknown) {
  if (files instanceof FileList) {
    return files.item(0)
  }

  return null
}

const imageSchema = isInstance(File, {
  message: 'Este campo es requerido.',
}).refine(file => {
  const formats = ['image/png', 'image/jpeg']
  return formats.includes(file.type)
}, {
  message: 'Los formatos permitidos son PNG y JPEG.',
}).refine(file => file.size < 2 * MB_IN_BYTES, {
  message: 'La imagen tiene como máximo 2 MB.',
})

export const defaults = {
  email: string(messages.string)
    .trim()
    .email(messages.email),
  password: string(messages.string)
    .trim()
    .min(8, messages.min(8))
    .max(20, messages.max(20))
    .refine(hasLower, messages.hasLower)
    .refine(hasUpper, messages.hasUpper)
    .refine(hasNumber, messages.hasNumber)
    .refine(hasSymbol, messages.hasSymbol),
  birth: date(dateOptions).max(today18YearsAgo, messages.birth),
  date: date(dateOptions),
  client: {
    image: preprocess(extractFile, imageSchema.nullable()),
    requiredImage: preprocess(extractFile, imageSchema),
  },
}
