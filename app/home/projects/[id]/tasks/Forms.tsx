import FormLayout from '@/components/forms/FormLayout'
import RevisionForm from '@/components/projects-details/revisions/RevisionForm'
import SubtaskForm from '@/components/projects-details/subtasks/SubtaskForm'
import TaskForm from '@/components/tasks/TaskForm'
import { getMembersByProject } from '@/lib/data-fetching/members'
import { getRevision } from '@/lib/data-fetching/revision'
import { getSubtask } from '@/lib/data-fetching/subtask'
import { getTask } from '@/lib/data-fetching/task'

interface Props {
  taskId: string
  projectId: string
  revisionId: string
  subtaskId: string
  action: string
  teamwork: 'solo' | 'team'
  leader: boolean
  filter: string
}

// TODO -> componentizar
export default async function Forms({
  taskId,
  projectId,
  revisionId,
  subtaskId,
  action,
  teamwork,
  leader,
  filter,
}: Props) {
  if (action === '') return null

  // Subtasks
  if (taskId !== '' && action === 'subtask') {
    if (teamwork === 'solo') {
      return (
        <FormLayout
          title="Información de la subtarea"
          className="m-0 p-0 max-h-[80vh] scrollbar"
        >
          <SubtaskForm
            action="/api/subtasks"
            method="POST"
            taskId={taskId}
            filter={filter}
          />
        </FormLayout>
      )
    }
    const members = await getMembersByProject({ id: projectId })

    return (
      <FormLayout
        title="Información de la subtarea"
        className="m-0 p-0 max-h-[80vh] scrollbar"
      >
        <SubtaskForm
          action="/api/subtasks"
          method="POST"
          taskId={taskId}
          memberships={members}
          filter={filter}
        />
      </FormLayout>
    )
  }

  // Subtasks id
  if (taskId !== '' && subtaskId !== '' && action === 'update') {
    const subtask = await getSubtask({ id: subtaskId })
    if (subtask == null) return null

    if (teamwork === 'solo') {
      return (
        <FormLayout
          title="Información de la subtarea"
          className="m-0 p-0 max-h-[80vh] scrollbar"
        >
          <SubtaskForm
            action={`/api/subtasks/${subtask.id}`}
            method="PUT"
            taskId={taskId}
            subtask={subtask}
            filter={filter}
          />
        </FormLayout>
      )
    }

    const members = await getMembersByProject({ id: projectId })
    return (
      <FormLayout
        title="Información de la subtarea"
        className="m-0 p-0 max-h-[80vh] scrollbar"
      >
        <SubtaskForm
          action={`/api/subtasks/${subtask.id}`}
          method="PUT"
          taskId={taskId}
          subtask={subtask}
          memberships={members}
          filter={filter}
        />
      </FormLayout>
    )
  }

  // Subtask revisions
  if (subtaskId !== '' && action === 'revision') {
    return (
      <FormLayout
        title="Revisión de la subtarea"
        className="m-0 p-0 max-h-[80vh] scrollbar"
      >
        <RevisionForm
          action="/api/revisions"
          method="POST"
          subtaskId={subtaskId}
          filter={filter}
        />
      </FormLayout>
    )
  }

  // Subtask id revision
  if (subtaskId !== '' && revisionId !== '' && action === 'update') {
    const revision = await getRevision({ where: { id: revisionId } })
    if (revision == null) return null

    return (
      <FormLayout
        title="Revisión de la subtarea"
        className="m-0 p-0 max-h-[80vh] scrollbar"
      >
        <RevisionForm
          action={`/api/revisions/${revisionId}`}
          method="PUT"
          subtaskId={subtaskId}
          revision={revision}
          filter={filter}
        />
      </FormLayout>
    )
  }

  // Tasks
  if (action === 'create' && taskId === '' && revisionId === '') {
    if (teamwork === 'solo') {
      return (
        <FormLayout
          title="Información de la tarea"
          className="m-0 p-0 max-h-[80vh] scrollbar"
        >
          <TaskForm
            action="/api/tasks"
            method="POST"
            projectId={projectId}
            filter={filter}
          />
        </FormLayout>
      )
    }

    const members = await getMembersByProject({ id: projectId })
    return (
      <FormLayout
        title="Información de la tarea"
        className="m-0 p-0 max-h-[80vh] scrollbar"
      >
        <TaskForm
          action="/api/tasks"
          method="POST"
          projectId={projectId}
          memberships={members}
          filter={filter}
        />
      </FormLayout>
    )
  }

  // TasksId
  if (taskId !== '' && revisionId === '' && action === 'update') {
    const task = await getTask({ id: taskId })
    if (task == null) return null

    if (teamwork === 'solo') {
      return (
        <FormLayout
          title="Información de la tarea"
          className="m-0 p-0 max-h-[80vh] scrollbar"
        >
          <TaskForm
            key={task.id}
            action={`/api/tasks/${task.id}`}
            method="PUT"
            projectId={projectId}
            filter={filter}
            task={task}
          />
        </FormLayout>
      )
    }

    const members = await getMembersByProject({ id: projectId })
    return (
      <FormLayout
        title="Información de la tarea"
        className="m-0 p-0 max-h-[80vh] scrollbar"
      >
        <TaskForm
          action={`/api/tasks/${task.id}`}
          method="PUT"
          projectId={projectId}
          task={task}
          memberships={members}
          filter={filter}
        />
      </FormLayout>
    )
  }

  // Task revisions
  if (action === 'revision') {
    return (
      <FormLayout
        title="Revisión de la tarea"
        className="m-0 p-0 max-h-[80vh] scrollbar"
      >
        <RevisionForm
          action="/api/revisions"
          method="POST"
          taskId={taskId}
          filter={filter}
        />
      </FormLayout>
    )
  }

  // Task id revision
  if (revisionId !== '' && action === 'update') {
    const revision = await getRevision({ where: { id: revisionId } })
    if (revision == null) return null

    return (
      <FormLayout
        title="Revisión de la tarea"
        className="m-0 p-0 max-h-[80vh] scrollbar"
      >
        <RevisionForm
          action={`/api/revisions/${revisionId}`}
          method="PUT"
          taskId={taskId}
          revision={revision}
          filter={filter}
        />
      </FormLayout>
    )
  }
}
