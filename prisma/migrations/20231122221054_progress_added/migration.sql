/*
  Warnings:

  - Added the required column `endsAt` to the `Progress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startsAt` to the `Progress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Progress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endsAt` to the `Recruitment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startsAt` to the `Recruitment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Project_preview_key";

-- DropIndex
DROP INDEX "Project_title_key";

-- AlterTable
ALTER TABLE "Progress" ADD COLUMN     "endsAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startsAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Recruitment" ADD COLUMN     "endsAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startsAt" TIMESTAMP(3) NOT NULL;
