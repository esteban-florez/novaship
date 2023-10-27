-- DropIndex
DROP INDEX "Project_image_key";

-- AlterTable
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Resets" (
    "id" TEXT NOT NULL,
    "authUserId" TEXT NOT NULL,
    "usedAt" TIMESTAMP(3),

    CONSTRAINT "Resets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Resets_id_key" ON "Resets"("id");

-- AddForeignKey
ALTER TABLE "Resets" ADD CONSTRAINT "Resets_authUserId_fkey" FOREIGN KEY ("authUserId") REFERENCES "AuthUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
