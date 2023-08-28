'use client'

import Button from '../modal/Button'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { type ProjectDetailsTab } from '@/lib/types'
import Archive from './Archive'
import { PlusIcon, DocumentIcon, QueueListIcon } from '@heroicons/react/24/outline'
import { type Participation, type Subtask, type Task } from '@prisma/client'
import Tasks from './tasks/Tasks'

interface Props {
  id: string
  tasks: Array<Task & {
    subtasks: Subtask[]
    participations: Participation[]
  }>
}

// TODO -> cambiar la vista de tasks por un link
export default function Filter({ id, tasks }: Props) {
  const [tab, setTab] = useState<ProjectDetailsTab>('files')
  const tabs = {
    files: <Archive />,
    tasks: <Tasks projectId={id} tasks={tasks} />,
  }

  return (
    <>
      <div className="my-4 flex items-center justify-end">
        <Link href={`/home/projects/${id}/tasks/create`}>
          <Button className="btn-primary btn px-6 py-2">
            <PlusIcon className="h-5 w-5" />
            Agregar tarea
          </Button>
        </Link>
      </div>
      <div className="tabs text-sm sm:text-base">
        <Button
          className={clsx({
            'tab tab-md sm:tab-lg tab-lifted gap-x-2': true,
            'tab-active': tab === 'files',
          })}
          onClick={() => { setTab('files') }}
        >
          <DocumentIcon className="h-6 w-6" />
          Archivos
        </Button>
        <Button
          className={clsx({
            'tab tab-md sm:tab-lg tab-lifted gap-x-2': true,
            'tab-active': tab === 'tasks',
          })}
          onClick={() => { setTab('tasks') }}
        >
          <QueueListIcon className="h-6 w-6" />
          Tareas
        </Button>
      </div>
      <div className="rounded-b-lg rounded-tl-lg border-x border-b bg-white p-4">
        {tabs[tab]}
      </div>
    </>
  )
}
