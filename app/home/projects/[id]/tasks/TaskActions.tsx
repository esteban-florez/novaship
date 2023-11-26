'use client'

import DeleteModal from '@/components/projects/DeleteModal'
import {
  ChatBubbleLeftEllipsisIcon,
  PencilIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

interface Props {
  id: string
  title: string
  permissions: {
    delete: boolean
    create: boolean
    edit: boolean
    comment: boolean
  }
  filter: string
}

export default function TaskActions({ id, title, permissions, filter }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <div className="flex flex-wrap">
      {permissions.delete && (
        <div
          className="z-[9999px] tooltip tooltip-right sm:tooltip-bottom"
          data-tip="Borrar tarea"
        >
          <DeleteModal
            action={`/api/tasks/${id}`}
            title={title}
            className="btn btn-circle btn-ghost"
          />
        </div>
      )}
      {permissions.create && (
        <div
          className="z-[9999px] tooltip tooltip-bottom"
          data-tip="Añadir subtarea"
        >
          <Link
            href={{
              pathname,
              query: {
                id: searchParams.get('id'),
                action: 'subtask',
                filtered: filter,
              },
            }}
          >
            <button className="btn btn-circle btn-ghost">
              <PlusIcon className="w-4 h-4" />
            </button>
          </Link>
        </div>
      )}
      {permissions.edit && (
        <div
          className="z-[9999px] tooltip tooltip-bottom"
          data-tip="Editar tarea"
        >
          <Link
            href={{
              pathname,
              query: {
                id: searchParams.get('id'),
                action: 'update',
                filtered: filter,
              },
            }}
          >
            <button className="btn btn-circle btn-ghost">
              <PencilIcon className="w-4 h-4" />
            </button>
          </Link>
        </div>
      )}
      {permissions.comment && (
        <div
          className="z-[9999px] tooltip tooltip-bottom"
          data-tip="Añadir revision"
        >
          <Link
            href={{
              pathname,
              query: {
                id: searchParams.get('id'),
                action: 'revision',
                filtered: filter,
              },
            }}
          >
            <button className="btn btn-circle btn-ghost">
              <ChatBubbleLeftEllipsisIcon className="w-4 h-4" />
            </button>
          </Link>
        </div>
      )}
      <div
        className="z-[9999px] tooltip tooltip-left"
        data-tip="Quitar tarea"
      >
        <Link
          href={{
            pathname,
            query: { filtered: filter },
          }}
        >
          <button className="btn btn-circle btn-ghost">
            <XMarkIcon className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  )
}
