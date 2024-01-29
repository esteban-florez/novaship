import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import { execSync } from 'node:child_process'
import { readFile, rm } from 'node:fs/promises'
import { notFound } from 'next/navigation'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { type } = await auth.user(request)

    if (type !== 'ADMIN') {
      notFound()
    }

    execSync('pg_dump novaship > public/backup.sql')

    const content = await readFile('public/backup.sql', { encoding: 'utf-8' })

    await rm('public/backup.sql')

    return new Response(content)
  } catch (error) {
    handleError(error)
  }
}
