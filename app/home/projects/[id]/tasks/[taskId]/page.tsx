import Subtask from '@/components/projects/Subtask'
import { type Metadata } from 'next'
import prisma from '@/prisma/client'
import FormLayout from '@/components/forms/FormLayout'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Detalles de Tarea',
}

interface Context {
  params: { id: string, taskId: string }
}

export default async function TaskPage({ params: { id, taskId } }: Context) {
  const project = await prisma.project.findFirst({
    where: {
      id,
      deletedAt: null,
    },
  })

  if (project === null) redirect('/home/projects')

  const task = await prisma.task.findFirst({
    where: {
      id: taskId,
    },
    include: {
      subtasks: true,
    },
  })

  if (task === null) redirect(`/home/projects/${project.id}`)

  return (
    <FormLayout>
      <h2 className="border-b px-4 py-2 font-semibold">{task.title}</h2>
      <p className="p-2 text-neutral-600">{task.description}</p>
      <div className="flex flex-col gap-2 px-8 py-4">
        {task.subtasks.map(subtask => {
          return (
            <Subtask key={subtask.id} status={subtask.status}>
              {subtask.description}
            </Subtask>
          )
        })}
      </div>
    </FormLayout>
    // <>
    //   <section className="relative flex flex-col bg-primary">
    //     <div className="flex flex-row justify-between rounded-br-full bg-white px-4 py-6 md:px-8 lg:w-1/2">
    //       <div className="flex flex-col gap-3">
    //         <h3 className="text-xl font-bold md:text-3xl">Diseñar la interfaz</h3>
    //         <div className="-my-1 mb-1 flex flex-col">
    //           <p className="line-clamp-6 text-base">2 / 5 tareas realizadas</p>
    //           <div className="flex flex-row items-center gap-2">
    //             <progress className="progress-accent progress w-52 md:w-80" value="20" max="100" />
    //             <p className="line-clamp-6">20%</p>
    //           </div>
    //         </div>
    //         <div className="flex flex-row items-center gap-2">
    //           <AvatarIcon username="Liz Villegas" className="bg-accent text-accent-content" />
    //           <AvatarIcon username="Estefani Garcia" className="bg-secondary text-white" />
    //           <AvatarIcon username="Esteban Florez" className="bg-warning text-white" />
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="flex flex-col gap-4 px-16 py-4">
    //     <div className="rounded-xl border border-solid border-zinc-400 bg-white shadow">
    //       <div className="flex flex-col items-center justify-between rounded-t-lg border-b border-solid border-zinc-400 px-6 py-4 md:flex-row">
    //         <h2 className="text-lg font-bold md:text-2xl">Tareas a realizar</h2>
    //         <ActionButton color="btn-primary">Agregar</ActionButton>
    //       </div>
  // <div className="flex flex-col gap-2 px-8 py-4">
  //   <Subtask content="Hacer el Inicio de sesión" />
  //   <Subtask content="Hacer el Registro" />
  //   <Subtask content="Hacer el Olvido de contraseña" />
  //   <Subtask content="Hacer la Recuperación de contraseña" />
  //   <Subtask content="Hacer el Home" />
  // </div>
    //     </div>
    //   </section>
    // </>
  )
}
