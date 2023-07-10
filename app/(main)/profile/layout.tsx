import ProfileForms from '@/components/profile/ProfileForms'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="p-4">
      <ProfileForms />
      {children}
    </main>
  )
}
