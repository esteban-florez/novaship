import { type Participation, type Person, type Revision, type Subparticipation, type Subtask, type Task, TaskStatus } from '@prisma/client'
import collect from './collection'
import { taskStatuses } from '../translations'

interface Props {
  task: Task & {
    revisions: Revision[]
    participations: Array<Participation & {
      person: Person | null
    }>
    subtasks: Array<Subtask & {
      revisions: Revision[]
      subparticipations: Array<Subparticipation & {
        person: Person | null
      }>
    }>
  }
}

export function getTaskStatus({ task }: Props) {
  const taskStatus = task.status
  const subtasks = task.subtasks
  const subtasksGroupped = collect(subtasks).groupBy('status')
  const done = subtasksGroupped[TaskStatus.DONE]?.length ?? 0
  const progress = subtasksGroupped[TaskStatus.PROGRESS]?.length ?? 0
  const review = subtasksGroupped[TaskStatus.REVIEW]?.length ?? 0

  if (taskStatus != null) {
    return taskStatuses[task.status ?? 'PENDING']
  }

  if (done === subtasks.length) {
    return taskStatuses.DONE
  }

  if (progress === subtasks.length) {
    return taskStatuses.PROGRESS
  }

  if (review === subtasks.length) {
    return taskStatuses.REVIEW
  }

  return taskStatuses.PENDING
}

export function getStatuses(statuses: TaskStatus[]) {
  const filtered = statuses.reduce<Record<string, number>>((value, acc) => {
    return {
      [acc]: (value[acc] ?? 0) + 1,
    }
  }, {})

  const done = filtered[TaskStatus.DONE] ?? 0
  const pending = filtered[TaskStatus.PENDING] ?? 0
  const review = filtered[TaskStatus.REVIEW] ?? 0
  const progress = filtered[TaskStatus.PROGRESS] ?? 0

  return { done, pending, progress, review }
}
