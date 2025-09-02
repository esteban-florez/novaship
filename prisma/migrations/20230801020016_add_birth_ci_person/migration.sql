/*
  Warnings:

  - Added the required column `birth` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ci` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "birth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "ci" TEXT NOT NULL;
