'use client'

import FormLayout from '@/components/forms/FormLayout'
import FormSection from '@/components/forms/FormSection'
import Input from '@/components/forms/inputs/Input'
import useSubmit from '@/lib/hooks/useSubmit'
import { tooltip } from '@/lib/tooltip'
import { type ModelData } from '@/lib/types'
import { type Company } from '@prisma/client'
import { schema } from '@/lib/validation/schemas/profile/company'
import FormButtons from '@/components/forms/FormButtons'
import Textarea from '@/components/forms/inputs/Textarea'
import Select from '@/components/forms/inputs/Select'

interface Props {
  company: Company
  locations: ModelData[]
}

export default function CompanyForm({ company, locations }: Props) {
  const { name, description, email, phone, locationId } = company

  const {
    handleSubmit,
    alert,
    serverErrors,
    register,
    formState: { errors },
    loading,
  } = useSubmit({
    schema,
    method: 'PUT',
  })

  return (
    <>
      {alert}
      {serverErrors}
      <FormLayout title="Información del perfil">
        <form
          action="/api/profile"
          onSubmit={handleSubmit}
          method="POST"
        >
          <FormSection
            title="Información básica"
            description={tooltip.profile_company_basic_data}
          >
            <Input
              name="name"
              label="Nombre"
              placeholder="Ej. José Sucre"
              value={name}
              register={register}
              errors={errors}
              maxlength={40}
            />
            <Textarea
              name="description"
              label="Sobre mi"
              placeholder="Ej. Experto en balances bancarios y manejo de excel"
              value={description}
              register={register}
              errors={errors}
              maxlength={255}
            />
            <Input
              name="email"
              label="Correo electrónico"
              value={email}
              register={register}
              errors={errors}
              maxlength={40}
              placeholder="Ej. correo@ejemplo.com"
            />
            <Input
              label="Teléfono"
              type="number"
              name="phone"
              value={phone}
              register={register}
              errors={errors}
              placeholder="Ej. 04121234567"
              maxlength={11}
            />
            <Select
              name="locationId"
              label="Dirección"
              defaultValue={locationId}
              options={{ type: 'rows', data: locations }}
              register={register}
              errors={errors}
            />
          </FormSection>
          <FormButtons
            method="PUT"
            link="/home/profile"
            disableSubmit={loading}
          />
        </form>
      </FormLayout>
    </>
  )
}
