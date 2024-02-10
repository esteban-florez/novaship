import prisma from '@/prisma/client'

export const logModels = [
  'Hiring',
  'Vacant',
  'Project',
  'Team',
  'Offer',
  'Auth',
  'Login',
  'Logout',
  'Register',
  'Backup',
  'PasswordRecovery',
  'PasswordForget',
  'Verify',
  'Profile',
  'Task',
  'Subtask',
  'Revision',
  'Internship',
  'Invitation',
  'Recruitment',
  'Progress',
] as const

export type LogStatus = 'Success' | 'Error' | 'Warning' | 'Info'
export type Model = typeof logModels[number]

interface Props {
  action: string
  status: LogStatus
  authUserId: string
  model: Model
}

export default async function logEvent({ action, status, model, authUserId }: Props) {
  return await prisma.log.create({
    data: {
      action,
      model,
      status,
      authUserId,
    },
  })
}
