import { auth } from '@/lib/auth/api'
import { handleError } from '@/lib/errors/api'
import { execSync } from 'node:child_process'
import { readFile, rm, writeFile } from 'node:fs/promises'
import { notFound } from 'next/navigation'
import { NextResponse, type NextRequest } from 'next/server'
import { TABLES } from './tables'
import logEvent from '@/lib/data-fetching/log'
import { logs } from '@/lib/log'

export async function GET(request: NextRequest) {
  try {
    const { authUserId, type } = await auth.user(request)

    if (type !== 'ADMIN') {
      notFound()
    }

    execSync('pg_dump novaship > public/backup.sql -a')

    const content = await readFile('public/backup.sql', { encoding: 'utf-8' })

    await rm('public/backup.sql')

    const { backup_db: { message, model, status } } = logs
    await logEvent({
      action: message,
      model,
      status,
      authUserId,
    })

    return new Response(content)
  } catch (error) {
    handleError(error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const { authUserId, type } = await auth.user(request)

    if (type !== 'ADMIN') {
      notFound()
    }

    const backup = await request.blob()
    const buffer = await backup.arrayBuffer()
    const view = new DataView(buffer)

    await writeFile('public/received.sql', view)

    execSync(`psql --dbname=novaship --command='TRUNCATE TABLE ${TABLES} CASCADE;'`)

    execSync('psql --dbname=novaship --command="\\i public/received.sql"')

    await rm('public/received.sql')

    const { restore_db: { message, model, status } } = logs
    await logEvent({
      action: message,
      model,
      status,
      authUserId,
    })

    return new Response()
  } catch (error) {
    return NextResponse.error()
  }
}
