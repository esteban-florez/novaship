/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Skill_title_key" ON "Skill"("title");
