import { InvitationData } from "@/lib/types"
import { format } from "@/lib/utils/date"
import Link from "next/link"

type Props = {
  invitation: InvitationData
}

export default function InfoCard({ invitation }: Props) {
  return (
    <div className="card card-compact bg-base-100 rounded-lg shadow-lg">
      <div className="p-4">
        <p className="text-neutral-600">
          Has {invitation.status === "ACCEPTED" ? "aceptado" : "rechazado"} la
          invitación al grupo
          <Link
            href={`/home/teams/${invitation.team.id}`}
            className="ms-1"
          >
            <span className="text-primary font-semibold">
              {invitation.team.name}
            </span>
          </Link>
        </p>
        <small className="font-semibold text-neutral-600">
          Invitado el {format(invitation.updatedAt)}
        </small>
      </div>
    </div>
  )
}
