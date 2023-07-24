import ProfileTabs from '@/components/profile/ProfileTabs'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="p-4">
      <ProfileTabs />
      {children}
    </main>
  )
}
