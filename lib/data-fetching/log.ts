import prisma from '@/prisma/client'
import { cookies } from 'next/headers'

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
  'Home',
  'Log',
  'Stats',
  'Notification',
  'CompanyProfile',
  'PersonProfile',
  'InstituteProfile',
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

interface LogViewProps {
  userId: string
  model: Model
}

export async function logView({ userId, model }: LogViewProps) {
  const cookie = cookies().get('view')?.value
  const previousView = cookie?.replaceAll('%2F', '/')

  if (previousView !== null && previousView !== model) {
    await logEvent({
      action: 'Ingresó a la vista',
      model,
      status: 'Info',
      authUserId: userId,
    })
  }
}
