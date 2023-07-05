-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_skin_id_fkey";

-- AlterTable
ALTER TABLE "Notification" ALTER COLUMN "skin_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_skin_id_fkey" FOREIGN KEY ("skin_id") REFERENCES "Skin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
