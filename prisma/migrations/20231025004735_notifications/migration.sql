/*
  Warnings:

  - You are about to drop the column `content` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `href` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Notification` table. All the data in the column will be lost.
  - Added the required column `data` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "content",
DROP COLUMN "href",
DROP COLUMN "title",
ADD COLUMN     "data" JSONB NOT NULL,
ADD COLUMN     "readAt" TIMESTAMP(3),
ADD COLUMN     "type" TEXT NOT NULL;
