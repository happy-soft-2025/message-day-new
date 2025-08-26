-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);
