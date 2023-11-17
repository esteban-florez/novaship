/*
  Warnings:

  - You are about to drop the column `completed` on the `Internship` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Internship" DROP COLUMN "completed";

-- CreateTable
CREATE TABLE "Progress" (
    "id" TEXT NOT NULL,
    "hours" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "recruitmentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Progress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Progress" ADD CONSTRAINT "Progress_recruitmentId_fkey" FOREIGN KEY ("recruitmentId") REFERENCES "Recruitment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
