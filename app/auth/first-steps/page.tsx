import FirstStepsForm from '@/components/first-steps/FirstStepsForm'
import prisma from '@/prisma/client'

export default async function FirstStepsPage() {
  const fields = await prisma.field.findMany({
    select: {
      id: true,
      title: true,
    },
  })
  // DRY 4
  const selectableFields = fields.map(field => {
    return {
      ...field,
      selected: false,
    }
  })
  return (
    <>
      <img src="/coso_1.webp" alt="Imagen decorativa en esquinas" width={250} className="absolute left-0 top-0 hidden md:block" />
      <FirstStepsForm fields={selectableFields} />
      <img src="/coso_2.webp" alt="Imagen decorativa en esquinas" width={250} className="absolute bottom-0 right-0 hidden rotate-180 md:block" />
    </>
  )
}
