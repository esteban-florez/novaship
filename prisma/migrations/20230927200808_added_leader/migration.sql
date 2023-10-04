/*
  Warnings:

  - You are about to drop the column `membershipId` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `isLeader` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `membershipId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `isLeader` on the `Participation` table. All the data in the column will be lost.
  - You are about to drop the column `membershipId` on the `Participation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[leaderId]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - Made the column `personId` on table `Membership` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `teamId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personId` to the `Participation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personId` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leaderId` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_membershipId_fkey";

-- DropForeignKey
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_membershipId_fkey";

-- DropForeignKey
ALTER TABLE "Participation" DROP CONSTRAINT "Participation_membershipId_fkey";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "membershipId";

-- AlterTable
ALTER TABLE "Membership" DROP COLUMN "companyId",
DROP COLUMN "isLeader",
ALTER COLUMN "personId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "membershipId",
ADD COLUMN     "companyId" TEXT,
ADD COLUMN     "personId" TEXT,
ADD COLUMN     "teamId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Participation" DROP COLUMN "isLeader",
DROP COLUMN "membershipId",
ADD COLUMN     "personId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "personId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "leaderId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Leader" (
    "id" TEXT NOT NULL,
    "personId" TEXT,
    "companyId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Leader_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_leaderId_key" ON "Team"("leaderId");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_leaderId_fkey" FOREIGN KEY ("leaderId") REFERENCES "Leader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leader" ADD CONSTRAINT "Leader_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leader" ADD CONSTRAINT "Leader_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participation" ADD CONSTRAINT "Participation_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
