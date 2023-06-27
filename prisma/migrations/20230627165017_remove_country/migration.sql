/*
  Warnings:

  - You are about to drop the column `countryId` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `countryId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Country` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_countryId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_countryId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "countryId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "countryId",
ADD COLUMN     "password" TEXT NOT NULL;

-- DropTable
DROP TABLE "Country";
