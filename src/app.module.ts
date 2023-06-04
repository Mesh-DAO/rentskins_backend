import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CartModule } from "./app/cart/cart.module";
import { WalletModule } from "./app/wallet/wallet.module";
import { SkinsModule } from "./app/skins/skins.module";

@Module({
  imports: [ConfigModule.forRoot(), CartModule, WalletModule, SkinsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
