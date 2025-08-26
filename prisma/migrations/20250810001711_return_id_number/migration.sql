/*
  Warnings:

  - The primary key for the `message` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `message` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `messageNow` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `messageNow` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "message_id_key";

-- DropIndex
DROP INDEX "messageNow_id_key";

-- AlterTable
ALTER TABLE "message" DROP CONSTRAINT "message_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "message_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "messageNow" DROP CONSTRAINT "messageNow_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "messageNow_pkey" PRIMARY KEY ("id");
