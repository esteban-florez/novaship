import { withFs } from './withFs'

export async function storeFile(file: Blob) {
  const method = process.env.STORAGE_METHOD ?? 'none'
  let publicPath = ''

  if (method === 'filesystem') {
    publicPath = await withFs(file)
  } else if (method === 'none') {
    publicPath = '/card.webp'
  }

  return publicPath
}
