/*
  Warnings:

  - A unique constraint covering the columns `[rif]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rif]` on the table `Institute` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rif` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rif` to the `Institute` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "rif" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Institute" ADD COLUMN     "rif" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Company_rif_key" ON "Company"("rif");

-- CreateIndex
CREATE UNIQUE INDEX "Institute_rif_key" ON "Institute"("rif");
