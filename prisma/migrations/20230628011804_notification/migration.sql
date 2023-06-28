-- CreateTable
CREATE TABLE "Notification" (
    "id" VARCHAR(36) NOT NULL,
    "owner_name" VARCHAR(255) NOT NULL,
    "owner_id" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "new" BOOLEAN DEFAULT true,
    "skin_id" VARCHAR(36) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_skin_id_fkey" FOREIGN KEY ("skin_id") REFERENCES "Skin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
