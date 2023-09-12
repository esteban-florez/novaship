/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Feature` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Grade` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Hiring` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Institute` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Internship` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Interview` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Participation` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Recruitment` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Revision` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Subtask` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Vacant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Grade" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Hiring" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Institute" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Internship" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Interview" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Membership" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Participation" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Recruitment" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Revision" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Subtask" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Vacant" DROP COLUMN "deletedAt";
