import { type NextRequest } from 'next/server'
import { handleError } from '@/lib/errors/api'
import prisma from '@/prisma/client'
import { auth } from '@/lib/auth/api'
import { notFound } from 'next/navigation'
import { renderToStream } from '@react-pdf/renderer'
import { getRecruitment } from '@/lib/data-fetching/recruitments'
import { ProgressHistoryPDF } from '@/components/pdfs/ProgressHistory'
// @ts-expect-error Package without types.
import streamToBlob from 'stream-to-blob'

export async function GET(request: NextRequest, { params: { id } }: PageContext) {
  try {
    await auth.user(request)

    const recruitment = await getRecruitment(id)

    if (recruitment === null || recruitment.status !== 'ACCEPTED') {
      notFound()
    }

    const progresses = await prisma.progress.findMany({
      where: {
        recruitmentId: recruitment.id,
      },
      orderBy: {
        startsAt: 'desc',
      },
    })

    const stream = await renderToStream(ProgressHistoryPDF({ progresses, recruitment }))

    const blob: Blob = await streamToBlob(stream, 'application/pdf')

    return new Response(blob)
  } catch (error) {
    return handleError(error)
  }
}
