-- CreateTable
CREATE TABLE "PreRegistration" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PreRegistration_id_key" ON "PreRegistration"("id");
