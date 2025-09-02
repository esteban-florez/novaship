/*
  Warnings:

  - You are about to drop the column `role` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Internship` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Internship` table. All the data in the column will be lost.
  - You are about to drop the column `postulationId` on the `Interview` table. All the data in the column will be lost.
  - You are about to drop the column `recruitmentId` on the `Interview` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `personId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `target` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `qualification` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `personId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `candidacyId` on the `Recruitment` table. All the data in the column will be lost.
  - The `status` column on the `Recruitment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `description` on the `Revision` table. All the data in the column will be lost.
  - You are about to drop the `Candidacy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Field` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Postulation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Release` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FieldToOffer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FieldToPerson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FieldToProject` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[preview]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `jobId` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `membershipId` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `completed` to the `Internship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gradeId` to the `Internship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hours` to the `Internship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hiringId` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `membershipId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobId` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employable` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `interested` to the `Recruitment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vacantId` to the `Recruitment` table without a default value. This is not possible if the table is not empty.
  - Made the column `internshipId` on table `Recruitment` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `content` to the `Revision` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'REJECTED', 'ACCEPTED');

-- CreateEnum
CREATE TYPE "Stage" AS ENUM ('PENDING', 'ACTIVE', 'COMPLETED', 'DROPPED');

-- CreateEnum
CREATE TYPE "State" AS ENUM ('REQUESTED', 'REJECTED', 'PLANNING', 'PRICING', 'CONFIRMED', 'CANCELED');

-- CreateEnum
CREATE TYPE "Interested" AS ENUM ('PERSON', 'COMPANY');

-- DropForeignKey
ALTER TABLE "Candidacy" DROP CONSTRAINT "Candidacy_personId_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Interview" DROP CONSTRAINT "Interview_postulationId_fkey";

-- DropForeignKey
ALTER TABLE "Interview" DROP CONSTRAINT "Interview_recruitmentId_fkey";

-- DropForeignKey
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_personId_fkey";

-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Postulation" DROP CONSTRAINT "Postulation_candidacyId_fkey";

-- DropForeignKey
ALTER TABLE "Postulation" DROP CONSTRAINT "Postulation_internId_fkey";

-- DropForeignKey
ALTER TABLE "Postulation" DROP CONSTRAINT "Postulation_offerId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_personId_fkey";

-- DropForeignKey
ALTER TABLE "Recruitment" DROP CONSTRAINT "Recruitment_candidacyId_fkey";

-- DropForeignKey
ALTER TABLE "Release" DROP CONSTRAINT "Release_projectId_fkey";

-- DropForeignKey
ALTER TABLE "_FieldToOffer" DROP CONSTRAINT "_FieldToOffer_A_fkey";

-- DropForeignKey
ALTER TABLE "_FieldToOffer" DROP CONSTRAINT "_FieldToOffer_B_fkey";

-- DropForeignKey
ALTER TABLE "_FieldToPerson" DROP CONSTRAINT "_FieldToPerson_A_fkey";

-- DropForeignKey
ALTER TABLE "_FieldToPerson" DROP CONSTRAINT "_FieldToPerson_B_fkey";

-- DropForeignKey
ALTER TABLE "_FieldToProject" DROP CONSTRAINT "_FieldToProject_A_fkey";

-- DropForeignKey
ALTER TABLE "_FieldToProject" DROP CONSTRAINT "_FieldToProject_B_fkey";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "role",
ADD COLUMN     "jobId" TEXT NOT NULL,
ALTER COLUMN "to" DROP NOT NULL;

-- AlterTable
ALTER TABLE "File" DROP COLUMN "authorId",
ADD COLUMN     "membershipId" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Internship" DROP COLUMN "description",
DROP COLUMN "isActive",
ADD COLUMN     "companyId" TEXT,
ADD COLUMN     "completed" INTEGER NOT NULL,
ADD COLUMN     "gradeId" TEXT NOT NULL,
ADD COLUMN     "hours" INTEGER NOT NULL,
ADD COLUMN     "stage" "Stage" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Interview" DROP COLUMN "postulationId",
DROP COLUMN "recruitmentId",
ADD COLUMN     "hiringId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Membership" DROP COLUMN "projectId",
ADD COLUMN     "companyId" TEXT,
ADD COLUMN     "isLeader" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "teamId" TEXT NOT NULL,
ALTER COLUMN "personId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "personId",
ADD COLUMN     "membershipId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "target",
ADD COLUMN     "jobId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "qualification",
ADD COLUMN     "employable" BOOLEAN NOT NULL,
ADD COLUMN     "locationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "companyId",
DROP COLUMN "personId",
ADD COLUMN     "preview" TEXT,
ADD COLUMN     "teamId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Recruitment" DROP COLUMN "candidacyId",
ADD COLUMN     "interested" "Interested" NOT NULL,
ADD COLUMN     "vacantId" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" DEFAULT 'PENDING',
ALTER COLUMN "internshipId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Revision" DROP COLUMN "description",
ADD COLUMN     "content" TEXT NOT NULL;

-- DropTable
DROP TABLE "Candidacy";

-- DropTable
DROP TABLE "Field";

-- DropTable
DROP TABLE "Postulation";

-- DropTable
DROP TABLE "Release";

-- DropTable
DROP TABLE "_FieldToOffer";

-- DropTable
DROP TABLE "_FieldToPerson";

-- DropTable
DROP TABLE "_FieldToProject";

-- DropEnum
DROP TYPE "RecruitmentStatus";

-- DropEnum
DROP TYPE "Target";

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "state" "State" NOT NULL DEFAULT 'REQUESTED',
    "price" DOUBLE PRECISION,
    "projectId" TEXT,
    "teamId" TEXT NOT NULL,
    "personId" TEXT,
    "companyId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "answer" TEXT,
    "contractId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hiring" (
    "id" TEXT NOT NULL,
    "status" "Status" DEFAULT 'PENDING',
    "interested" "Interested" NOT NULL,
    "offerId" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Hiring_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vacant" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "limit" INTEGER NOT NULL,
    "jobId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Vacant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grade" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Grade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToPerson" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToTeam" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToProject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToOffer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToInternship" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToVacant" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_JobToPerson" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_GradeToPerson" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_GradeToVacant" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_SkillToVacant" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Contract_projectId_key" ON "Contract"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_title_key" ON "Category"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Job_title_key" ON "Job"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Grade_title_key" ON "Grade"("title");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToPerson_AB_unique" ON "_CategoryToPerson"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToPerson_B_index" ON "_CategoryToPerson"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToTeam_AB_unique" ON "_CategoryToTeam"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToTeam_B_index" ON "_CategoryToTeam"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToProject_AB_unique" ON "_CategoryToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToProject_B_index" ON "_CategoryToProject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToOffer_AB_unique" ON "_CategoryToOffer"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToOffer_B_index" ON "_CategoryToOffer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToInternship_AB_unique" ON "_CategoryToInternship"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToInternship_B_index" ON "_CategoryToInternship"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToVacant_AB_unique" ON "_CategoryToVacant"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToVacant_B_index" ON "_CategoryToVacant"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_JobToPerson_AB_unique" ON "_JobToPerson"("A", "B");

-- CreateIndex
CREATE INDEX "_JobToPerson_B_index" ON "_JobToPerson"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GradeToPerson_AB_unique" ON "_GradeToPerson"("A", "B");

-- CreateIndex
CREATE INDEX "_GradeToPerson_B_index" ON "_GradeToPerson"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GradeToVacant_AB_unique" ON "_GradeToVacant"("A", "B");

-- CreateIndex
CREATE INDEX "_GradeToVacant_B_index" ON "_GradeToVacant"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SkillToVacant_AB_unique" ON "_SkillToVacant"("A", "B");

-- CreateIndex
CREATE INDEX "_SkillToVacant_B_index" ON "_SkillToVacant"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Project_preview_key" ON "Project"("preview");

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hiring" ADD CONSTRAINT "Hiring_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hiring" ADD CONSTRAINT "Hiring_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_hiringId_fkey" FOREIGN KEY ("hiringId") REFERENCES "Hiring"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Internship" ADD CONSTRAINT "Internship_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Internship" ADD CONSTRAINT "Internship_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "Grade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vacant" ADD CONSTRAINT "Vacant_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vacant" ADD CONSTRAINT "Vacant_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vacant" ADD CONSTRAINT "Vacant_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recruitment" ADD CONSTRAINT "Recruitment_vacantId_fkey" FOREIGN KEY ("vacantId") REFERENCES "Vacant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPerson" ADD CONSTRAINT "_CategoryToPerson_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPerson" ADD CONSTRAINT "_CategoryToPerson_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToTeam" ADD CONSTRAINT "_CategoryToTeam_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToTeam" ADD CONSTRAINT "_CategoryToTeam_B_fkey" FOREIGN KEY ("B") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProject" ADD CONSTRAINT "_CategoryToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProject" ADD CONSTRAINT "_CategoryToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToOffer" ADD CONSTRAINT "_CategoryToOffer_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToOffer" ADD CONSTRAINT "_CategoryToOffer_B_fkey" FOREIGN KEY ("B") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToInternship" ADD CONSTRAINT "_CategoryToInternship_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToInternship" ADD CONSTRAINT "_CategoryToInternship_B_fkey" FOREIGN KEY ("B") REFERENCES "Internship"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToVacant" ADD CONSTRAINT "_CategoryToVacant_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToVacant" ADD CONSTRAINT "_CategoryToVacant_B_fkey" FOREIGN KEY ("B") REFERENCES "Vacant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToPerson" ADD CONSTRAINT "_JobToPerson_A_fkey" FOREIGN KEY ("A") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToPerson" ADD CONSTRAINT "_JobToPerson_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GradeToPerson" ADD CONSTRAINT "_GradeToPerson_A_fkey" FOREIGN KEY ("A") REFERENCES "Grade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GradeToPerson" ADD CONSTRAINT "_GradeToPerson_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GradeToVacant" ADD CONSTRAINT "_GradeToVacant_A_fkey" FOREIGN KEY ("A") REFERENCES "Grade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GradeToVacant" ADD CONSTRAINT "_GradeToVacant_B_fkey" FOREIGN KEY ("B") REFERENCES "Vacant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToVacant" ADD CONSTRAINT "_SkillToVacant_A_fkey" FOREIGN KEY ("A") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToVacant" ADD CONSTRAINT "_SkillToVacant_B_fkey" FOREIGN KEY ("B") REFERENCES "Vacant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
