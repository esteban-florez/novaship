/*
  Warnings:

  - You are about to drop the column `hidden` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `hidden` on the `Vacant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "hidden";

-- AlterTable
ALTER TABLE "Vacant" DROP COLUMN "hidden";
