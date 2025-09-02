import path from 'path'
import { writeFile } from 'fs/promises'
import { randomUUID } from 'crypto'
import fs from 'node:fs'

const extensions: Rec = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
}

export async function withFs(file: Blob) {
  const fileName = randomUUID() + extensions[file.type]
  const folder = 'public/usercontent'

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder)
  }

  const publicPath = path.join(folder, fileName)
  const filePath = path.join(process.cwd(), publicPath)

  const buffer = await file.arrayBuffer()
  const view = new Uint8Array(buffer)
  await writeFile(filePath, view)

  return '/' + publicPath
}
