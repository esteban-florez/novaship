/*
  Warnings:

  - You are about to drop the column `description` on the `Log` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Log` table. All the data in the column will be lost.
  - Added the required column `action` to the `Log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Log" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "action" TEXT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL;
