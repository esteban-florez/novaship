import { type OptionPerson } from '@/lib/types'
import Button from '../Button'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import SelectMultiple from '../forms/inputs/select-multiple/SelectMultiple'
import useSubmit from '@/lib/hooks/useSubmit'
import { schema } from '@/lib/validation/schemas/memberships'

interface Props {
  projectId: string
  persons: OptionPerson[]
}

export default function AddMembersTab({ projectId, persons }: Props) {
  const {
    alert,
    serverErrors,
    control,
    handleSubmit,
  } = useSubmit({
    schema,
    method: 'PUT',
    refreshOnSuccess: true,
    append: {
      action: 'ADD',
      projectId,
    },
  })

  return (
    <>
      {alert}
      {serverErrors}
      <form action="/api/memberships" onSubmit={handleSubmit} method="POST">
        <SelectMultiple
          control={control}
          label="Invitar personas"
          name="members"
          itemsName="Personas"
          options={{
            type: 'rows',
            data: persons,
          }}
        />
        <div className="mt-2 flex flex-col">
          <Button
            style="DEFAULT"
            color="PRIMARY"
          >
            <UserPlusIcon className="h-5 w-5" />
            Añadir
          </Button>
        </div>
      </form>
    </>
  )
}
