'use client'

import DeleteModal from '@/components/projects/DeleteModal'
import { type Permissions } from '@/lib/types'
import {
  ChatBubbleLeftEllipsisIcon,
  PencilIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

interface Props {
  id: string
  title: string
  permissions: Omit<Permissions, 'create'>
}

export default function SubtaskActions({ id, title, permissions }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <div className="flex flex-wrap">
      {permissions.delete && (
        <div
          className="z-[9999px] tooltip tooltip-bottom"
          data-tip="Borrar tarea"
        >
          <DeleteModal
            action={`/api/subtasks/${id}`}
            title={title}
            className="btn btn-circle btn-ghost"
          />
        </div>
      )}
      {permissions.edit && (
        <div
          className="z-[9999px] tooltip tooltip-bottom"
          data-tip="Editar subtarea"
        >
          <Link
            href={{
              pathname,
              query: {
                id: searchParams.get('id'),
                subtaskId: searchParams.get('subtaskId'),
                action: 'update',
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
                subtaskId: searchParams.get('subtaskId'),
                action: 'revision',
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
