'use client'

import useSubmit from '@/lib/hooks/useSubmit'
import { PencilIcon } from '@heroicons/react/24/outline'

interface Props {
  teamId: string
  projectId?: string
}

export default function JoinTeamButton({ teamId, projectId }: Props) {
  const { alert, serverErrors, loading, handleSubmit } = useSubmit({
    append: {
      teamId,
      projectId,
    },
  })

  return (
    <>
      {alert}
      {serverErrors}
      <form
        action="/api/invitations"
        method="POST"
        onSubmit={handleSubmit}
      >
        <button
          disabled={loading}
          className="btn btn-block sm:btn-md btn-primary hover:bg-white hover:text-neutral hover:border-primary"
        >
          {loading ? <div className="loading loading-spinner" /> : <PencilIcon className="h-4 w-4" />}
          Unirse
        </button>
      </form>
    </>
  )
}
