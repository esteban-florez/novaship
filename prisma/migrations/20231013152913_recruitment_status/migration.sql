/*
  Warnings:

  - Made the column `status` on table `Recruitment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Recruitment" ALTER COLUMN "status" SET NOT NULL;
