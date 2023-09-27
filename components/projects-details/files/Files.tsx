import { type Participation, type File, type Membership } from '@prisma/client'
import FileItem from './FileItem'

interface Props {
  projectId: string
  files: Array<File & {
    membership: Membership & {
      participations: Participation[]
    }
  }>
}

export default function Files({ projectId, files }: Props) {
  return (
    <div className="flex w-full flex-col gap-3">
      {files.map(file => {
        return (
          <FileItem
            key={file.id}
            file={file}
            projectId={projectId}
          />
        )
      })}
    </div>
  )
}
