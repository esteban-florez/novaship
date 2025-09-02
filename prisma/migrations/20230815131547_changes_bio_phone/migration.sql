/*
  Warnings:

  - You are about to drop the column `phone` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `Person` table. All the data in the column will be lost.
  - Made the column `phone` on table `Person` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "phone";

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "bio",
ADD COLUMN     "description" TEXT,
ALTER COLUMN "phone" SET NOT NULL;
