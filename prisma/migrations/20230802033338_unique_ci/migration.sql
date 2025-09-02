/*
  Warnings:

  - A unique constraint covering the columns `[ci]` on the table `Person` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Person_ci_key" ON "Person"("ci");
