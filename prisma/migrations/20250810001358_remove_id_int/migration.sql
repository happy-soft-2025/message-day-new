/*
  Warnings:

  - The primary key for the `message` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `messageNow` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `message` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `messageNow` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "message" DROP CONSTRAINT "message_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "message_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "message_id_seq";

-- AlterTable
ALTER TABLE "messageNow" DROP CONSTRAINT "messageNow_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "messageNow_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "messageNow_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "message_id_key" ON "message"("id");

-- CreateIndex
CREATE UNIQUE INDEX "messageNow_id_key" ON "messageNow"("id");
