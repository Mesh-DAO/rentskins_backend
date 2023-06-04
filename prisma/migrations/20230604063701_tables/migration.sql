-- CreateTable
CREATE TABLE "Skin" (
    "id" SERIAL NOT NULL,
    "skin_image" VARCHAR(255),
    "skin_name" VARCHAR(255) NOT NULL,
    "skin_category" VARCHAR(255) NOT NULL,
    "skin_weapon" VARCHAR(255) NOT NULL,
    "skin_price" VARCHAR(255) NOT NULL,
    "skin_float" VARCHAR(255) NOT NULL,
    "seller_name" VARCHAR(255) NOT NULL,
    "seller_id" VARCHAR(255) NOT NULL,
    "buyer_name" VARCHAR(255),
    "buyer_id" VARCHAR(255),
    "status" VARCHAR(255) NOT NULL,
    "sale_type" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "cartId" INTEGER,

    CONSTRAINT "Skin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "buyer_name" VARCHAR(255) NOT NULL,
    "buyer_id" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wallet" (
    "id" SERIAL NOT NULL,
    "owner_name" VARCHAR(255) NOT NULL,
    "owner_id" VARCHAR(255) NOT NULL,
    "value" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Skin" ADD CONSTRAINT "Skin_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;
