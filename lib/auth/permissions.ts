import { type Status } from '@prisma/client'

interface InternshipPartial {
  status: Status
  recruitments: Array<{
    status: Status
    vacant: {
      companyId: string
    }
  }>
}

export function canCreateRecruitment(companyId: string, internship: InternshipPartial) {
  const { recruitments } = internship

  const isRecruitable = !recruitments.some(recruitment => {
    const hasRecruitment = recruitment.vacant.companyId === companyId
    const alreadyRecruited = recruitment.status === 'ACCEPTED'
    return hasRecruitment || alreadyRecruited
  })

  return internship.status === 'ACCEPTED' && isRecruitable
}
