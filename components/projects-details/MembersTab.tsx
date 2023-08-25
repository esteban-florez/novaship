import { type Membership, type Person } from '@prisma/client'
import Member from './Member'
import useSubmit from '@/lib/hooks/useSubmit'
import SelectMultiple from '../forms/inputs/select-multiple/SelectMultiple'
import EmptyContent from '../EmptyContent'
import Button from '../Button'
import { UserMinusIcon } from '@heroicons/react/24/outline'
import { schema } from '@/lib/validation/schemas/memberships'

interface Props {
  projectId: string
  memberships: Array<(Membership & {
    person: Person
  })>
  isOwner: boolean
}

export default function MembersTab({ projectId, memberships, isOwner }: Props) {
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
      action: 'REMOVE',
      projectId,
    },
  })

  if (memberships.length === 0) {
    return (
      <EmptyContent title="No hay miembros asociados">
        {isOwner
          ? 'Invitemos algunas personas para ayudar en el proyecto'
          : 'Este proyecto no dispone de miembros actualmente'}
      </EmptyContent>
    )
  }

  const persons = memberships.map(member => member.person)

  return (
    <>
      {isOwner &&
        <form action="/api/memberships" onSubmit={handleSubmit} method="POST" className="my-4">
          {alert}
          {serverErrors}
          <SelectMultiple
            control={control}
            label="Remover personas"
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
              <UserMinusIcon className="h-5 w-5" />
              Remover
            </Button>
          </div>
        </form>}
      <div className="mt-3 grid grid-cols-1 gap-x-2 p-2 sm:grid-cols-2">
        {persons.map(person => {
          return <Member key={person.id} name={person.name} email={person.email} action="Show" />
        })}
      </div>
    </>
  )
}
