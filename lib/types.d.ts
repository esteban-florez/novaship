import { type Skill } from '@prisma/client'

export type SkillOption = Pick<Skill, 'id' | 'title'> & { selected: boolean }
