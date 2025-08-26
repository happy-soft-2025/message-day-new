-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_category_key" ON "category"("category");
