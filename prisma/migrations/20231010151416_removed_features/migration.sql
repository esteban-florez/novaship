/*
  Warnings:

  - You are about to drop the column `adminId` on the `AuthUser` table. All the data in the column will be lost.
  - You are about to drop the `Contract` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Feature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Interview` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
ALTER TYPE "Stage" ADD VALUE 'ACCEPTED';

-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_personId_fkey";

-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_contractId_fkey";

-- DropForeignKey
ALTER TABLE "Interview" DROP CONSTRAINT "Interview_hiringId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_personId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_taskId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_contractId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_personId_fkey";

-- AlterTable
ALTER TABLE "AuthUser" DROP COLUMN "adminId";

-- DropTable
DROP TABLE "Contract";

-- DropTable
DROP TABLE "Feature";

-- DropTable
DROP TABLE "Interview";

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "Question";

-- DropTable
DROP TABLE "Review";

-- DropEnum
DROP TYPE "Platform";

-- DropEnum
DROP TYPE "State";

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "href" TEXT,
    "authUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_authUserId_fkey" FOREIGN KEY ("authUserId") REFERENCES "AuthUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
