-- CreateTable
CREATE TABLE "Subparticipation" (
    "id" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "subtaskId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subparticipation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Subparticipation" ADD CONSTRAINT "Subparticipation_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subparticipation" ADD CONSTRAINT "Subparticipation_subtaskId_fkey" FOREIGN KEY ("subtaskId") REFERENCES "Subtask"("id") ON DELETE CASCADE ON UPDATE CASCADE;
