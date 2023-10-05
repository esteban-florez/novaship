import path from 'path'
import { writeFile } from 'fs/promises'
import { randomUUID } from 'crypto'

const extensions: Rec = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
}

export async function withFs(file: Blob) {
  const fileName = randomUUID() + extensions[file.type]
  const publicPath = path.join('usercontent', fileName)
  const filePath = path.join(process.cwd(), 'public', publicPath)

  const buffer = await file.arrayBuffer()
  const view = new Uint8Array(buffer)
  await writeFile(filePath, view)

  return '/' + publicPath
}
