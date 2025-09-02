/*
  Warnings:

  - You are about to drop the column `profileId` on the `Candidacy` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Internship` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FieldToProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProfileToSkill` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `personId` to the `Candidacy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personId` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personId` to the `Internship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Candidacy" DROP CONSTRAINT "Candidacy_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Internship" DROP CONSTRAINT "Internship_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_personId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_profileId_fkey";

-- DropForeignKey
ALTER TABLE "_FieldToProfile" DROP CONSTRAINT "_FieldToProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_FieldToProfile" DROP CONSTRAINT "_FieldToProfile_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProfileToSkill" DROP CONSTRAINT "_ProfileToSkill_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProfileToSkill" DROP CONSTRAINT "_ProfileToSkill_B_fkey";

-- AlterTable
ALTER TABLE "Candidacy" DROP COLUMN "profileId",
ADD COLUMN     "personId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "profileId",
ADD COLUMN     "personId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Internship" DROP COLUMN "profileId",
ADD COLUMN     "personId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "profileId",
ADD COLUMN     "curriculum" TEXT,
ADD COLUMN     "qualification" TEXT,
ADD COLUMN     "schedule" JSONB;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "profileId",
ADD COLUMN     "personId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "_FieldToProfile";

-- DropTable
DROP TABLE "_ProfileToSkill";

-- CreateTable
CREATE TABLE "_PersonToSkill" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FieldToPerson" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PersonToSkill_AB_unique" ON "_PersonToSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_PersonToSkill_B_index" ON "_PersonToSkill"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FieldToPerson_AB_unique" ON "_FieldToPerson"("A", "B");

-- CreateIndex
CREATE INDEX "_FieldToPerson_B_index" ON "_FieldToPerson"("B");

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidacy" ADD CONSTRAINT "Candidacy_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Internship" ADD CONSTRAINT "Internship_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToSkill" ADD CONSTRAINT "_PersonToSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToSkill" ADD CONSTRAINT "_PersonToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FieldToPerson" ADD CONSTRAINT "_FieldToPerson_A_fkey" FOREIGN KEY ("A") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FieldToPerson" ADD CONSTRAINT "_FieldToPerson_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;
