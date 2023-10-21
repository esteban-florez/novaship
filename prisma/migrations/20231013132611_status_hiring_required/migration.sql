/*
  Warnings:

  - Made the column `status` on table `Hiring` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Hiring" ALTER COLUMN "status" SET NOT NULL;
