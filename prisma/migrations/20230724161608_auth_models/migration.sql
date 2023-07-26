/*
  Warnings:

  - You are about to drop the `auth_key` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `auth_session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `auth_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_userId_fkey";

-- DropForeignKey
ALTER TABLE "Institute" DROP CONSTRAINT "Institute_userId_fkey";

-- DropForeignKey
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_userId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_senderId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropForeignKey
ALTER TABLE "auth_key" DROP CONSTRAINT "auth_key_user_id_fkey";

-- DropForeignKey
ALTER TABLE "auth_session" DROP CONSTRAINT "auth_session_user_id_fkey";

-- DropTable
DROP TABLE "auth_key";

-- DropTable
DROP TABLE "auth_session";

-- DropTable
DROP TABLE "auth_user";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "phone" TEXT,
    "bio" TEXT,
    "address" TEXT,
    "image" TEXT,
    "profileId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "AuthUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthSession" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "active_expires" BIGINT NOT NULL,
    "idle_expires" BIGINT NOT NULL,
    "authUserEmail" TEXT,

    CONSTRAINT "AuthSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthKey" (
    "id" TEXT NOT NULL,
    "hashed_password" TEXT,
    "user_id" TEXT NOT NULL,
    "primary_key" BOOLEAN NOT NULL,
    "expires" BIGINT,
    "authUserEmail" TEXT,

    CONSTRAINT "AuthKey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "AuthUser_email_key" ON "AuthUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AuthUser_userId_key" ON "AuthUser"("userId");

-- CreateIndex
CREATE INDEX "AuthSession_user_id_idx" ON "AuthSession"("user_id");

-- CreateIndex
CREATE INDEX "AuthKey_user_id_idx" ON "AuthKey"("user_id");

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Institute" ADD CONSTRAINT "Institute_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthUser" ADD CONSTRAINT "AuthUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthSession" ADD CONSTRAINT "AuthSession_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "AuthUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthKey" ADD CONSTRAINT "AuthKey_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "AuthUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
