import { redirect } from 'next/navigation'
import { url } from '@/lib/utils/url'

export default function AdminPage() {
  redirect(url('/home/admin/verifications').pathname)
}
