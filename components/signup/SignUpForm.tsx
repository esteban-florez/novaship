'use client'

import useFormHandling from '@/lib/hooks/useFormHandling'
import General from './General'
import UserType from './UserType'
import SignUserForm from './SignUserForm'
import PhotoProfile from './PhotoProfile'
import ThemePreferences from './ThemePreferences'
import UserCalendar from './UserCalendar'
import UserCurriculum from './UserCurriculum'
import { useState } from 'react'

export default function SignUpForm() {
  const { onSubmit, alert } = useFormHandling()
  const [step, setStep] = useState('general')
  const allSteps = {
    general: <General setStep={setStep} />,
    userType: <UserType setStep={setStep} />,
    signUserForm: <SignUserForm setStep={setStep} />,
    photoProfile: <PhotoProfile setStep={setStep} />,
    themePreferences: <ThemePreferences setStep={setStep} />,
    userCalendar: <UserCalendar setStep={setStep} />,
    userCurriculum: <UserCurriculum setStep={setStep} />,
  }

  return (
    // TODO -> client-side form validation
    <form onSubmit={onSubmit} method="POST" action="/api/auth/signup">
      {alert}
      {allSteps[step]}
    </form>
  )
}
