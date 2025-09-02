/*
  Warnings:

  - You are about to drop the column `expiresAt` on the `Vacant` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Vacant` table. All the data in the column will be lost.
  - Added the required column `description` to the `Vacant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Vacant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vacant" DROP COLUMN "expiresAt",
DROP COLUMN "title",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "duration" INTEGER NOT NULL;
