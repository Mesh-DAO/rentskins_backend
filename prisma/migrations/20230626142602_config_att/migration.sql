-- AlterTable
ALTER TABLE "Configuration" ADD COLUMN     "agreed_with_emails" BOOLEAN DEFAULT false,
ADD COLUMN     "agreed_with_terms" BOOLEAN DEFAULT false,
ALTER COLUMN "steam_guard" DROP NOT NULL;
