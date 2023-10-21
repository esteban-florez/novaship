/*
  Warnings:

  - You are about to drop the column `companyId` on the `Internship` table. All the data in the column will be lost.
  - You are about to drop the column `stage` on the `Internship` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Internship" DROP CONSTRAINT "Internship_companyId_fkey";

-- AlterTable
ALTER TABLE "Internship" DROP COLUMN "companyId",
DROP COLUMN "stage",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Offer" ADD COLUMN     "hidden" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Vacant" ADD COLUMN     "hidden" BOOLEAN NOT NULL DEFAULT false;

-- DropEnum
DROP TYPE "Stage";
