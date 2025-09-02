import { redirect } from 'next/navigation'
import { uri } from '@/lib/utils/url'

export default function AdminPage() {
  redirect(uri('/home/admin/verifications'))
}
