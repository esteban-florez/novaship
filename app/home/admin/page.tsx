import { redirect } from 'next/navigation'
import { href } from '@/lib/utils/url'

export default function AdminPage() {
  redirect(href('/home/admin/verifications'))
}
