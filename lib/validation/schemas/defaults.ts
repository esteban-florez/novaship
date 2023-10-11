import { date, preprocess, string, instanceof as isInstance, array } from 'zod'
import messages from '../messages'
import { hasLower, hasNumber, hasSymbol, hasUpper, imageFormat, imageSize } from '../refinements'

const today = new Date()
const year18YearsAgo = today.getFullYear() - 18
const today18YearsAgo = new Date(year18YearsAgo, today.getMonth(), today.getDate())

const dateOptions = {
  ...messages.date,
  coerce: true,
}

// @ts-expect-error Hack for instanceof File and FileList
globalThis.FileList ??= Object; globalThis.File ??= Object

function extractFile(files: unknown) {
  if (files instanceof FileList) {
    return files.item(0)
  }

  return null
}

const clientImageSchema = isInstance(File, messages.file)
  .refine(imageFormat, messages.imageFormat)
  .refine(imageSize, messages.imageSize)

const idSchema = string(messages.string).cuid(messages.cuid)

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
  id: idSchema,
  ids: array(idSchema, messages.array),
  client: {
    image: preprocess(extractFile, clientImageSchema.nullable()),
    requiredImage: preprocess(extractFile, clientImageSchema),
  },
  server: {
    image: isInstance(Blob, messages.file)
      .refine(imageFormat, messages.imageFormat)
      .refine(imageSize, messages.imageSize),
  },
}
