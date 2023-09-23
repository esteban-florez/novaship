import { array, discriminatedUnion, literal, nativeEnum, object, string, type z } from 'zod'
import messages from '../messages'
import { Visibility } from '@prisma/client'

export type Fields = z.infer<typeof schema>

const TEAM_OPTIONS = {
  SOLO: 'Solo',
  TEAM: 'Team',
} as const

const base = object({
  title: string(messages.string)
    .min(5, messages.min(5))
    .max(20, messages.max(20)),
  description: string(messages.string)
    .min(15, messages.min(15))
    .max(255, messages.max(255)),
  visibility: nativeEnum(Visibility, messages.enum),
  categories: array(string(messages.string)
    .cuid(messages.cuid), messages.array)
    .nonempty(messages.nonempty),
})

export const schema = discriminatedUnion(
  'teamwork', [
    object({
      teamwork: literal(TEAM_OPTIONS.SOLO),
    }).merge(base),
    object({
      teamwork: literal(TEAM_OPTIONS.TEAM),
      teamId: string(messages.string)
        .cuid(messages.cuid),
    }).merge(base),
  ]
)
